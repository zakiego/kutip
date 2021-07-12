/* eslint-disable jsx-a11y/alt-text */

import Image from 'next/image'


export default function Home() {




    return(
        <>
        <body className="bg-gray-800">

        <div id="htmlToImageVis" className="flex justify-center items-center  h-auto w-4xl bg-white-blue">
            <div className="py-16">
                <div className="object-cover box-content filter drop-shadow-3xl rounded-2xl w-3xl h-auto bg-white-blue">
                
                <div className="px-12 py-10">

                        <div className="flex">
                            <Image
                            src="https://pbs.twimg.com/profile_images/1355549876092686340/pV5yHS49.jpg"
                            width='65'
                            height='65'
                            quality='100'
                            className="rounded-full mx-auto"
                            />
                        
                            <div className="pl-4 pt-2 relative font-twitter text-lg">
                                <p className="font-semibold text-black">Zaki</p>
                                <p className="pt-0 text-twitter-username">@prasastipagi</p>
                            </div>
                        </div>


                        <div className="pt-7">
                            <p className="text-twitter leading- text-2xl font-twitter">
                            Hello world!
                            </p>
                        </div>

                </div>
                
                </div>
            </div>
        </div>


        </body>
        </>
    )
}