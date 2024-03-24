import { cookies } from 'next/headers'
import { FaChartLine, FaUserAlt, FaUserAltSlash, FaUserPlus, FaBars, FaMoon } from "react-icons/fa"
import Image from 'next/image';
import Link from 'next/link';

function getSession() {
    const id = cookies().get('user_id')?.value;
    if (id) {
        return id;
    }
    return null;
}

export default function NavBar() {
    // lets get some data and see if our client is logged in. If they are, we will show the dashboard link, if not, we will show the register link

    const id = getSession();

    //we are making a nav bar that will have a logo, a dashboard link, and a register link
    return (
        <div className="w-full flex justify-around  items-center text-white p-4 h-auto">
            <Image src="/mini-logo.svg" alt="logo" width="40" height="40" />
            <div className="flex space-x-4 font-semibold text-neutral-600 text-sm ">
                {
                    id
                        ?
                        <Link href="/dashboard" className="flex items-center gap-2">
                            Dashboard
                            <FaChartLine />
                        </Link>
                        :
                        <Link href="/register" className="flex items-center gap-2">
                            Register
                            <FaUserPlus />
                        </Link>
                }
                <div className=" w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-900 to-transparent opacity-25"></div>
                {
                    id
                        ?
                        <Link href="/logout" className="flex items-center gap-2">
                            Logout
                            <FaUserAltSlash />
                        </Link>
                        :
                        <Link href="/login" className="flex items-center gap-2">
                            Login
                            <FaUserAlt />
                        </Link>
                }
                <div className=" w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-900 to-transparent opacity-25"></div>
                <Link href="/menu" className="flex items-center gap-2">
                    <FaBars />
                </Link>
                <div className=" w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-900 to-transparent opacity-25"></div>
                <Link href="/darkmode" className="flex items-center gap-2">
                    <FaMoon />
                </Link>

            </div>


        </div>
    )


}