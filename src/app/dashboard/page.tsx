import { cookies } from "next/headers"
import { redirect } from "next/navigation";

async function getSession() {
    const id = cookies().get('user_id')?.value;
    if (id) {
        return id;
    }
    return null;
}

export default async function DashboardPage() {

///const router = useRouter();

    const id = await getSession();
    if (!id) {
        //router.push('/login');
        redirect('/login');
    }

    console.log(id,  "id")

    // we will need to some authentication here, if the user is not logged in, we will redirect them to the login page

    // check if the user is logged in, if not, redirect to the login page
    // we will need to use the next.js router to redirect the user to the login page if they are not logged in
    // we are in server side code, so we can't use the window object to check if the user is logged in use next methods
    // ok write it



    return (
        <div className="min-h-screen w-full flex justify-center bg-deep-teal/40">
            <Dashboard />
        </div>
    );
}

function Dashboard() {
    //create a comprehensive dashboard UI
    //create a dashboard that will have a sidebar and a main content area
    //write it
    return (
  <>
        <div className="flex">
            <div className="w-1/4 bg-gray-100">
                <ul>
                    <li>
                        <a href="/dashboard" className="text-blue-500 hover:text-blue-700">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/profile" className="text-blue-500 hover:text-blue-700">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/settings" className="text-blue-500 hover:text-blue-700">
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-3/4 bg-gray-200">
                <h1 className="text-3xl text-gray-800 font-bold mb-4">Dashboard</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl text-gray-800 font-bold mb-4">Welcome to your Dashboard!</h2>
                    <p className="text-gray-600">
                        Here you can find all the important information and manage your account settings.
                    </p>
                    <div className="mt-4">
                        <h3 className="text-lg text-gray-800 font-bold mb-2">Recent Activity</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Logged in at 10:00 AM</li>
                            <li>Updated profile picture</li>
                            <li>Created a new post</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>

  </>


  
    )
}