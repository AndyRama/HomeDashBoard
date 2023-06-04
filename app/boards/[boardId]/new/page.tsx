import React from 'react';
import { BoardForm } from './BoardForm';

export default function newBoardPage() {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text -2xl'>Create a new board</h1>
      <BoardForm />
    </div>
  );
}
