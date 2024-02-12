import styled from 'styled-components';
import { useState } from 'react';
import NavigationBar from '../common/NavigationBar';
import Image from '../common/Image';
import UpdateDeleteButton from '../common/UpdateDeleteButton';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 20px 0px 0px;
  display: flex;
`;

const LeftBox = styled.div`
  width: 100%;
  height: 100%;
  flex: 2.5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const RightBox = styled.div`
  width: 100%;
  height: 100%;
  flex: 7.5;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: normal;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Address = styled.div``;

const Content = styled.div`
  font-size: 14px;
  font-weight: 350;
`;

const UpdateInput = styled.textarea`
  width: 100%;
  min-height: 80px;
  margin-bottom: 5px;
  padding: 8px;
  font-size: 14px;
  font-weight: 300;
  color: black;
  line-height: 20px;
  /* background-color: #ecf4fa; */
  &::placeholder {
    color: darkgray;
    font-weight: 300;
    line-height: 20px;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 200;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  width: 51px;
  height: 23px;
  border-radius: 5px;
  background-color: #629af9;
  color: white;
`;

function BoardComment({
  image,
  userName,
  address,
  content,
  updatedAt,
  defaultValue,
  submitOnClick,
  needUpdateButton,
  needDeleteButton,
  updateOnClick,
  deleteOnClick,
  update,
}) {
  // 댓글 수정 버튼의 상태를 관리할 변수
  // const [isCommentUpdate, setIsCommentUpdate] = useState(false);

  return (
    <Wrapper>
      <LeftBox>
        <Image
          src={`${process.env.PUBLIC_URL}/images/profile_img.svg`}
          width={'50px'}
          height={'50px'}
          margin={'0 0 0 -12px'}
        ></Image>
      </LeftBox>

      <RightBox>
        <Name>{userName}</Name>
        <Address>{address}</Address>

        {/* isCommentUpdate 상태에 따라서 수정 textarea를 보여주는 부분 */}
        {update ? (
          <>
            <UpdateInput defaultValue={defaultValue}></UpdateInput>
            <SubmitButton onClick={submitOnClick}>완료</SubmitButton>
          </>
        ) : (
          <>
            <Content>{content}</Content>
            <Date>{updatedAt}</Date>
            {/* 수정, 삭제 버튼 넣을 곳 */}
            <UpdateDeleteButton
              needUpdateButton={needUpdateButton}
              needDeleteButton={needDeleteButton}
              updateOnClick={updateOnClick}
              deleteOnClick={deleteOnClick}
            ></UpdateDeleteButton>
          </>
        )}
      </RightBox>
    </Wrapper>
  );
}

export default BoardComment;