## Project Cryptocurrency API

### The goal of this project is to create a cryptocurrency price tracker app with React
We will use the React useEffect and useState hooks and Axios for this project

**Basic functionality:** we want our app to request data about cryptocurrencies from the [Coingecko API](https://www.coingecko.com/api/documentations/v3) and show this data in an attractive overview. With the app we can also search for a currency and display the information in the browser. In addition, the currency prices are updated live whenever the page is refreshed. 

A simple example looks like this:  

<img src="SampleImage.png" width="550" /> 

---

### For more advanced students

1. Create a new project on your local computer using `npx create-react-app project-cryptocurrency`
1. Delete the code from the App.css and use index.css for the initial, general CSS
1. Delete the code in the `App.js` component between `<div className="App">` and the closing `</div>`
1. In the `return()` of `App.js`, add `<h1>Search Currency</h1>` and run your code with `npm start` to test the component (you should see the text "Search Currency" as title on the page)
1. Create a search input form in `App.js` that will be used to find a currency by name, with an `onChange()` handler (see in the second part for the description of the handler function)
1. Create a `components` folder inside your `src` folder
1. Create a functional component **Coin.js** inside this file (remember the React syntax!) and a `Coin.css` file. This means we use a separate CSS file for the component (this [article](https://blog.devgenius.io/how-i-organize-css-for-react-js-7c9c212c1719) discusses how to organise your code files, and one option is having one separate CSS file for each React component instead of one general CSS file)
1. In `Coin.js` create a `<div>` where you will use the values from the API to be shown in the overview (see example image above) 
1. From the Coingecko API, we use seven values: name, symbol, current_price, total_volume, image,price_change_percentage_24h, and market_cap

### Fetching from the API
 
1. In `App.js`, use `useEffect()` to fetch the data from [this API](https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false)
1. You can also use `axios` for fetching data. To do this, you have to install `axios` and import axios in `App.js` (you can find out how to do that). Instead of the `fetch("")` syntax, you have to use `axios.get("")` to get the data. You can read more about axios in [here](https://www.digitalocean.com/community/tutorials/react-axios-react)
1. Create two hooks, one  with `coins` and `setCoins` and set the state with an empty array as default; the other hook is with `search`and `setSearch`, and the state with an empty string
1. Create a `handleChange()` function that uses the `setSearch` hook to set `search` as the target value when the event is triggered (i.e. when a search text is typed)
1. Create a function to filter the data for the currency that is entered into the search field, and pass the result into a variable called `filteredCoins` 
1. In the `return()` of `App.js`, create a `div` with class name `coin-app`
1. In this 'div', map over `filteredCoins` and return the `Coin.js` component, passing in all the seven values as props, plus `key={coin.id}` (React requires a key when you use `map()`)
1. After displaying all data, you can use both `index.css` and `Coin.css` to design and layout  the app to your own taste

**If you would like to build this app using more values from the API**, just add more columns in the layout and fill the columns with data 

**NOTE:** you can use this extension `ES7 React/Redux/GraphQL/React-Native snippets` in your VSCode to create a component automatically using the command `rface`


## Please note:
If you want to download a project on your local machine, do not fork it but clone the repo locally, on your computer. After that, create a new repo in your own GitHub account *with exactly the same project name*, and link the local repo to the remote repo in your GitHub account (see below). Why should you clone and not fork? It will show the project as **your own project** and not a fork of someone else's project. You can use it as a project for your portfolio.

You can connect a local project to a new, empty GitHub repo [as follows](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line). We can do this together during a CodeWomen coding session: it is very good to know this so that you can start a project locally and afterwards link it with a remote GitHub repo.

If you clone the project without forking it, you will have to change the 'remote origin' repository after cloning. Check the remote of your local project using `git remote -v`. You will probably see:  
`origin  https://github.com/CodeWomen-Barcelona/some-codewomen-project.git (fetch)`  
`origin  https://github.com/CodeWomen-Barcelona/some-codewomen-project.git (push)`

To link your local project to your own GitHub repo, you need to change the remote origin. Have a look at this article: https://devconnected.com/how-to-change-git-remote-origin/. With `git remote -v` you can again check if remote origin has been reset and now shows the name of your GitHub account.


PS: if you work for a company that has a corporate social responsibility policy and wants to support women in tech, then here is the link to the [fundraising overview of MigraCode](https://docs.google.com/spreadsheets/d/1Zs-Mmi39bcjVw2U-iEQWSHSjkb-EmET-j1WB2oJF45Q/edit#gid=0).

---
