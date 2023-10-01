'use client'
import styled from 'styled-components';

const MainStyle = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-items: center;
  padding: 3rem;
  flex:1;
  width: 100%;
  justify-content: space-between;

  /* span {
    display: flex;
    justify-content: flex-start;
    font-size: 1.3rem;
    color: #ffffff;
    font-weight: 600;
  } */
  a {
    display: flex;
    justify-content: flex-end;
  }
`;

export default MainStyle;