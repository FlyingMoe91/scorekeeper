import styled from 'styled-components';

import Input from '../components/Input';
import Button from '../components/Button';
import Player from '../components/Player';

export default function Main() {
  return (
    <>
      <CreateGame>
        <Input label="Name of game" placeholder="e.g. Carcassonne" />
        <Input label="Player names" placeholder="e.g. Jon Doe, Jane Doe" />
        <Button doubleWidth={true} children="Create game" />
      </CreateGame>

      <InGame>
        <Player />
        <Button doubleWidth={true} children="Reset  scores" />
        <Button doubleWidth={true} children="End game" />
      </InGame>
    </>
  );
}

const CreateGame = styled.div`
  display: '';
`;

const InGame = styled.div`
  display: none;
`;
