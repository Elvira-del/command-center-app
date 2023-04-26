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

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.gap.elem}px;
  }
`;

export const TasksList = styled.ul`
  grid-column: 1 / -1;
`;
