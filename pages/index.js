import { signInGoogle } from "./api/firebase";

export default function Home() {

  const handleLogin = () => {
    signInGoogle();
  }

  return (
   <>
    <button onClick={handleLogin}>로그인</button>
   </>
  )
}
