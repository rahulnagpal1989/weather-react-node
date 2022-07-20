# weather-react-node

We have make front-end and back-end on separate directries:

Steps:
1. Download code and place in a common directory.
2. Open reactjs directory for running front-end:

   a. `cd reactjs`

   b. run `npm install` for install all packages

   c. run `npm start` this will run on [http://localhost:3000](http://localhost:3000)

3. Open nodejs directory for running back-end:

   a. `cd nodejs`

   b. run `npm install` for install all packages
   
   c. create `.env` file in your `nodejs` directory in which you have to specify `PORT="4000"` and `KEY="ADD_KEY"` you can get the API key from this 3rd party site  [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)

   d. run `npm start`, this will run on [http://localhost:4000](http://localhost:4000)

When you enter any city name in the search box and after click on Search button you will get the weather details of that particular city. 
