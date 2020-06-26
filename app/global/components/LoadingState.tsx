import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 99vh;
  justify-content: center;
  align-items: center;
`;

export default function LoadingState() {
  return <LoadingWrapper />;
}
