const { send } = require('micro');
const Parser = require('@postlight/mercury-parser');

module.exports = async (req, res) => {
    try {
        let url = req.query.url;
        if (!url) {
            send(res, 400, 'Please provide a url');
            return;
        }

        const result = await Parser.parse(url);
        send(res, 200, result);
    } catch (error) {
        console.log(error);
        send(res, 500, 'An error occurred parsing the article');
    }
};