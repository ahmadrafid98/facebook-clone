import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        objectFit="contain"
        height={400}
        width={400}
      />
      <h1
        onClick={signIn}
        className="text-white p-5 bg-blue-500 rounded-full text-center cursor-pointer hover:bg-blue-400"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
