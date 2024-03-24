import Link from "next/link";
import LoginForm from "./components/loginForm";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";


export default function LoginPage() {

    return (
        <div className="min-h-screen w-full flex justify-center bg-gray-100">
            <div className="w-full lg:w-1/3 bg-white flex flex-col items-center  p-10">
                <Image src="/logo-transparent-svg.svg" alt="logo" width={170} height={170} className="mb-10" />

                <LoginForm />

                <div className="flex w-full flex-col gap-2 text-center">
                    <p>Don't have an account? <Link href="/register" className="underline-offset-2 underline text-violet-600">Register here</Link></p>
                    <p>Forgot password? <Link href="/forgot-password" className="underline-offset-2 underline text-violet-600">Reset here</Link></p>
                </div>
            </div>
        </div>
    );

}