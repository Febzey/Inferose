"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function RegisterForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [terms, setTerms] = useState(false);
    const [updates, setUpdates] = useState(false);
    


    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (email === "" || password === "" || confirmPassword === "") {
            setError("Please fill in all fields");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (!terms) {
            setError("Please accept the terms of service");
            return;
        }

        fetch(`${process.env.NEXT_PUBLIC_INFEROSE_URL}/post/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                updates: updates
            })
        })
        .then(res => {
            if (res.status === 201) {
                router.push("/login")
                return
            }

            if (res.status === 409) {
                setError("This email is already in use, please use another one");
                return;
            }
        
        })
        .catch((err) => {
            setError("An error occured, please try again later");
            return;
        })



    }


    return (
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6 w-full my-auto shadow-2xl shadow-zinc-400 p-10  h-full flex items-center justify-normal flex-col relative">

            <div className="self-start text-neutral-700">
                <h1 className="text-3xl">Register</h1>
                <p>Sign up with us and start analysing your traffic!</p>
            </div>

            <div className="space-y-1 flex flex-col w-full">
                <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm focus:outline-none  text-zinc-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="space-y-1 flex flex-col w-full">
                <label htmlFor="password" className="block text-md font-medium text-gray-700">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full px-3 py-3.5 border border-gray-300 rounded-md text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="space-y-1 flex flex-col w-full">
                <label htmlFor="password" className="block text-md font-medium text-gray-700">Confirm Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full px-3 py-3.5 border border-gray-300 rounded-md text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className="flex mr-auto">
                <input id="default-checkbox" type="checkbox" value="" required className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setTerms(e.target.checked)} />
                <label className="ms-2 text-sm font-medium text-zinc-700">I Read And Accept The <a href="#terms-of-service" className="underline-offset-2 underline text-deep-teal">terms of service</a></label>
            </div>

            <div className="flex mr-auto">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => setUpdates(e.target.checked)} />
                <label className="ms-2 text-sm font-medium text-zinc-700">Send me email updates </label>
            </div>
            <div className="flex w-full">
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deep-teal hover:bg-deep-teal/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Register
                </button>
            </div>

            <div className="flex w-full">
                <p className="text-red-500">{error}</p>
            </div>

            <div className="flex w-full">
                <p>Already have an account? <a href="/login" className="underline-offset-2 underline text-deep-teal">Sign in here</a></p>
            </div>

        </form>
    )
}