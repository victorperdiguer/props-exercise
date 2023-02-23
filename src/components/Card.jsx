const Card = (props) => {
    const { client } = props;
    const premiumClass = client.isPremium ? "premium" : null;
    const premiumClient = client.isPremium ? "Yes" : "No";
    let greeting;
    switch (client.country) {
        case 'fr':
            greeting = "Bonjour";
            break;
        case 'de':
            greeting = "Gutten Tag";
            break;
        case 'en':
            greeting = "Good morning";
            break;
        default:
            greeting = "Buenos días";
            break;
    }
    console.log(props);
    return (
        <div className={'card ' + premiumClass}>
            <h1>{client.country}, {client.name}</h1>
            <h2>Age: {client.age}</h2>
            <h2>Is the client premium? {premiumClient}</h2>
        </div>
    )
}

export default Card;