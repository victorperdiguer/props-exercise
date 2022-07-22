import React from 'react'

export default function Card(props) {

  const { client, children } = props;

  let greeting = '';
  switch (client.country) {
    case "de":
      greeting = "Hallo"
      break;
    case "en":
      greeting = "Hello"
      break;
    case "es":
      greeting = "Hola"
      break;
    case "fr":
      greeting = "Bonjour"
      break;
    default:
      break;
  }

  const style = client.isPremium ? 'premium' : null;

  return (
    <div className={'card ' + style}>
      <h4>{greeting} {children}!</h4>
      <p>Age: {client.age}</p>
      <p>Is it a premium client? {client.isPremium ? "Yes" : "No"}</p>
    </div>
  )
}
