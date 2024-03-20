import RegisterForm from "./components/form";
import Image from "next/image";

//bg-gradient-to-r from-blue-300 to-blue-600
//Hex codes: soft mint green #D1E8E2, deep teal #19747E, light sky blue #A9D6E5, light gray #E2E2E2
export default function RegisterPage() {

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-deep-teal/40">

            <div className="lg:w-[78vw] w-full  ">


                <div className="w-full h-full bg-white flex shadow-2xl">

                    <div className="lg:w-[39%] lg:min-w-[39%] w-full flex flex-col items-center justify-center p-12">
                        <Image src="/logo-transparent-svg.svg" alt="logo" width={170} height={170} className="mx-auto " />

                        <RegisterForm />
                    </div>

                    <div className="items-center w-full justify-center hidden lg:flex ">
                        <div className="bg-register-banner bg-contain bg-center h-full w-full p-12"></div>
                    </div>
                </div>
            </div>


        </div>

    )
}