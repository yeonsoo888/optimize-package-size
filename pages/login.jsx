import { signInGoogle } from "./api/firebase";

function Login() {
    const handleLogin = () => {
        signInGoogle();
    }

    return (
        <button onClick={handleLogin}>로그인</button>
    )
}

export default Login