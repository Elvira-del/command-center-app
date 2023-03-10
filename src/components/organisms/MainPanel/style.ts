import styled from "styled-components";

export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap}px;
`;
