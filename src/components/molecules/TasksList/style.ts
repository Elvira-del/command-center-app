import styled from "styled-components";

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr auto;
`;

export const TasksTitle = styled.span`
  padding: 15px;
  text-align: center;

  @media (max-width: 360px) {
    padding: ${({ theme }) => theme.gap.elem}px;
  }
`;

export const TasksList = styled.ul`
  grid-column: 1 / -1;
`;

export const TaskCard = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.gap.block}px;
  grid-column: 1 / -1;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.bgElem};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.gap.elem}px;
  }

  @media (max-width: 360px) {
    gap: 20px;
    padding: ${({ theme }) => theme.gap.elem}px;
  }
`;

export const TaskContent = styled.span`
  flex: 1 1 25%;
  text-align: center;
`;
