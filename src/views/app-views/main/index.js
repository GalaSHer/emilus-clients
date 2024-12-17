import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Main = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
      <Route path={`${match.url}/clients/list`} component={lazy(() => import(`./clients-list`))} />
      <Route path={`${match.url}/clients/groups`} component={lazy(() => import(`./clients-groups`))} />
      <Route path={`${match.url}/clients/:id`} component={lazy(() => import(`./settings`))} />
      <Redirect exact from={`${match.url}`} to={`${match.url}/dashboard`} />
    </Switch>
  </Suspense>
);

export default Main;