import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirect = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirect) {
    throw new Error("unable to initiaslise url");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("USER", user)
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirect,
      }}
      onRedirectCallback={onRedirectCallback}
    >{children}</Auth0Provider>
  );
};

export default AuthProvider;
