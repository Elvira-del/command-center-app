import styled from "styled-components";

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr auto;
`;

export const TasksTitle = styled.span`
  padding: 15px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fonts.medium};

  @media (max-width: 360px) {
    padding: ${({ theme }) => theme.gap.elem}px;
  }
`;

export const TasksList = styled.ul`
  grid-column: 1 / -1;
`;
