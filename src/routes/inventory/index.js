const staticData = require('../../staticData.js');

module.exports = (express) => {
    const router = express.Router();

    
    router.get('/:date/:limit', (req, res) => {

        // Parse Date
        // Should allow for US or UK Dates

            // if Year Only

            // if Year + Month Only

            // if Year + Month + Day
        

        const staticResponse = {
            reqBody: req.body,
            reqParams: req.params,
            res: staticData,
        }
        res.json(staticResponse);
    });

    router.get('/week/:weekID', (req, res) => {

        // Parse week id since epoche of site, display all postings for that week. Monday - Sunday

        const staticResponse = {
            reqBody: req.body,
            reqParams: req.params,
            res: staticData,
        }
        res.json(staticResponse);
    });

    return router;
};