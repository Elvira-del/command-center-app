import styled from "styled-components";

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap}px;
`;

export const TaskCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: rgba(9, 9, 9, 0.1);

  @media (max-width: 670px) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap}px;
  }
`;

export const TaskContent = styled.span`
  flex: 1 1 50%;
`;
