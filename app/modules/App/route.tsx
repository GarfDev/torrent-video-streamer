import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import LoadingState from '../../global/components/LoadingState';
import HomepageRoute from '../Homepage/route';

export default function RootRouter() {
  return (
    <Suspense fallback={<LoadingState />}>
      <Route exact path="/" component={HomepageRoute} />
    </Suspense>
  );
}
