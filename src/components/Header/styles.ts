import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-height: 58vh;
  height: 100%;
  background: url('assets/img-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 0 2rem;

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

            &:hover {
              color: #ab49ce;
            }
          }

          .highlighted-link {
            color: white;
            font-weight: 900;
            background: #ab49ce;
            padding: 1rem 3.7rem;
            border-radius: 8px;
            border: 1px solid #ab49ce;
            transition: all 0.1s;

            &:hover {
              text-decoration: none;
              background: none;
              color: #ab49ce;
            }
          }
        }
      }
    }

    section.header-content {
      width: 100%;
      margin: 0 auto;
      height: 45rem;
      padding: 10rem 0 0 12rem;

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
        width: 36%;
      }

      button {
        padding: 1rem 3rem;
        background: none;
        color: #ab49ce;
        font-weight: 900;
        border: 1px solid #ab49ce;
        border-radius: 8px;
        transition: all 0.1s;

        &:hover {
          background: #ab49ce;
          color: #fff;
        }
      }
    }
  }
`;
