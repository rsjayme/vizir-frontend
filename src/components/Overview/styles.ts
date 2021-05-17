import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 3.2rem 6.5rem;

  .content {
    display: flex;

    .left-content {
      h1 {
        width: 70%;
        font-size: 4rem;
        font-weight: 500;
      }
    }

    .right-content {
      .divisory {
        width: 100%;
        height: 0.2rem;
        background: #d0d0d0;
        margin-bottom: 5.4rem;
      }

      .advantages {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 4rem;

        .advantage-left {
          flex-basis: 37rem;
          width: 35%;

          h1 {
            font-size: 4rem;
            font-weight: 400;
            margin-bottom: 0.5rem;
          }

          p {
            margin-bottom: 1rem;
            color: #666666;
          }
        }
        .advantage-right {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;

          .price-box {
            margin-left: 8.5rem;

            h1 {
              font-size: 5.6rem;
              font-weight: 400;
              color: #ab49ce;
              display: flex;

              span {
                margin-top: 0.8rem;
                margin-left: 0.8rem;
                font-size: 2.4rem;
                display: flex;
                flex-direction: column;

                span {
                  margin-top: -0.1rem;
                  margin-left: -0.1rem;
                }
              }
            }
          }

          table {
            border-collapse: collapse;
            border-radius: 8px;
            border-style: hidden;
            box-shadow: 0 0 0 1px #e5e5e5;
            font-size: 1.4rem;
            text-align: center;

            thead tr {
              border-bottom: 1px solid #d0d0d0;
              color: #ab49ce;
              font-size: 1.8rem;
            }

            th {
              padding: 1.2rem 4rem;
            }

            td {
              border-bottom: 1px solid #d0d0d0;
              padding: 1.5rem 4rem;
            }

            tbody tr {
              border-bottom: 1px solid #d0d0d0;
            }
          }
        }
      }
    }

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      padding: 0 4rem;

      .left-content {
        display: none;
      }
    }

    @media (max-width: 730px) {
      .advantages {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: no-wrap;

        .advantage-left {
          flex-basis: 0 !important;
          width: 70% !important;
          h1 {
            text-align: center;
            margin-bottom: 2rem !important;
          }
        }

        .advantage-right {
          flex-direction: column;

          .price-box {
            margin-top: 4rem;
          }
        }
      }
    }

    @media (max-width: 500px) {
      padding: 6rem 2rem;
      .advantages {
        .advantage-left {
          width: 80% !important;
          h1 {
            text-align: center;
          }
        }

        .advantage-right {
          flex-direction: column;

          .price-box {
            margin-top: 4rem;
          }

          table {
            th {
              padding: 1.2rem 3rem !important;
            }

            td {
              padding: 1.5rem 3rem !important;
            }
          }
        }
      }
    }
  }
`;
