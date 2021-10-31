exports.lambdaHandler = async () => {

    // Get a random user 
    const users = ['bob', 'alice'];
    const randomUserIndex = Math.round(Math.random() * 0.6); // More likely to be Bob, than Alice
    const currentUser = users[randomUserIndex];

    // Connection established 
    console.log(`Connection made to the user service by ${currentUser}`)

    // Record the status code
    const isBob = currentUser === "bob";
    let statusCode;
    if(isBob) {
        statusCode = 200 // Bob is successful 🚀
    } else {
        statusCode = 500 // But Alice is not 😬
    }
    
    // Response of user
    console.log(`Responding: ${statusCode}`)

    // A structured log
    console.log(JSON.stringify({ statusCode: statusCode, user: currentUser, isStructuredLog: true }))

    return {
        statusCode,
        body: JSON.stringify({ message: 'Reponse sent' })
    }
};
