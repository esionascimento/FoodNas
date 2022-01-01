import { ElementType, useEffect } from "react";
import { useRouter } from 'next/router';
import { parseCookies } from "nookies";
import { fetchAuthorizationAtlas } from '../services/FetchAtlas';
import { APIATLAS } from '../services/FetchAtlas/utilsAtlas';

export default function withAuthLogin(WrappedComponent: ElementType) {
  const Wrapper = (props: unknown) => {
    const router = useRouter();
    const { 'atlas.token': token } = parseCookies();

    APIATLAS.defaults.headers['Authorization'] = `${token}`;

    useEffect(() => {
      fetchAuthorizationAtlas().then((success) => {
        console.log('successLogin :', success);
        router.replace('/dashboard');
      })
      .catch((error) => {
        console.log('errorWithAuthLogin :', error.response);
      });
    }, [router]);
    return <WrappedComponent {...props} />
  }
  return Wrapper;
}
