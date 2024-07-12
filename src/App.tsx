import BackgroundHeading from './components/background-heading';
import Footer from './components/footer';
import Header from './components/heading';
import Sidebar from './components/sidebar';
import TodoList from './components/todo-list';

function App() {
  return (
    <div className='font-sans bg-[#f1d4b3] min-h-screen flex justify-center items-center flex-col'>
      <BackgroundHeading />
      <main className='relative w-[972px] shadow h-[636px] bg-[#fff] rounded-lg overflow-hidden grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]'>
        <Header />
        <TodoList />
        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default App;

