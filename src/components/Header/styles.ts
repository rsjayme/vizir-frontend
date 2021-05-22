import styled from 'styled-components';

export const Container = styled.header`
  background: url('assets/img-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 0 2rem;

  .content {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 3.2rem 6.5rem;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        cursor: pointer;
      }

      img {
        max-width: 10rem;
      }

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
      margin: 10rem 0rem 10rem 8rem;

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

  @media (max-width: 900px) {
    .content {
      padding: 3.2rem 2rem;

      section.header-content {
        padding: 4rem 12rem;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 8px;
        margin: 5rem 1rem;
        width: 90%;

        h1 {
          width: 100%;
        }

        p {
          width: 90%;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .content {
      section.header-content {
        padding: 4rem 3rem;
        width: 100%;
      }

      nav {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          margin-bottom: 3rem;
        }
      }
    }
  }
`;
