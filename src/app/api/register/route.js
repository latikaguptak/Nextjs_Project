// import { connect } from "mongoose";
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs"; // No need to specify /dist/bcrypt
// import User from "../../../../models/User";
// import connectMongo from "@/utils/mongodb";

// export const POST = async (request) => {
//   // Parse the request body
//   const { firstname, lastname, email, password } = await request.json();

//   // Connect to the database
//   await connectMongo()

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10); // Use a higher salt rounds (e.g., 10)

//   // Create a new user instance
//   const newUser = new User({
//     firstname,
//     lastname,
//     email,
//     password: hashedPassword,
//   });

//   try {
//     // Save the new user
//     await newUser.save();
//     return new NextResponse("User registered successfully", {
//       status: 201,
//     });
//   } catch (err) {
//     // Handle duplicate email or other validation errors
//     if (err.code === 11000) {
//       return new NextResponse("Email or username already exists", {
//         status: 409,
//       });
//     }
//     return new NextResponse(err.message, {
//       status: 500,
//     });
//   }
// };


import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // No need to specify /dist/bcrypt
import User from "../../../../models/User";
import connectMongo from "@/utils/mongodb";
import { ToastContainer, toast } from "react-toastify";

export async function POST(request) {
  // Parse the request body
  let data
  try {
    data = await request.json();
  } catch (err) {
    return new NextResponse("Invalid JSON", { status: 400 });
  }

  const { firstname, lastname, email, password } = data;

  // Connect to the database
  await connectMongo();

  // Validate input
  if (!firstname || !lastname || !email || !password) {
    return new NextResponse("All fields are required", { status: 400 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user instance
  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  try {
    // Save the new user
    await newUser.save();
    // toast.success("User registered successfully!");
    return new NextResponse("User registered successfully", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export async function GET() {
  try {
    // Connect to MongoDB
    await connectMongo();

    // Find all posts in the database
    const gets = await User.find({});

    // Return the posts as JSON
    return NextResponse.json(gets, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 });
  }
}
