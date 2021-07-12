export default async function  handler(req, res, props)  {

    if (req.method != 'POST') return res.status(405).end()

    const needle = require('needle');

    // The code below sets the bearer token from your environment variables
    // To set environment variables on macOS or Linux, run the export command below from the terminal:
    // export BEARER_TOKEN='YOUR-TOKEN'
    const token = process.env.BEARER_TOKEN;

    const id = req.body.id

    const endpointURL = ("https://api.twitter.com/2/tweets/" + id );

    // These are the parameters for the API request
    // specify Tweet IDs to fetch, and any additional fields that are required
    // by default, only the Tweet ID and text are returned
    const params = {
        "expansions" : "author_id",
        "tweet.fields": "lang,author_id", // Edit optional query parameters here
        "user.fields": "created_at,profile_image_url" // Edit optional query parameters here
    }

    // this is the HTTP header that adds bearer token authentication
    const respons = await needle('get', endpointURL, params, {
        headers: {
            "User-Agent": "v2TweetLookupJS",
            "authorization": `Bearer ${token}`
        }
    })

    const body = respons.body

    const data = body.data

    const user = body.includes.users[0]


    

    res.status(200)
    res.json({
        data: {
            data,
            user
        }
    })
    const fake = {"data":{"text":"Banyak masalah yang akarnya bukan nggak mau, tapi cuman nggak tau aja cara memulainya. 😔","lang":"in","author_id":"2833803318","id":"1413400435986030599"},"includes":{"users":[{"name":"Zaki","id":"2833803318","profile_image_url":"https://pbs.twimg.com/profile_images/1355549876092686340/pV5yHS49_normal.jpg","username":"prasastipagi","created_at":"2014-09-27T09:25:23.000Z"}]}}

    // const fake = {
    //     data: {
    //       data: {
    //         text: 'Banyak masalah yang akarnya bukan nggak mau, tapi cuman nggak tau aja cara memulainya. 😔',
    //         id: '1413400435986030599',
    //         lang: 'in',
    //         author_id: '2833803318'
    //       },
    //       user: {
    //         created_at: '2014-09-27T09:25:23.000Z',
    //         id: '2833803318',
    //         name: 'Zaki',
    //         profile_image_url: 'https://pbs.twimg.com/profile_images/1355549876092686340/pV5yHS49_normal.jpg',
    //         username: 'prasastipagi'
    //       }
    //     }
    //   }
      
    // res.json( fake )
}
