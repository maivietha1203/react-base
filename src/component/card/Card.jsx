import styled from "styled-components";
const StyledCard = styled.div`
  background-color: white;
`;
const CardImage = styled.div`
  height: 400px;
  width: 400px;
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
  transform: translate(-50%, 0);
  bottom: 0;
  background-color: #f0f0f0;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;
const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg src="https://cdn.dribbble.com/userupload/15122097/file/original-2bdf488a4f6a303f4babbc0fef0ca845.png?resize=752x564&vertical=center"></CardImg>
      </CardImage>
      <CardContent>
        <div>
          <div>
            <img src="https://cdn.dribbble.com/userupload/15122097/file/original-2bdf488a4f6a303f4babbc0fef0ca845.png?resize=752x564&vertical=center"></img>
          </div>
          <span>@maivietha</span>
        </div>
        <div>256</div>

        <div>
          <h3>More by Gerdoo</h3>
          <span>12.000 psl</span>
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
