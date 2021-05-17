import styled from 'styled-components';

export const Container = styled.footer`
  background: #ffe8d3;

  .content {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 3.2rem 6.5rem;

    nav {
      margin-top: 5rem;
      display: grid;
      grid-template-columns: repeat(5, 1fr);

      > div {
        p.subtitle {
          font-weight: 900;
          margin-bottom: 2.4rem;
        }

        p {
          margin-bottom: 1.6rem;

          a {
            color: inherit;
            text-decoration: none;

            &:hover {
              color: #666666;
            }
          }
        }
      }
    }

    .divisory {
      width: 100%;
      height: 1px;
      background: #cbb7a5;
      margin: 3rem auto;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: 40px;
        height: 34px;
      }

      > span {
        margin-left: 1.8rem;
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 980px) {
    .content {
      nav {
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 4rem;
      }
    }
  }

  @media (max-width: 600px) {
    .content {
      nav {
        text-align: center;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 5rem;
      }
    }
  }

  @media (max-width: 450px) {
    .content {
      nav {
        text-align: center;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 5rem;
      }
    }
  }
`;
