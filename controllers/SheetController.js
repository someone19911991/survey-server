const SheetService = require("../services/SheetService");

class SheetController {
    async addSurvey(req, res, next) {
        try {
            const response = await SheetService.addSurvey(req.body);
            res.json(response);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new SheetController();
