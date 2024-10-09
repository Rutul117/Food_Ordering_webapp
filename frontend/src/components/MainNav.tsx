import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';

export default function MainNav() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Button 
        variant="ghost" 
        className='font-bold hover:text-orange-500 hover:bg-white'
        onClick={async () => {
          console.log("Login button clicked"); // Log when the button is clicked
          await loginWithRedirect(); // Redirect to Auth0 login
        }}
      >
        Log In
      </Button>
    </div>
  );
}
