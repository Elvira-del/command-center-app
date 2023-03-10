import styled from "styled-components";

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap}px;
`;

export const TaskCard = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.bgElem};

  @media (max-width: 360px) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap}px;
  }
`;

export const TaskContent = styled.span`
  flex: 1 1 50%;
`;
