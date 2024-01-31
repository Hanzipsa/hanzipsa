import { useState } from 'react';
import { styled } from 'styled-components';

import NavigationBar from '../../components/common/NavigationBar';
import Image from '../../components/common/Image';
import Paragraph from '../../components/common/Paragraph';
import BoldText from '../../components/common/BoldText';
import ProgressBar from '../../components/common/ProgressBar';
import AddressInput from '../../components/common/AddressInput';

const Wrapper = styled.div`
  width: 320px;
  min-height: 568px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: 300;
  white-space: pre-wrap;
`;

function Address({ onPrevious, onNext, matchAddress, matchDetailAddress }) {
  const [address, setAddress] = useState(matchAddress);
  const [detailAddress, setDetailAddress] = useState(matchDetailAddress);

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
        rightContent="다음"
        onPrevious={onPrevious}
        onNext={() => onNext(address, detailAddress)}
      ></NavigationBar>

      <Paragraph
        gap="5px"
        fontSize="35px"
        sentences={[
          <BoldText boldContent="만날 장소" normalContent="를"></BoldText>,
          '정해주세요',
        ]}
      ></Paragraph>

      <ProgressBar value={77}></ProgressBar>

      <AddressInput
        defaultAddress={address}
        defaultDetailAddress={detailAddress}
        setAddress={setAddress}
        setDetailAddress={setDetailAddress}
      ></AddressInput>
    </Wrapper>
  );
}

export default Address;
