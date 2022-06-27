import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

export default function Home() {
  return (
   <>
    <QuillWrapper  theme="snow" />
    <Login />
   </>
  )
}



const Login = dynamic(() => import('./login'), {
  ssr: false,
})

const QuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})



