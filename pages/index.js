import { signInGoogle } from "./api/firebase";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

export default function Home() {

  const handleLogin = () => {
    signInGoogle();
  }

  return (
   <>
    <QuillWrapper  theme="snow" />
    <button onClick={handleLogin}>로그인</button>
   </>
  )
}

const QuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})



