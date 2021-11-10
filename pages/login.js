import Head from "next/dist/shared/lib/head"


const Loginpage = () => {
    return (
        <div className="min-h-screen  mx-auto py-2 bg-midNight">
            <Head >
            <title>[Site Name]</title>
            <link rel="icon" href="/tree.ico" />
            </Head>
            <div className="w-1/3 mt-40 mx-auto border p-6 rounded-xl   ">
                <form>
                    <h1 className="text-green text-center text-4xl font-bold">Login</h1>
                    <div className="flex flex-col p-3 mt-3">
                    <div className="mb-1">
                    <label for="email" className="text-white text-2xl" >Email:</label>
                    </div>
                    <input type="email" className=" w-full py-1 px-3 border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded" placeholder="Email" id="email" name="email"></input>
                    </div>
                    <div className="p-3">
                    <div className="mb-1">
                    <label for="pass" className="text-white text-2xl" >Password:</label>
                    </div>
                    <input type="password" className="w-full py-1 px-3 border focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded" id="pass" placeholder="Password" name="pass"></input>
                    
                    </div>
                    <div className="text-center m-2">
                        <p className="text-white mb-4 m-3"><a className="text-blue" href="/signup">New user? Sign up here</a></p>
                        <button type="submit" className="bg-green hover:bg-green-500 text-midNight font-bold py-2 px-4 rounded">Lets go in there</button>
                    </div>
                    

                </form>
            </div>
        </div>
    )
}

export default Loginpage
