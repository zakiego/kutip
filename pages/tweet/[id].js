/* eslint-disable jsx-a11y/alt-text */

import Image from 'next/image'
import download from 'downloadjs'

import * as htmlToImage from 'html-to-image';


export async function getServerSideProps(ctx) {


    const { id } = ctx.query

    // const id = '1413400435986030599'

    const res = await fetch('http://localhost:3000/api/v1/', {
      method: 'POST',
     body: JSON.stringify({ id : id }),
     headers: {
          'Content-Type': 'application/json'
     }
 });
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }


    const imageToBase64 = require('image-to-base64');

    const linkImage = data.data.user.profile_image_url.replace("_normal","")

   
    const image64 = await imageToBase64(linkImage)

  
    return {
      props: {data, image64}, // will be passed to the page component as props
    }
  }


export default function Home(props) {

  const { data : {data : { data, user }}, image64 } = props
  
  

  const username = user.username
  const name = user.name
  const profileImage = user.profile_image_url.replace("_normal","")
  
  const tweetText = data.text

  // async function downloadImage() {

  //   htmlToImage.toPng(document.getElementById('htmlToImageVis'))
  //   .then(function (dataUrl) {
  //     download(dataUrl, 'tweet.png');
  //   });
  // }


  


  async function downloadImage(){


    let rawDoc =
    <html>
    <div id="htmlToImageVis" className="flex  justify-center items-center  h-4xl w-4xl bg-white-blue">
        <div className="">
            <div className=" filter shadow-smooth rounded-twitter w-3xl h-auto bg-white">
            
            <div className="px-20 py-20">

                    <div className="flex">

                        <Image
                        src={'data:image/png;base64, ' + image64}
                        width='80'
                        height='80'
                        quality='100'

                        className="rounded-full mx-auto"
                        
                        />


                        <div className="pl-6 pt-2 relative font-twitter text-2xl">
                            <p className="font-semibold text-black"> {name} </p>
                            <p className="pt-1 text-twitter-username"> {'@' + username} </p>
                        </div>

                    </div>


                    <div className="pt-7">
                        <p className="whitespace-pre-wrap text-twitter-text text-twitter font-twitter">
                        {tweetText}
                        </p>
                    </div>

            </div>
            
            </div>
        </div>
    </div>
    </html>


    let doc = document.createElement('html')
    doc.innerHTML = rawDoc
    let imageRawHtml = doc.querySelector('#htmlToImageVis')


      console.log(doc)
      
    //  htmlToImage.toPng(document.getElementById('htmlToImageVis'))
    //   .then(function (dataUrl) {
    //     // download(dataUrl, 'tweet.png');
    //     console.log(raw)
    //   });
  }


  return(
    <>
    <body className="bg-gray-800">

    {/* <div id="htmlToImageVis" className="flex  justify-center items-center  h-4xl w-4xl bg-white-blue">
        <div className="">
            <div className=" filter shadow-smooth rounded-twitter w-3xl h-auto bg-white">
            
            <div className="px-20 py-20">

                    <div className="flex">

                        <Image
                        src={'data:image/png;base64, ' + image64}
                        width='80'
                        height='80'
                        quality='100'

                        className="rounded-full mx-auto"
                        
                        />


                        <div className="pl-6 pt-2 relative font-twitter text-2xl">
                            <p className="font-semibold text-black"> {name} </p>
                            <p className="pt-1 text-twitter-username"> {'@' + username} </p>
                        </div>

                    </div>


                    <div className="pt-7">
                        <p className="whitespace-pre-wrap text-twitter-text text-twitter font-twitter">
                        {tweetText}
                        </p>
                    </div>

            </div>
            
            </div>
        </div>
    </div> */}

    <button onClick={downloadImage} className="bg-gray-100">Save</button>


    </body>
    </>
  )


}

