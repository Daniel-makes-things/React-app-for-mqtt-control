# React-app-for-mqtt-control

## Base Technologies
- React
- Typescript
- Tailwind
- NodeJS

## Project Structure
- Frontend
    - capacitor is located here
    - tailwind for styling (see docs here: https://tailwindcss.com/)
    - you can talk to your backend client here
    - components subfolder is for all your ui elements you want to re-use, i've put a card example in
    - i'd also create the following subfolders: helpers, pages
    - if you want routing, for pages, i'd create a separate file containing all your routes in the root of `frontend` and apply it to your App.tsx

- Backend
    - is currently a nodejs client, but you can use whatever really
    - this is what should communicate with your api
    - docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs or https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/ will probably help with understanding stuff
- use a .env file to store your env variables, you can refer to them via `process.env.VAR`
- i also added a generic gitignore file for you (and removed your node_modules folder), but add to it according to your needs, do not commit any sensitive data
- you can technically merge the backend code into the frontend like you originally had but i wouldn't cus api keys and whatnot

## Install Dependencies
1. Ensure node v18+ is installed
2. `cd backend`
3. `npm i`
4. `cd ..`
5. `cd frontend`
6. `npm i`
7. `cd ..`

## Run React App
1. `cd frontend`
2. `npm run start`

## Run Node Client
1. `cd backend`
2. `node index.js`

## Capacitor (iOS)
Open the Project
1. `cd frontend`
2. `npx cap open ios`

Run the Project
1. `cd frontend`
2. `npm run build`
3. `npx cap sync ios`
4. `npx cap run ios

## Capacitor (android)
Run the Project
1. `cd frontend`
2. `npx run build`
3. `npx cap sync android`
4. `npx cap open android`
