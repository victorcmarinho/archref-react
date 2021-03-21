import React, { memo } from 'react';
import Lottie, { Options } from 'react-lottie';

import reactAtomic from 'assets/json/react-atomic.json';

import { Container } from './styles';

const Loading: React.FC = () => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: reactAtomic,
  };
  return (
    <Container>
      <Lottie options={defaultOptions} />
    </Container>
  );
};

export default memo(Loading);
