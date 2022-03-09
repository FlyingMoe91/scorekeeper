import styled from 'styled-components';

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <PlayerContainer>
      <PlayerName>{name}</PlayerName>
      <button onClick={onDecrement}>-</button>
      <PlayerScore>{score}</PlayerScore>
      <button onClick={onIncrement}>+</button>
    </PlayerContainer>
  );
}

const PlayerContainer = styled.section`
  display: flex;
  justify-content: right;
  max-width: 500px;
`;

const PlayerName = styled.span`
  margin-right: auto;
`;

const PlayerScore = styled.span`
  margin: 0 12px;
`;
