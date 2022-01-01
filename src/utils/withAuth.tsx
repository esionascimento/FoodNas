import { ElementType, useEffect } from "react";
import { useRouter } from 'next/router';
import { parseCookies } from "nookies";

export default function withAuth(WrappedComponent: ElementType) {
  const Wrapper = (props: unknown) => {
    const router = useRouter();

    useEffect(() => {
      const { 'atlas.token': token } = parseCookies();
      console.log('token :', token);
  
      if (token) {
        router.replace('/');
      }

    }, [router])

    return <WrappedComponent {...props} />
  }
  return Wrapper;
}
