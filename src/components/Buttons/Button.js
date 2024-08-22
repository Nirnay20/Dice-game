import styled from "styled-components";
export const Button = styled.button`
  color: white;
  background:#000000;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  

  &:hover{
  background-color: white;
  border: 1px solid black;
  color:black ;
  transition: 0.3s background ease-in;

  }
`;
export const OutlineButton=styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: #000;
&:hover{
  background-color: black;
  border: 1px solid transparent;
  color: white;
  transition: 0.3s ease-in;

  `