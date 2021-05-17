import { InputHTMLAttributes, useState } from 'react';
import { Container } from './styles';

interface IFormComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  FormType: string;
  height?: string;
  width?: string;
}

export default function FormComponent({
  title,
  FormType,
  children,
  height,
  width,
  onFocus,
  ...rest
}: IFormComponentProps) {
  return (
    <>
      <Container width={width} height={height}>
        <p>{title}</p>
        <FormType {...rest}>{children}</FormType>
      </Container>
    </>
  );
}
