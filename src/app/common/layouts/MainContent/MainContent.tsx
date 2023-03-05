import React from 'react';

const MainContext: React.FC = (props) => {
  return (
    <div className="w-100">
      {props.children}
    </div>
  )
}

export default MainContext;