import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavigationBar from '../../components/common/NavigationBar';
import Image from '../../components/common/Image';
import ZipsaDetailProfile from '../../components/filter/ZipsaDetailProfile';
import ZipsaDetailRoute from '../../components/filter/ZipsaDetailRoute';
import { getDetailZipsaInfo } from '../../apis/api/zipsaMyPage';

const Wrapper = styled.div`
  width: 320px;
  min-height: 568px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 300;
  white-space: pre-wrap;
`;

const NavigationWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const BoldTextWrapper = styled.div`
  font-weight: bold;
`;

const NormalTextWrapper = styled.div`
  font-weight: normal;
`;

function ZipsaDetail() {
  // NavigationBar 사용 위한 변수 선언
  const navigate = useNavigate();
  const onPrevious = () => {
    navigate(-1);
  };

  // (세부)집사 정보 조회 API 호출
  const location = useLocation();
  const helperId = location.state.helperId;
  const [data, setData] = useState({});
  console.log('ZipsaDetail에서의 helperId : ', helperId);

  useEffect(() => {
    getDetailZipsaInfo(helperId).then(response => {
      console.log('(세부)집사 정보 조회 API 성공');
      setData(response.data);
      console.log(data);
    });
  }, []);

  // 카테고리 변경 위한 변수 정의
  const [selectedCompo, setSelectedCompo] = useState('CATEGORY');

  const number =
    (data.kindnessAverage + data.skillAverage + data.rewindAverage) / 3;
  const avgScore = number.toFixed(2);

  return (
    <Wrapper>
      <NavigationBar
        leftContent={
          <Image
            width="40px"
            height="40px"
            margin="0 0 0 -12px"
            src={process.env.PUBLIC_URL + '/images/left_arrow.svg'}
          ></Image>
        }
        onPrevious={onPrevious}
      ></NavigationBar>

      {/* <ZipsaDetailProfile
        profileImage={data.profileImage}
        name={data.name}
        gradeId={data.gradeId}
        avgScore={avgScore}
        reviewCount={data.reviews.length}
        description={data.description}
      ></ZipsaDetailProfile>

      <NavigationWrapper>
        {selectedCompo === 'CATEGORY' ? (
          <BoldTextWrapper onClick={() => setSelectedCompo('CATEGORY')}>
            집사 전문분야
          </BoldTextWrapper>
        ) : (
          <NormalTextWrapper onClick={() => setSelectedCompo('CATEGORY')}>
            집사 전문분야
          </NormalTextWrapper>
        )}

        {selectedCompo === 'HISTORY' ? (
          <BoldTextWrapper onClick={() => setSelectedCompo('HISTORY')}>
            집사 활동내역
          </BoldTextWrapper>
        ) : (
          <NormalTextWrapper onClick={() => setSelectedCompo('HISTORY')}>
            집사 활동내역
          </NormalTextWrapper>
        )}

        {selectedCompo === 'REVIEW' ? (
          <BoldTextWrapper onClick={() => setSelectedCompo('REVIEW')}>
            고객 리뷰
          </BoldTextWrapper>
        ) : (
          <NormalTextWrapper onClick={() => setSelectedCompo('REVIEW')}>
            고객 리뷰
          </NormalTextWrapper>
        )}
      </NavigationWrapper>

      <ZipsaDetailRoute
        component={selectedCompo}
        subCategory={data.subCategory}
        preferTag={data.preferTag}
        replyAverage={data.replyAverage}
        serviceCount={data.serviceCount}
        kindnessAverage={data.kindnessAverage}
        skillAverage={data.skillAverage}
        rewindAverage={data.rewindAverage}
        totalReview={data.reviews.length}
        reviews={data.reviews}
      ></ZipsaDetailRoute> */}
    </Wrapper>
  );
}

export default ZipsaDetail;
