import { ChildAsFC } from './Child';

export const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
      ewew
    </ChildAsFC>
  );
};

export default Parent;
