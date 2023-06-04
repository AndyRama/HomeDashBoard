import { prisma } from '~/src/db/prisma';
import { BoardCard } from '~/src/components/board/BoardCard';

export default async function Home() {
  const boards = await prisma.board.findMany();
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-5xl font-bold'>Board List</h1>
      <ul className='flex flex-col gap-2'>
        {boards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </ul>
    </div>
  );
}
