import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.bgFilter};
  font-family: ${({ theme }) => theme.fonts.fontFam};
  color: ${({ theme }) => theme.colors.lightFont};

  &::placeholder,
  ::-webkit-datetime-edit {
    color: rgb(242 242 242 / 50%);
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    &::placeholder,
    ::-webkit-datetime-edit {
      font-size: 12px;
    }
  }
`;
