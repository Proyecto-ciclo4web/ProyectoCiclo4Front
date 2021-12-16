import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const DropDown = ({  name, defaultValue = '', required, options }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const optionsSelect = [['', 'Seleccione una opción', true], ...Object.entries(options)];
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);
  return (


      <select
        required={required}
        name={name}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className="w-80 campo mb-10"
      >
        {optionsSelect.map((o) => {
          return (
            <option key={nanoid()} value={o[0]} disabled={o[2] ?? false}>
              {o[1]}
            </option>
          );
        })}
      </select>

  );
};

export default DropDown;