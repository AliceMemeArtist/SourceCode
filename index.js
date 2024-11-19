const { generateImage } = require('./api');
const { postToTwitter } = require('./x');
const { connectToDB } = require('./connection');

(async () => {
    try {
        // Connect to database
        await connectToDB();

        console.log('Starting Alice AI Meme Bot...');
        
        // Generate a meme
        const meme = await generateImage('Funny AI-generated meme about cats');

        // Post the meme to Twitter
        const response = await postToTwitter(meme, 'Check out this meme drawn by AI! #AIArt #Meme');
        console.log('Meme posted successfully:', response);
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
