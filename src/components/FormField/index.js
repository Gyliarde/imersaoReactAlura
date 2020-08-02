import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, type, name, value, onChange,
}) {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}


FormField.propTypes = {
  label, 
  type, 
  name, 
  value, 
  onChange,
}

// Aula 4 17:00 MIn

export default FormField;
