import styled from "styled-components";

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

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    gap: 20px;
    padding: ${({ theme }) => theme.gap.elem}px;
  }
`;

export const TaskContent = styled.span`
  flex: 1 1 25%;
  text-align: center;
`;
