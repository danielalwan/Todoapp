type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => Promise<void>;
};
export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className=' hover:bg-black curser-pointer rounded-lg text-white h-12 bg-black/50 w-full'
    >
      {children}
    </button>
  );
}
