import { Container } from '@chakra-ui/react';
import React from 'react';

type ContainerProps = {
  title: string
  children: React.ReactNode
}

const Container2 = (props: ContainerProps): JSX.Element => {
  const { title, children } = props
  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div>
        {children}
      </div>
    </div>
  )
}
