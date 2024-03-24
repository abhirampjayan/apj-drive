import React from 'react';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className='px-12 py-6 border-b-2 border-b-gray-950 bg-gray-900'>
      <h1 className='select-none text-xl'>APJ Drive</h1>
    </nav>
  );
};

export default NavBar;
