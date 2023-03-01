import styled from "styled-components";

export const Header = styled.header``;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  min-height: ${({ theme }) => theme.sizes.header.height}px;
  height: 100%;
`;
