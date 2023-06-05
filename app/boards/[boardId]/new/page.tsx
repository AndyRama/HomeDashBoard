import React from 'react';
import { BoardForm } from '[boardId]/new/BoardForm';

export default function newBoardPage() {
  return (
    <div className='flex flex-col gap-4'>
      <BoardForm />
    </div>
  );
}
