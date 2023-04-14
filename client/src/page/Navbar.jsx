//Import the useAuth0 hook from @auth0/auth0-react to get the methods
import { useAuth0 } from "@auth0/auth0-react";

//get all the neccessary methods from the useAuth0 Hook

// to display the user name
{
  isAuthenticated && (
    <li>
      <p> {user.name} </p>
    </li>
  );
}

// to toggle the login and logout button
{
  isAuthenticated ? (
    <li>
      <Button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </Button>
    </li>
  ) : (
    <li>
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    </li>
  );
}
