import React, { memo } from 'react';
import Lottie, { Options } from 'react-lottie';

import reactAtomic from '~/assets/json/react-atomic.json';

import { Container } from './styles';

export interface ILoading {
  title?: string;
}
const Loading: React.FC<ILoading> = ({ title = '' }) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: reactAtomic,
  };
  return (
    <Container>
      <Lottie options={defaultOptions} />
      <h1>{title}</h1>
    </Container>
  );
};

export default memo(Loading);
