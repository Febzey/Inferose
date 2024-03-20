"use client";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [remember, setRememberMe] = useState(false);

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (error !== "") setError("");
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (error !== "") setError("");
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        if (email === "" || password === "") {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }

        fetch(`${process.env.NEXT_PUBLIC_INFEROSE_URL}/post/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                remember: remember
            })
        })
            .then(res => {

                if (res.status === 200) {
                    res.json().then((d) => {
                        // do it
                        if (!document.cookie.includes('user_id') || !document.cookie.includes('client_key')) {
                            // Set cookies only if they don't already exist
                            document.cookie = `user_id=${d.id}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
                            document.cookie = `client_key=${d.client_key}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
                            document.cookie = `email=${d.email}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
                        }
                        //
                        //console.log(, " logged in success")
                        setLoading(false);
                        router.push("/dashboard");
                    }
                    )

                }

                else if (res.status === 404) {
                    setError("Invalid email or password");
                    setLoading(false);
                    return;
                }

                else if (res.status === 500) {
                    setError("An error occured, please try again later");
                    setLoading(false);
                    return;
                }

                else {
                    setError("Invalid email or password");
                    setLoading(false);
                    return;
                }
            })
            .catch((err) => {
                setLoading(false);
                setError("An error occured, please try again later");
                return;
            })

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6 w-full  shadow-zinc-400   flex items-center justify-normal flex-col relative">

            <div className="self-start text-neutral-700">
                <h1 className="text-3xl">Sign in</h1>
                <p>Sign in to view your dashboard.</p>
            </div>

            <div className="space-y-1 flex flex-col w-full">
                <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm focus:outline-none  text-zinc-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent" onChange={(e) => onEmailChange(e)} />
            </div>

            <div className="space-y-1 flex flex-col w-full">
                <label htmlFor="password" className="block text-md font-medium text-gray-700">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full px-3 py-3.5 border border-gray-300 rounded-md text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" onChange={(e) => onPasswordChange(e)} />
            </div>

            <div className="flex mr-auto">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setRememberMe(e.target.checked)} />
                <label className="ms-2 text-sm font-medium text-zinc-700">Rememebr me </label>
            </div>

            <div className="flex w-full">
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deep-teal hover:bg-deep-teal/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {loading ? <FaSpinner className="animate-spin text-lg" /> : "Go to Dashboard"}
                </button>
            </div>

            <div className="flex w-full">
                <p className="text-red-500">{error}</p>
            </div>


        </form>
    )
}