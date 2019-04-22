import React from 'react';
import style from './style'

export default function TextField(props) {
  // eslint-disable-next-line react/prop-types
  const { error } = props;
  const showError = (error && error !== '');
  return (
    <div>
      <input style={showError ? style.inputBoxStyle : null} {...props} />
      <div hidden={!showError} style={style.useErrorMessageStyle}>
        Could not be greater than
      </div>
    </div>
  );
}
