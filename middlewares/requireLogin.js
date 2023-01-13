module.exports = (req, res, next) => {
    console.log("[DEBUG] Login middleware");
    if (!req.user) {
        return res.status(401).send({ error: 'Must log in!'});
    }
    
    next();
}