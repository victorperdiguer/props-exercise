# Props exercise ☕️

This app was created with <code>create-react-app</code>, so, the only thing left to do before you start coding is:

```bash
npm install
npm start
```

## Goals 🎯

On <code>App.js</code> you are given an array of clients (and the array should stay there, don't move it):

```js
const clients = [
    {
      name: 'Mr.Hoffmann',
      age: 52,
      isPremium: false,
      country: 'de',
    },
    {
      name: 'Ms. Smith',
      age: 23,
      isPremium: true,
      country: 'en',
    },
    {
      name: 'Amélie',
      age: 25,
      isPremium: true,
      country: 'fr',
    },
    {
      name: 'Paco paquito...',
      age: 67,
      isPremium: true,
      country: 'es',
    },
  ]
```

The goal of this exercise is to create a **reusable Card** (just one component), that we will import on <code>App.js</code> one time per each client, and the card will change according to the information passed by props. The final result should look like this:

![](final.png)


Take a look and notice the differences of the cards 👀. Each <code>Card</code> should print:
- The name of the client passed as children
- The age of the client passed by props
- It should answer "yes" or "no" to the question "Is it a premium client?" with the information passed by props
- The greeting (the "Hello" part) should be different according to the country of the client
- If the user is premium, the background color of the card should be different



***When you are finished with your component Card***, you should be able to import it four times on <code>App.js</code>, and pass to each card one client, like this:

```js
  return (
    <div className="App">
      <h1>Hotel webpage</h1>
      <section className="cards">
        <Card client={clients[0]}>{clients[0].name}</Card>
        <Card client={clients[1]}>{clients[1].name}</Card>
        <Card client={clients[2]}>{clients[2].name}</Card>
        <Card client={clients[3]}>{clients[3].name}</Card>
      </section>
    </div>
  );
}
```

## 💡 Notes and recommendations:
- The Card component should be in a folder called */components*
- You already have a couple of styles on <code>App.css</code> ready to be used 
- For the greeting part, try to remember how to use the [switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- Try to go step by step from the easier parts and leave the hardest parts for last: 

  1. First, create the Card and make sure you remember how to import it and use it. 
  2. Then, use the props and make sure you know how to use them and print them on the card. For instance, try to print the name or the age of the client.
  3. Then, implement the logic of the component.

- When working with React, throughout the whole module, have the **browser's console** opened at all times, because it will give you very detailed information of the warnings and errors and it will help you along the process

> 🐆 mode: ON!! Dale!!




