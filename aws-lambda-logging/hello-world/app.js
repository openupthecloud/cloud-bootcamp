exports.lambdaHandler = async (event, context) => {

    // Connection established 
    console.log('Connection made to the service')

    // Query to the database made
    console.log('Connection made to the service')

    // Record the status code
    const statusCode = 200;
    console.log(`Responding with status code: ${statusCode}`)

    return {
        statusCode,
        body: JSON.stringify({ message: 'hello world' })
    }
};
