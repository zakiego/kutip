/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */


import Image from 'next/image'
import download from 'downloadjs'

import * as htmlToImage from 'html-to-image';
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react';



export async function getServerSideProps(ctx) {

    const { id } = ctx.query

    const res = await fetch(`http://${process.env.BASE_URL}/api/v1/`, {
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
      props: {data, image64}
    }
  }




  
export function htmlImage(props) {

  const { data : {data : { data, user }}, image64 } = props
  
  const username = user.username
  const name = user.name
  const profileImage = user.profile_image_url.replace("_normal","")
  const tweetText = data.text


  

  const router = useRouter()


  async function downloadImage() {

    const moment = require('moment')

    const timeStamp = moment(new Date()).format("DDMMYYYY_hhmmss");

    const image = await htmlToImage.toPng(document.getElementById('htmlToImageVis'))
      .then(function (dataUrl) {
        download(dataUrl, `Tweet_${username}_${data.id}_${timeStamp}.png`)})

    router.back()

  }


  // if (typeof window == "object") {
  //   // window.onload = downloadImage
  //   window.addEventListener("load", downloadImage)
  // }

  useEffect(() => {
    window.onload = downloadImage
  }, [])


  return(<>

  <Head>
    <title>Kutip Tweet | Zakiego</title>
    <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossOrigin="anonymous"></link>
  </Head>
  
  <body className="bg-gradient-to-r from-polar-night-bold to-polar-night-normal">


  <div name="center items" className="flex h-screen">
    <div className="m-auto">

      <div className="block text-center pb-7">
        <span className="text-frost-normal opacity-100">
          <i className="fas fa-circle-notch fa-spin fa-5x"></i>
        </span>
      </div>

      <button onClick={downloadImage} className="outline-none inline-flex items-center text transform hover:scale-105 m-auto px-12 py-2 text-base font-semibold rounded-lg text-snow-storm bg-gradient-to-r from-frost-bold to-frost-normal">          
          {/* <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> */}
          <span>Unduh</span>
      </button>

    </div>
  </div>




  <div name="image HD" className="transform scale-0 max-w-0 max-h-0">
    <div  id="htmlToImageVis" className="flex justify-center items-center h-4xl w-4xl bg-white-blue">
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
  </div>

  </body>
  </>
  )
}

export default htmlImage