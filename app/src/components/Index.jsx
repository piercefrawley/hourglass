import React from 'react';
import NavLinks from './NavLinks';

export default function Index({ children }) {
  return (
    <div>
      <NavLinks />
      {children}
    </div>
  );
}


export default Index;
