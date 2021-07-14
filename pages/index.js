import { useRouter } from 'next/router'
import Head from 'next/head'


export default function Home() {

  const router = useRouter()

  var currentdate = new Date(); 
  var datetime =  currentdate.getDate()+ ""
                + ('0'+(currentdate.getMonth()+1)).slice(-2)  + "" 
                + currentdate.getFullYear() + "_"  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()


  const inputHandler = event => {
    event.preventDefault()
  }

  const handleClick = async event => {
    event.preventDefault();

    const urlTwitter = event.target.url.value
    const statusId = urlTwitter.substring(urlTwitter.lastIndexOf('/')+1, urlTwitter.lastIndexOf('/')+20 )

    if (urlTwitter.includes('twitter.com') == false ) {
      document.getElementById("alert").innerHTML = 'Masukkan link yang benar'
    } else (
      document.getElementById("unduh").innerHTML =
      `<form method="get" action='/tweet/${statusId}'} value=""></div>` +
      `<button class="inline-flex outline-none  items-center text transform hover:scale-105 m-auto px-8 py-2 text-base font-semibold rounded-lg text-snow-storm bg-gradient-to-r from-frost-bold to-frost-normal"> ` +       
                        `<svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>` +
                        `<a >Unduh</a>` +
      `</button>`,
      `</form>`,
      document.getElementById("alert").remove(),
      document.getElementById("kutip").remove()
    )

  }

  return(
    <>

    <Head>
      <title>Kutip Tweet | Zakiego</title>
    </Head>


    <body className="transform-gpu bg-gradient-to-tl from-polar-night-bold to-polar-night-normal">
      <div className="flex h-screen">
        <div className="m-auto">
          <h1 className="pb-6 text-5xl font-bold text-center text-snow-storm">Kutip Tweet</h1>
          <h3 className="pb-16 text-sm text-center text-low text-opacity-60">Made with &lt;3 by {' '}
            <a className="text-blue-400 text-opacity-80" href="http://zakiego.my.id">Zakiego</a>
          </h3>

          <form onSubmit={handleClick}>
            <p className="text-snow-storm text-center text-opacity-70 text-sm pb-4">Link Tweet :</p>
            <input name="url" className="w-72 md:w-96 h-12 px-6 bg-white rounded-lg flex m-auto text-sm outline-none" placeholder="https://twitter.com/prasastipagi/status/1412374623287607306"></input>
            <div className="text-center pt-3 text-sm text-red-500 underline text-opacity-80">
              <p id="alert"></p>
            </div>
            <div id="kutip" className="pt-4 flex">
              <button  className="outline-none transform hover:scale-105 m-auto px-12 py-2 text-base font-semibold rounded-lg text-snow-storm bg-gradient-to-r from-frost-bold to-frost-normal">Kutip</button>
              
            </div>            
          </form>

          <div id="unduh" className="pt-6 text-center">
                  
          </div>

        </div>
      </div>
    </body>
    </>
  )
}




// import { useRouter } from 'next/router'
// import Head from 'next/head'


// export default function Home() {

//   const router = useRouter()

//   var currentdate = new Date(); 
//   var datetime =  currentdate.getDate()+ ""
//                 + ('0'+(currentdate.getMonth()+1)).slice(-2)  + "" 
//                 + currentdate.getFullYear() + "_"  
//                 + currentdate.getHours() + ":"  
//                 + currentdate.getMinutes() + ":" 
//                 + currentdate.getSeconds()


//   const inputHandler = event => {
//     event.preventDefault()
//   }

//   const handleClick = async event => {
//     event.preventDefault();

//     const urlTwitter = event.target.url.value
//     const statusId = urlTwitter.substring(urlTwitter.lastIndexOf('/')+1, urlTwitter.lastIndexOf('/')+20 )

//     if (urlTwitter.includes('twitter.com') === false ) {
//       document.getElementById("alert").innerHTML = '<p>Masukkan link yang benar</p>'
//     } else (router.push(`/tweet/${statusId}`))

//   }





//   return(
//     <>

//     <Head>
//       <title>Kutip Tweet | Zakiego</title>
//     </Head>


//     <body className="transform-gpu bg-gradient-to-tl from-polar-night-bold to-polar-night-normal">
//       <div className="flex h-screen">
//         <div className="m-auto">
//           <h1 className="pb-6 text-5xl font-bold text-center text-snow-storm">Kutip Tweet</h1>
//           <h3 className="pb-16 text-sm text-center text-low text-opacity-60">Made with &lt;3 by {' '}
//             <a className="text-blue-400 text-opacity-80" href="http://zakiego.my.id">Zakiego</a>
//           </h3>

//           <form onSubmit={handleClick}>
//             <p className="text-snow-storm text-center text-opacity-70 text-sm pb-4">Link Tweet :</p>
//             <input name="url" className="w-72 md:w-96 h-12 px-6 bg-white rounded-lg flex m-auto text-sm outline-none" placeholder="https://twitter.com/prasastipagi/status/1412374623287607306"></input>
//             <div id="alert" className="text-center pt-3 text-sm text-red-500 underline text-opacity-80">
              
//             </div>
//             <div className="pt-4 flex">
//               <button  className="outline-none transform hover:scale-105 m-auto w-32 h-9 text-base font-semibold rounded-lg text-snow-storm bg-gradient-to-r from-frost-bold to-frost-normal">Kutip</button>
//             </div>
//           </form>

//         </div>
//       </div>
//     </body>
//     </>
//   )
// }


