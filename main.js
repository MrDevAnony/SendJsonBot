addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    try {
        const data = await request.json();

        if (!data.message || !data.message.chat || !data.message.chat.id) {
            return new Response('Invalid data structure', { status: 400 });
        }

        const chatId = data.message.chat.id;
        const token = 'YOUR_TELEGRAM_BOT_TOKEN';

        const responseMessage = JSON.stringify(data, null, 2);

        const messageChunks = splitMessage(responseMessage, 4000);

        for (const chunk of messageChunks) {
            const url = `https://api.telegram.org/bot${token}/sendMessage`;
            const body = {
                chat_id: chatId,
                text: `\`\`\`${chunk}\`\`\``,
                parse_mode: 'Markdown'
            };

            const init = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            };

            const response = await fetch(url, init);
            if (!response.ok) {
                throw new Error(`Telegram API error: ${response.statusText}`);
            }
        }

        return new Response('Messages sent successfully');
    } catch (error) {
        console.error('Error handling request:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

function splitMessage(message, maxLength) {
    const chunks = [];
    for (let i = 0; i < message.length; i += maxLength) {
        chunks.push(message.slice(i, i + maxLength));
    }
    return chunks;
}