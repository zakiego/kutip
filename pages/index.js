
export default function Home() {

  // const url = 'https://twitter.com/barisbatas/status/1414471217248038913?s=20'

  const registerUser = async event => {
    event.preventDefault()


    const url = event.target.url.value

    const urlRegex = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('/')+20 )

    const imageGenerator = 'http://localhost:3000/tweet/' + urlRegex

    const image = await fetch(imageGenerator)

    console.log(image)

    // const res = await fetch(
    //   'https://hooks.zapier.com/hooks/catch/123456/abcde',
    //   {
    //     body: JSON.stringify({
    //       name: event.target.name.value
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST'
    //   }
    // )

    // const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="name">Name</label>
      <input id="ur" name="url" type="text" className="border-2 bg-blue-300" required />
      <button type="submit">Register</button>
    </form>
  )
}





// const urlRegex = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('/')+20 )

// const countUrl = '1414471217248038913'