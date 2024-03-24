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

    // aftrer we authenticate, we will render the dashboard and get some data from the server


    return (
        <Dashboard />
    );
}

function Dashboard() {
    //create a comprehensive dashboard UI
    //create a dashboard that will have a sidebar and a main content area
    //write it
    return (
        <div className="w-full min-h-screen flex bg-gray-100" >


        </div>


  
    )
}