import React from 'react';
import { Button } from '~/src/components/form/Bouton';
import { Input } from '~/src/components/form/Input';

export default function BoardForm() {
  return (
    <form className=' felx col flex gap-4'>
      <input name='title' Label='Tile' />
      <Button type='submit'>Create board</Button>
    </form>
  );
}
