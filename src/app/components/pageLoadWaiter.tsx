import { FaSpinner } from 'react-icons/fa';

export default function PageWaitLoader({ text }: { text: string }) { 
    return (
        // create a div that is fixed and takes up the whole screen, make it have dark opacity and a z-index of 40 (use tailwindcss)
        // We want a spinner icon from react-icons in the middle and our optional text below the spinner. style it nicely but simple.

        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center">
                <div className="animate-spin text-3xl text-deep-teal">
                    <FaSpinner />
                </div>
                <p className="text-deep-teal text-lg">{text !== "0" ? text : ""}</p>
            </div>
        </div>
    )
}