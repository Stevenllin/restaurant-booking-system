import React from 'react';

const ErrorMsg: React.FC = (props) => {
  return (
    <>
      <span className="color-danger font-sm">{props.children}</span>
    </>
  )
}

export default ErrorMsg;
