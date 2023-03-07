import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from 'app/core/router/path';
import LazySpinner from '../../common/components/Spinner/LazySpinner';

const FeaturesRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LazySpinner/>}>
      <BrowserRouter>
        <Switch>
          <Route
            path={ROUTES.FEATURES__BOOKING}
            component={React.lazy(() => import('./Booking'))}
          />
          <Redirect to={ROUTES.FEATURES__BOOKING} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  )
}
export default FeaturesRoutes;
