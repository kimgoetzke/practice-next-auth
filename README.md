## The NextAuth.js Practice Project

The purpose of this project was to practice explore the basics of NextAuth.js and build a simple app using an OAuth login flow.

See [nextauthjs/next-auth](https://github.com/nextauthjs/next-auth/tree/main/apps/examples/nextjs) for a similar example which was used as a reference for some bits. 

## How to start

### Set up your local environment

Use the `.env.template` file as an example to create your own `.env` file. This is where you can add the required information for any providers you want to set up. Currently only Google is being used.

You will need a `clientId` and `clientSecret` for Google which you can get from the developer admin page at [https://console.cloud.google.com/](https://console.cloud.google.com/).

You will need to set up up `http://localhost:3000` as an authorised origin and `http://localhost:3000/api/auth/callback/google` as a allowed callback UR.

### Run the application

Run locally using:

```
npm run dev
```

Then navigate to [http://localhost:3000](http://localhost:3000).