const staticData = require('../../staticData.js');

module.exports = (express) => {
    const router = express.Router();

    // Vin
    router.get('/vin/:vin', (req, res) => {
        const staticResponse = {
            reqBody: req.body,
            reqParams: req.params,
            res: staticData,
        }
        res.json(staticResponse);
    });

    // Platform ID
    router.get('/id/:id', (req, res) => {
        const staticResponse = {
            reqBody: req.body,
            reqParams: req.params,
            res: staticData,
        }
        res.json(staticResponse);
    });

    // Lot
    router.get('/lot/:lot', (req, res) => {
        const staticResponse = {
            reqBody: req.body,
            reqParams: req.params,
            res: staticData,
        }
        res.json(staticResponse);
    });

    // Make
    router.get('/make/:make', (req, res) => {
        const staticResponse = {
            reqBody: req.body,
            reqParams: req.params,
            res: staticData,
        }
        res.json(staticResponse);
    });

    // Model
    router.get('/model/:model', (req, res) => {
        const staticResponse = {
            reqBody: req.body,
            reqParams: req.params,
            res: staticData,
        }
        res.json(staticResponse);
    });
    
    // Year
    router.get('/year/:year', (req, res) => {
        const staticResponse = {
            reqBody: req.body,
            reqParams: req.params,
            res: staticData,
        }
        res.json(staticResponse);
    });

    // Make, Model & Year
    router.get('/:make/:model/:year', (req, res) => {
        const staticResponse = {
            reqBody: req.body,
            reqParams: req.params,
            res: staticData,
        }
        res.json(staticResponse);
    });

    // Make & Model
    router.get('/:make/:model', (req, res) => {
        const staticResponse = {
            reqBody: req.body,
            reqParams: req.params,
            res: staticData,
        }
        res.json(staticResponse);
    });
    

    return router;
};