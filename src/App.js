import Loading from "./components/loading";
import React, { Suspense } from "react";
import { useAuth } from "./context/auth-context";

const AuthenticatedApp = React.lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = React.lazy(() => import("./UnauthenticatedApp"));

function App() {
  const { user } = useAuth();

  return user ? (
    <Suspense fallback={<Loading />}>
      <AuthenticatedApp />
    </Suspense>
  ) : (
    <Suspense fallback={<Loading />}>
      <UnauthenticatedApp />
    </Suspense>
  );
}

export default App;
