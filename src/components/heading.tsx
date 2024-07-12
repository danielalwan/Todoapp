import Counter from './counter';



export default function Header() {
  return (
    <header className='flex justify-between items-center px-5 col-[1/3] row-[1/2] bg-[#fbf5ed]'>
      <img src='https://bytegrad.com/course-assets/react-nextjs/dots.png' />
      <Counter  />
    </header>
  );
}
