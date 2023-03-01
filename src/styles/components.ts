import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: ${({ theme }) => theme.width.container}px;
  width: 100%;
`;
