import Input from '../components/Input';
import Button from '../components/Button';

export default function Main() {
  return (
    <>
      <Input label="Name of game" placeholder="e.g. Carcassonne" />
      <Input label="Player names" placeholder="e.g. Jon Doe, Jane Doe" />
      <Button doubleWidth={true} children="Create game" />
    </>
  );
}
