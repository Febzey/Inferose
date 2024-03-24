import RegisterForm from "./components/form";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

//bg-gradient-to-r from-blue-300 to-blue-600
//Hex codes: soft mint green #D1E8E2, deep teal #19747E, light sky blue #A9D6E5, light gray #E2E2E2
export default function RegisterPage() {

    return (
        <div className="w-full min-h-screen h-screen flex flex-row bg-gray-100   text-neutral-700">

            <div className="lg:w-1/3 lg:min-w-[33.33%] md:w-full ml-0 lg:ml-[15%] bg-white w-full h-screen">
                <div className="w-full h-full mx-auto  flex flex-col items-center justify-center p-12">

                    <Link href="/" className="text-3xl text-violet-400 mr-auto text-left">
                        <FaArrowLeft />
                    </Link>

                    <RegisterForm />
                </div>

            </div>


            <div className="w-full items-center  lg:block hidden">
                <div className="bg-register-banner mt-[5%] bg-no-repeat bg-contain h-[77%] w-[77%] mx-auto "></div>
            </div>

        </div>

    )
}