import styled from 'styled-components';

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  border: 2px solid darkslategray;
  border-radius: 25px;
  width: 62%;
  height: 200px;
  background-color: silver;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  color: floralwhite;
`;

export const Input = styled.input`
  width: 160px;
  height: 30px;
  border-radius: 10px;
  background-color: floralwhite;
`;

export const AddButton = styled.button`
  height: 35px;
  border-radius: 10px;
  background-color: floralwhite;
  font-size: 20px;
  color: green;
`;
