import styled from "styled-components";
const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #dede9d;
`;
const StyledCard = styled.div`
  position: relative;
  width: 400px;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: calc(100% - 36px);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
`;
const CardUser = styled.div`
  display: flex;
  column-gap: 12px;

  align-items: center;
`;
const UserName = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #333;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  color: black;
  font-size: 18px;
  font-weight: 500;
`;
const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
const Card = () => {
  return (
    <ContainerCard>
      <StyledCard>
        <CardImage>
          <CardImg src="https://cdn.dribbble.com/userupload/15122097/file/original-2bdf488a4f6a303f4babbc0fef0ca845.png?resize=752x564&vertical=center"></CardImg>
        </CardImage>
        <CardContent>
          <CardTop>
            <CardUser>
              <UserAvatar src="https://cdn.dribbble.com/userupload/15122097/file/original-2bdf488a4f6a303f4babbc0fef0ca845.png?resize=752x564&vertical=center"></UserAvatar>
              <UserName>@maivietha</UserName>
            </CardUser>
            <div>256</div>
          </CardTop>

          <CardFooter>
            <CardTitle>More by Gerdoo</CardTitle>
            <CardAmount>12.000 psl</CardAmount>
          </CardFooter>
        </CardContent>
      </StyledCard>
    </ContainerCard>
  );
};

export default Card;
