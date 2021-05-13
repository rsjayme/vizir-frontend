import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 58.5rem;
  background: url('assets/img-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  .content {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 3.2rem 2rem;

    nav {
      display: flex;
      justify-content: space-between;

      ul {
        display: flex;

        li {
          list-style: none;

          & + li {
            margin-left: 5rem;
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          .highlighted-link {
            color: white;
            font-weight: 900;
            background: #ab49ce;
            padding: 1rem 3.7rem;
            border-radius: 5px;
          }
        }
      }
    }

    section.header-content {
      h1 {
        font-weight: 400;
        font-size: 7rem;
        width: 40%;

        span {
          font-weight: 900;
        }
      }

      p {
        margin-top: 0.8rem;
        margin-bottom: 3rem;
        font-size: 1.8rem;
        width: 33%;
      }

      button {
        padding: 1rem 3rem;
        background: none;
        color: #ab49ce;
        font-weight: 900;
        border: 1px solid #ab49ce;
        border-radius: 8px;
      }
    }
  }
`;
