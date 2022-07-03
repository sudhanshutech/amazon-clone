
# ShopIt

ShopIt is an ecommerce website for your daily shoping. Where you can add your products in cart and proceed for payment page.
Firebase is used for backend support like signIn.
Stripe api is used for real time payment.


## Run Locally

Clone the project

```bash
  git clone https://github.com/sudhanshutech/shopIt.git
```

Go to the project directory

```bash
  cd shopIt
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Create a new firebase project

Login to your google account and create a new firebase project.

Create an env file - Set filename.env.prod file for production and .env.devfor development and save it in the root of your project folder and add the following configuration details. You can either use the same configuration details for both development and production but it's best to make separate projects. It can be found on your firebase project settings.

```bash
// SAMPLE CONFIG .env.dev, you should put the actual config details found on your project settings

FIREBASE_API_KEY=AIzaKJgkjhSdfSgkjhdkKJdkjowf
FIREBASE_AUTH_DOMAIN=yourauthdomin.firebaseapp.com
FIREBASE_DB_URL=https://yourdburl.firebaseio.com
FIREBASE_PROJECT_ID=yourproject-id
FIREBASE_STORAGE_BUCKET=yourstoragebucket.appspot.com
FIREBASE_MSG_SENDER_ID=43597918523958
FIREBASE_APP_ID=234598789798798fg3-034
```
## Deployment

To deploy this project run

```bash
  npm run dev-server
```
## Build
```bash
npm run Build
```
