import styled from 'styled-components';
import SimpleNotice from '../../components/common/SimpleNotice';
import Paragraph from '../../components/common/Paragraph';
import BoldText from '../../components/common/BoldText';
import HorizontalLine from '../../components/common/HorizontalLine';

import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '../../hooks/useUserInfo';
import { getMatchNotificationList } from '../../apis/api/notify';
import { calculateRemainDate } from '../../utils/time';

const Wrapper = styled.div`
  width: 320px;
  min-height: 568px;
  margin: 0 auto;
  padding: 25px 16px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: 300;
  white-space: pre-wrap;
`;

const SimpleNoticesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function Notify() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  // const userInfo = useUserInfo(state => state.userInfo);

  useEffect(() => {
    getMatchNotificationList().then(response => {
      console.log(response);
      setList(response.data);
    });
  }, []);

  return (
    <Wrapper>
      <Paragraph
        gap="5px"
        fontSize="35px"
        sentences={[
          <BoldText boldContent="알림" normalContent="이"></BoldText>,
          '도착했어요!',
        ]}
        margin="0 0 20px 0"
      ></Paragraph>

      <SimpleNoticesWrapper>
        {list.map((notice, index) => {
          return (
            <Fragment key={index}>
              <SimpleNotice
                mode={notice.type}
                status={notice.status}
                name={notice.name}
                majorCategory={notice.majorCategory}
                createdAt={calculateRemainDate(notice.createdAt)}
                onClick={() =>
                  notice.status === 'CONFIRM'
                    ? navigate(`/reportDetail/${notice.roomId}`)
                    : notice.type === 'ZIPSA'
                      ? navigate(`/suggest-by-user/${notice.notificationId}`)
                      : navigate(`/rooms/detail/${notice.roomId}`)
                }
              ></SimpleNotice>

              <HorizontalLine height={'2px'}></HorizontalLine>
            </Fragment>
          );
        })}
      </SimpleNoticesWrapper>
    </Wrapper>
  );
}

export default Notify;
