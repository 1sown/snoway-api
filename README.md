# Snoway API Wrapper
**Snoway API is a simple api that lets you find out a user's old name(s) into Snoway's database.**

## 💾 Installing
```bash
# NodeJS
$ npm i snoway-api 

# Yarn
$ yarn add snoway-api

# Bun
$ bun i snoway-api 
```


## 🎈 __Example Usage__

```js
const SnowayAPI = require('snoway-api');
const api = new SnowayAPI("Your api key");

async function main() {
    // Return prevnames
    await api.getNames('User ID')
    .then((response) => console.log(response));
    // Return count
    await api.count()
        .then((response) => console.log(response));
    console.log('Fetched data successfully !');
};

main();
```

## 💖 Contributors

*  [**1sown**](https://github.com/1sown)
* [**22ayman**](https://github.com/9ayman)