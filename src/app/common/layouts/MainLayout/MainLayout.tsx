import React from 'react';
import MainContext from '../MainContent';

const MainLayout: React.FC = (props) => {
  return (
    <div className="h-100">
      <MainContext>
        {props.children}
      </MainContext>
    </div>
  )
}

export default MainLayout;