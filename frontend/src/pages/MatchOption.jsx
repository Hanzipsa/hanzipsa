import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import BoldText from '../components/common/BoldText';
import Paragraph from '../components/common/Paragraph';
import Button from '../components/common/Button';

const Wrapper = styled.div`
  width: 320px;
  min-height: 568px;
  margin: 0 auto;
  padding: 60px 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #8bc6ec;
  background-image: linear-gradient(0deg, #8bc6ec 0%, #9599e2 100%);
  font-size: 18px;
  font-weight: 300;
  white-space: pre-wrap;
`;

const OptionWrapper = styled.div`
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function MatchOption() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Paragraph
        gap="5px"
        fontSize="35px"
        sentences={[
          <BoldText boldContent="어떤 방식" normalContent="으로"></BoldText>,
          '집사님을',
          '찾고 계신가요?',
        ]}
      ></Paragraph>

      <OptionWrapper>
        <Button
          mode={'THIN_WHITE'}
          msg={'지도에서 빠르게 찾아볼래요.'}
          onClick={() => navigate('/filter')}
        ></Button>
        <Button
          mode={'THIN_WHITE'}
          msg={'조건이 맞는 집사님을 찾고 있어요.'}
          onClick={() => navigate('/filter')}
        ></Button>
        <Button
          mode={'THIN_WHITE'}
          msg={'집사님을 모집해보고 싶어요.'}
          onClick={() => navigate('/filter')}
        ></Button>
      </OptionWrapper>
    </Wrapper>
  );
}

export default MatchOption;
