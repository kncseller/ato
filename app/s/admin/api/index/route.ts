import { NextRequest } from 'next/server';
import { cookies, headers } from 'next/headers';
import { withAuth } from '@/lib/with-auth';

const appconfig={
   domainapi :'https://f7.donggiatri.com/users/demo/pluto/'
};

// async function secretGET(request: NextRequest) {
//   return new Response(JSON.stringify({ secret: 'Here be dragons' }), {
//     headers: { 'Content-Type': 'application/json' },
//   });
// }
 
// export const GET = withAuth(secretGET);

export async function GET(request: NextRequest) {
  let url  = request.nextUrl.pathname;

  // const headersList = await headers();
  // const referer = headersList.get('referer');
 
  // 2. Using the standard Web APIs
  const auth = request.headers.get('auth-token');
  const pathname = request.headers.get('x-next-pathname');

  const headers ={};
  if(auth){
    headers["auth-token"]  =auth;
  }

  url = appconfig.domainapi+pathname;
  let data = await fetch(url, { 
    headers: headers,
  }).then((r)=>r.text()).catch((e)=>{

  });
  let transformed = { source: 'proxied-through-nextjs',url };

  if(!data){
    transformed = {...data, source: 'proxied-through-nextjs',url };
  }

  
  return new Response(JSON.stringify(transformed), {
    headers: { 'Content-Type': 'application/json' },
  });
}

/*
/api/users/
 */
// export async function GET(request: Request) {

//   // For example, fetch data from your DB here
//   const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' }
//   ];
//   return new Response(JSON.stringify(users), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' }
//   });
// }
 
export async function POST(request: Request) {
 let url  = request.nextUrl.pathname;

  // const headersList = await headers();
  // const referer = headersList.get('referer');
 
  // 2. Using the standard Web APIs
  const auth = request.headers.get('auth-token');
  const pathname = request.headers.get('x-next-pathname');

  url = appconfig.domainapi+pathname;
   const headers ={};
  if(auth){
    headers["auth-token"]  =auth;
  }

  url = appconfig.domainapi+pathname;
  let data = await fetch(url, { 
    headers: headers,
  }).then((r)=>r.text()).catch((e)=>{

  });

  let transformed = { source: 'proxied-through-nextjs',url };

  if(!data){
    transformed = {...data, source: 'proxied-through-nextjs',url };
  }
 
  return new Response(JSON.stringify(transformed), {
    headers: { 'Content-Type': 'application/json' },
  });
}


