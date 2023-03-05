import React from 'react';
import MainContext from '../MainContent';

const MainLayout: React.FC = (props) => {
  return (
    <div className="h-100">
      <MainContext>
        <div className="row h-100">
          <div className="col-3 layout-background1">
            <div className="background-filter"></div>
          </div>
          <div className="col-6">
            {props.children}
          </div>
          <div className="col-3 layout-background2">
            <div className="background-filter"></div>
          </div>
        </div>
      </MainContext>
    </div>
  )
}

export default MainLayout;