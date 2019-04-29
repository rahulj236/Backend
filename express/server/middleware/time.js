
const AddCreatedOn = (req, res, next) => {
        req.body.created_on = new Date();
        console.log(req.body);
        next();
    }

module.exports = {
    AddCreatedOn
}