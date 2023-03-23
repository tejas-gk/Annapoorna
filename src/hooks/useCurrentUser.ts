import { useSession } from "next-auth/react";

const useCurrentUser = () => {
  const { data: session, status } = useSession();

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";
  const currentUser = isAuthenticated ? session?.user : null;

  return { isLoading, isAuthenticated, currentUser };
};

export default useCurrentUser;
