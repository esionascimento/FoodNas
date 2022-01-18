import { ElementType, useEffect } from "react";
import { useRouter } from 'next/router';
import { parseCookies } from "nookies";
import { fetchAuthorizationAtlas } from '../services/FetchAtlas';
import { APIATLAS } from '../services/FetchAtlas/utilsAtlas';

export default function withAuth(WrappedComponent: ElementType) {
  const Wrapper = (props: unknown) => {
    const router = useRouter();
    const { 'atlas.token': token } = parseCookies();

    APIATLAS.defaults.headers['Authorization'] = `${token}`;

    useEffect(() => {
      fetchAuthorizationAtlas().then(() => {

      })
      .catch((error) => {
        console.log('errorWithAuth :', error.response);
        router.replace('/');
      });
    }, [router]);
    return <WrappedComponent {...props} />
  }
  return Wrapper;
}
