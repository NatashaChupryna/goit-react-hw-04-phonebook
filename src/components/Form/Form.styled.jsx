import styled from '@emotion/styled';


export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Button = styled.button`
  width: 120px;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  background-color: #a1a3ab;
  cursor: pointer;
  transition: all 300ms;
  :hover {
    background-color: #516aed;
    color: white;
  }
`;
export const NameInput = styled.input`
  margin-left: 25px;
  :focus-visible {
    box-shadow: #516aed 0px 5px 15px;
    border: none;
    outline: transparent;
  }
`;
export const NumberInput = styled.input`
  margin-left: 10px;
  :focus-visible {
    box-shadow: #516aed 0px 5px 15px;
    border: none;
    outline: transparent;
  }
`;