// import NextAuth from "next-auth"
// import GoogleProvider from 'next-auth/providers/google';
 
// const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET
  
//     })
//   ]
// })

// export {handlers as GET, handlers as POST}


// import { handlers } from './../../../../../.next/server/vendor-chunks/next-auth';
// export const { GET, POST } = handlers


import { handlers } from "../../../../auth"
export const { GET, POST } = handlers
