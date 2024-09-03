import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Label } from "@radix-ui/react-label"

import { Loader2, Lock, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const Login = () => {
    const loading = false;
    return (
        <div className="flex items-center justify-center min-h-screen w-screen">
            <form className=" md:p-8 w-full max-w-md md:border border-gray-200  rounded-lg mx-4 ">
                <div className="flex justify-center items-center text-2xl font-bold"> <h1> Login </h1></div>
                <div className="relative grid w-full max-w-sm items-center gap-1.5 my-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" className="pl-8 focus-visible:ring-1" />
                    <Mail className="text-xs h-4 w-4 absolute top-10 left-3 text-gray-500 pointer-events-none " />
                </div>
                <div className="relative grid w-full max-w-sm items-center gap-1.5 my-2">
                    <Label htmlFor="password"> password </Label>
                    <Input type="password" id="password" placeholder="password" className="pl-8 focus-visible:ring-1" />
                    <Lock
                        className="text-xs h-4 w-4 absolute top-10 left-3 text-gray-500 pointer-events-none  "
                    />
                </div>
                <div className="flex justify-center items-center">
                    {loading ? <Button className="bg-orange hover:bg-hoverOrange px-5 py-0 w-full"> <Loader2 className="animate-spin">  </Loader2> please wait </Button> : <Button className="bg-orange hover:bg-hoverOrange px-5 py-0 w-full"> Login </Button>}

                </div>
                <Separator className="mt-6" />
                <p className="text-center"> Dont't have an acount  </p>
                {/* <Link to="/signup"> SignUp </Link> */}
            </form>
        </div>
    )
}

export default Login