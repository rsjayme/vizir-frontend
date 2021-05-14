import styled from 'styled-components';

export const Container = styled.section`
  background: #ffe8d3;

  .content {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 6rem 2rem;
    display: flex;
    justify-content: space-between;

    .left-content {
      width: 21%;

      h1 {
        font-size: 4rem;
        font-weight: 500;
      }

      p {
        color: #666666;
        margin-top: 1.6rem;
      }
    }

    .right-content {
    }
  }
`;
