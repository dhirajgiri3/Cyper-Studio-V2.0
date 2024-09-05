import styled from 'styled-components';

const Frame = styled.div`
  grid-area: frame;
  z-index: 1000;
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: 'title title' 'prev back';
  grid-gap: 0.5rem;
`;

const Title = styled.h1`
  grid-area: title;
  font-size: inherit;
  margin: 0;
  font-weight: inherit;
`;

const Nav = styled.nav`
  position: relative;
  text-align: right;
  grid-area: demos;
  background: var(--color-bg-demos);
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  z-index: 200;
`;

const Content = styled.div`
  grid-area: content;
  border-radius: 8px;
  background: var(--color-bg-content);
  position: relative;
  z-index: 100;
`;

export const Layout = ({ children }) => (
  <main>
    <Frame>
      <Title>Motion Trail Animations</Title>
      {/* Links */}
    </Frame>
    {children}
  </main>
);
