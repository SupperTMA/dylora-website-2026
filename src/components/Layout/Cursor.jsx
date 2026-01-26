import React from 'react';

const Cursor = () => {
  return (
    <>
      <div className="hidden md:block cursor-dot fixed w-2 h-2 bg-accent rounded-full z-9999 pointer-events-none"></div>
      <div className="hidden md:block cursor-outline fixed w-10 h-10 border border-white/50 rounded-full z-9999 pointer-events-none"></div>
    </>
  );
};

export default Cursor;