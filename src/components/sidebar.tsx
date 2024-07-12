import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import Button from './button';
import AddTodoForm from './add-to-do';
export default function Sidebar() {
  const { isAuthenticated, isLoading, user, login, register, logout } =
    useKindeAuth();
  console.log(isAuthenticated);
  return (
    <div className='col-[2_/_3] row-[2_/_3] bg-[#fffcf9] pt-[18px] px-[25px] pb-[28px] flex flex-col justify-between border-l border-l-[rgba(0,0,0,0.08)]'>
      <AddTodoForm />

      <div className='space-y-2'>
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className='text-sm'>Logged in as {user?.email}</p>

            <Button onClick={() => logout()}>Log out</Button>
          </>
        ) : (
          <>
            <Button onClick={() => login()}>Log in</Button>
            <Button onClick={() => register()}>Register</Button>
          </>
        )}
      </div>
    </div>
  );
}
