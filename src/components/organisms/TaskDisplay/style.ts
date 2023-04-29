import styled from "styled-components";

export const TasksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: ${({ theme }) => theme.gap.elem}px;
`;
