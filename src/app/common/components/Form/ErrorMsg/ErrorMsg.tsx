import React from 'react';

const ErrorMsg: React.FC = (props) => {
  return (
    <>
      <span>{props.children}</span>
    </>
  )
}

export default ErrorMsg;
