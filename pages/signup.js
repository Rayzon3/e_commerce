import Head from "next/dist/shared/lib/head"

const signup = () => {
    return (
        <div className="min-h-screen  mx-auto py-2 bg-midNight">
            <Head >
            <title>[Site Name]</title>
            <link rel="icon" href="/tree.ico" />
            </Head>
            <div className="w-1/3 mt-20 mx-auto border p-6 rounded-xl   ">
                <form>
                <h1 className="text-green text-center text-4xl font-bold">Signup</h1>
                    <div className="flex flex-col p-3 mt-3">
                    <div className="mb-1">
                    <label for="uname" className="text-white text-2xl" >Name:</label>
                    </div>
                    <input type="text" className=" w-full py-1 px-3 border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded" placeholder="Enter your name" id="uname" name="uname"></input>
                    </div>
                    <div className="p-3">
                    <div className="mb-1">
                    <label for="email" className="text-white text-2xl" >Email:</label>
                    </div>
                    <input type="email" className="w-full py-1 px-3 border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded" id="email" placeholder="Enter you email" name="email"></input>
                    </div>

                    <div className="p-3">
                    <div className="mb-1">
                    <label for="pass1" className="text-white text-2xl" >Password:</label>
                    </div>
                    <input type="password" className="w-full py-1 px-3 border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded" id="pass1" placeholder="Enter your password" name="pass1"></input>
                    </div>

                    <div className="p-3">
                    <div className="mb-1">
                    <label for="pass2" className="text-white text-2xl" >Re-type your password:</label>
                    </div>
                    <input type="password" className="w-full py-1 px-3 border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded" id="pass2" placeholder="Enter you email" name="pass2"></input>
                    </div>
                    <div className="text-center m-2">
                        <p className="text-white mb-4 m-3"><a className="text-blue" href="/login">Already a user? Login in through here</a></p>
                        <button type="submit" className="bg-green hover:bg-green-500 text-midNight font-bold py-2 px-4 rounded">Welcome!</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default signup
