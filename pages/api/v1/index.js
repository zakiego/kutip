export default async function handler(req, res, props) {
	if (req.method != "POST") return res.status(405).end();

	const needle = require("needle");

	// The code below sets the bearer token from your environment variables
	// To set environment variables on macOS or Linux, run the export command below from the terminal:
	// export BEARER_TOKEN='YOUR-TOKEN'
	const token = process.env.BEARER_TOKEN;

	const id = req.body.id;

	const endpointURL = "https://api.twitter.com/2/tweets/" + id;

	const params = {
		expansions: "author_id",
		"tweet.fields": "lang,author_id", // Edit optional query parameters here
		"user.fields": "created_at,profile_image_url", // Edit optional query parameters here
	};

	const respons = await needle("get", endpointURL, params, {
		headers: {
			"User-Agent": "v2TweetLookupJS",
			authorization: `Bearer ${token}`,
		},
	});

	const body = respons.body;

	const data = body.data;

	const user = body.includes.users[0];

	res.status(200);
	res.json({
		data: {
			data,
			user,
		},
	});
}
