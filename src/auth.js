// import Credentials from "@auth/core/providers/credentials"
// import { connect } from "mongoose"
// import NextAuth from "next-auth"
// import Google from "next-auth/providers/google"
// import User from "../models/User"
// import bcrypt from "bcryptjs/dist/bcrypt"
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Google, 
//     Credentials({
//       id:'credentials',
//       name: 'Credentials',
//       async authorize(credentials) {
//         await connectMongo()
//         try{
//           const user = await User.findOne({email: credentials.email})
//           if(user){
//             //check cridentials
//             const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

//             if (isPasswordCorrect){
//               return user
//             }else{
//               throw new Error('Invalid credentials')
//             }
//        }
//         }catch(err){
//           throw new Error(err)
//         }
//       }
// })
// ],
// page:{
//   error: '/dashboard/login',
  
// }
// })


// next-auth.js (or any API route that handles auth)
import Credentials from "@auth/core/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import User from "../models/User";
import { connect } from "mongoose"
// import { connectMongo } from "../utils/mongodb"; // Ensure you have a MongoDB connection utility

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connectMongo(); // Ensure MongoDB is connected
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            // Check the credentials
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
            if (isPasswordCorrect) {
              return user; // Return the user object
            } else {
              throw new Error("Invalid credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          throw new Error(err.message || "Something went wrong");
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login", // Redirect on error
  },
};

export default NextAuth(authOptions);
