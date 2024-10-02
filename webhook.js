const axios = require('axios');

const setWebhook = async () => {
    const response = await axios.get(`https://api.telegram.org/bot5758248073:AAHhRY67sCd7wDIbwTtJo6YMRNQFQfiE9dU/setWebhook?url=https://bible-bot.vercel.app/`);
    console.log(response.data);
};

setWebhook();
