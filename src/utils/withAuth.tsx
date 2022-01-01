import { ElementType, useEffect } from "react";
import { useRouter } from 'next/router';
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

export default function withAuth(WrappedComponent: ElementType) {
  console.log('props :', parseCookies());
  const Wrapper = (props: unknown) => {
    const router = useRouter();

    useEffect(() => {
      const { 'atlas.token': token } = parseCookies();
      console.log('token :', token);
  
      if (!token) {
        router.replace('/');
      }

    }, [router])

    return <WrappedComponent {...props} />
  }
  return Wrapper;
}

/* export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  console.log('cookies :', cookies);
  return {
    props: {
      IFOOD_TOKEN: cookies['ifood.token'] ? cookies['ifood.token'] : '',
      ATLAS_TOKEN: cookies['atlas.token'] ? cookies['atlas.token'] : ''
    }
  }
} */

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context;
  console.log('cookies :', cookies);

  if (!cookies) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      IFOOD_TOKEN: cookies['ifood.token'] ? cookies['ifood.token'] : '',
      ATLAS_TOKEN: cookies['atlas.token'] ? cookies['atlas.token'] : ''
    }
  }
}