import React from 'react';
import * as Icons from 'react-icons/fa';

const IconDisplay = ({ iconName, size = 50 }) => {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    return <span>Icon not found</span>;
  }

  return <IconComponent size={size} />;
};

export default IconDisplay;
