const { shortUrlSchema } = require('../../Models/shortUrl');

async function getAllUrl(req, res) {
    const shortUrl = await shortUrlSchema.find();
    return res.status(200).json(shortUrl);
}

async function getShortUrlById(req, res) {
    const shortUrl = await shortUrlSchema.findOne({ shortUrl: req.params.shortUrl });
    if (shortUrl == null) return res.sendStatus(404);
    shortUrl.click++;
    shortUrl.save();
    res.redirect(shortUrl.url);
}

async function postUrl(req, res) {
    let shortUrl = new shortUrlSchema({
        url: req.body.url,
    });
    shortUrl = await shortUrl.save();
    if (!shortUrl)
        return res.status(400).send('the shortUrl cannot be created!');
    res.send(shortUrl);
};
async function deleteUrl(req, res) {
    shortUrlSchema.findByIdAndRemove(req.params.id).then(x => {
        if (x) {
            return res.status(200).json({ success: true, message: 'The Url is deleted!' });
        } else {
            return res.status(404).json({ success: false, message: "Url not found!" });
        }
    }).catch(err => {
        return res.status(500).json({ success: false, error: err });
    });
};




module.exports = { getAllUrl, getShortUrlById, postUrl, deleteUrl };
