



const infoController = {};


infoController.getMoreData = (req, res, next) => {
    const { id, task } = req.query;

    //db query

    res.locals.data = {
        id: id,
        task: task
    }
    return next();
}

module.exports = infoController;