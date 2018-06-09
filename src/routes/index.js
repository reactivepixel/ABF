module.exports = (express) => {
    const router = express.Router();

    router.get('/status', (req, res) => {
        res.json({
            healthy: true,
        });
    });


    router.use('/inventory', require('./inventory')(express));

    router.use('/find', require('./find')(express));

    return router;
};