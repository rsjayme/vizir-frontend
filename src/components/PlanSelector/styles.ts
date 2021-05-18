import styled from 'styled-components';

interface IContainerProps {
  isModalOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
  position: absolute;
  left: 0.6%;
  top: 105%;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 1.9rem;
  width: 99%;
  display: ${(props) => (props.isModalOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: default;
  z-index: 999;

  p {
    align-self: flex-start;
  }

  button {
    margin-top: 2.5rem;
    padding: 0.8rem 1.6rem;
    background: none;
    border: 1px solid #ab49ce;
    border-radius: 8px;

    color: #ab49ce;
    font-size: 1.6rem;
    font-weight: 900;
    transition: all 0.2s;

    &:hover {
      background: #ab49ce;
      color: #fff;
      font-weight: 900;
    }
  }

  .plans {
    margin-top: 1.2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;

    input {
      border: 1px solid red;
      background: none;
    }

    label {
      margin-left: 0.8rem;
    }
  }
`;
