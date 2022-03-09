import styled from 'styled-components';

export default function Input({ label, placeholder, id }) {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={placeholder}></input>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  input {
    max-width: 500px;
  }
`;
