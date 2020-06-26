import React from 'react';
import { Route } from 'react-router-dom';
const Homepage = React.lazy(() => import('./index'));

export default function HomePageRoute() {
  return <Route exact path="/" component={Homepage} />;
}
