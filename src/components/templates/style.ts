import styled from "styled-components";

export const Main = styled.main``;

export const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.gap.block}px;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: ${({ theme }) => theme.sizes.container.width}px;
  width: 100%;

  @media (${({ theme }) => theme.breakpoints.tablets}) {
    padding: 0 30px;
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 15px;
  }
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.gap.block}px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap.block}px;
  min-height: ${({ theme }) => theme.sizes.header.height}px;
  height: 100%;
`;
