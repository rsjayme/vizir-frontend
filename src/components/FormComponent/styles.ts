import styled from 'styled-components';

interface FormComponentStylesProps {
  height: string;
  width: string;
}

export const Container = styled.div<FormComponentStylesProps>`
  p {
    font-size: 1.4rem;
  }

  input,
  select {
    margin-top: 0.8rem;
    background: none;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    height: ${(props) => (props.height ? props.height : '4rem')};
    width: ${(props) => (props.width ? props.width : '40rem')};
    padding: 0 1rem;
    font-size: 1.4rem;
  }
`;
