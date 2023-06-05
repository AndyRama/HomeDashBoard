import React from 'react';
import { BoardForm } from './BoardForm';

export default function newBoardPage() {
  return (
    <div className='flex flex-col gap-4'>
      <BoardForm />
    </div>
  );
}
