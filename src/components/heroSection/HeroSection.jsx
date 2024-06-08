import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src="https://firebasestorage.googleapis.com/v0/b/blogapp-cf273.appspot.com/o/Screenshot%202024-06-01%20173242.png?alt=media&token=3d65a615-7cb3-408f-842b-5b38077c4205" alt="" style={{"width":"100px"}}/>
                            </div>

                            {/* Text  */}
                            <h1 className=' text-3xl text-white font-bold'>Desert Jobs</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Your one stop Job portal for UAE/GCC Jobs
                        </p>
                        <br/>
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-xl text-xl font-extralight sm:mx-auto ">
                            Daily and Weekly update of Jobs - Stay Tuned
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection