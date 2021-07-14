import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  const handleClick = async event => {
    event.preventDefault();

    const urlTwitter = event.target.url.value
    const statusId = urlTwitter.substring(urlTwitter.lastIndexOf('/')+1, urlTwitter.lastIndexOf('/')+20 )

    
    if (urlTwitter.includes('twitter.com') === false ) {
      document.getElementById("alert").innerHTML = '<p>Masukkan link yang benar</p>'
    } else (router.push(`/tweet/${statusId}`))

    

  }




  const inputHandler = event => {
    event.preventDefault()
  }

  var currentdate = new Date(); 
  var datetime =  currentdate.getDate()+ ""
                + ('0'+(currentdate.getMonth()+1)).slice(-2)  + "" 
                + currentdate.getFullYear() + "_"  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()

 


  return(
    <>

    <body className="transform-gpu bg-gradient-to-tl from-polar-night-bold to-polar-night-normal">
      <div className="flex h-screen">
        <div className="m-auto">
          <h1 className="pb-6 text-5xl font-bold text-center text-snow-storm">Kutip Tweet</h1>
          <h3 className="pb-16 text-sm text-center text-low text-opacity-60">Made with &lt;3 by {' '}
            <a className="text-blue-400 text-opacity-80" href="http://zakiego.my.id">Zakiego</a>
          </h3>

          <form onSubmit={handleClick}>
            <p className="text-snow-storm text-center text-opacity-70 text-sm pb-4">Link Tweet :</p>
            <input name="url" className="w-64 lg:w-96 h-12 px-6 bg-white rounded-lg flex m-auto text-sm outline-none" placeholder="https://twitter.com/prasastipagi/status/1412374623287607306"></input>
            <div id="alert" className="text-center pt-3 text-sm text-red-500 underline text-opacity-80">
              
            </div>
            <div className="pt-4 flex">
              <button  className="outline-none transform hover:scale-105 m-auto w-32 h-9 text-base font-semibold rounded-lg text-snow-storm bg-gradient-to-r from-frost-bold to-frost-normal">Kutip</button>
            </div>
          </form>

        </div>
      </div>
    </body>
    </>
  )
}


