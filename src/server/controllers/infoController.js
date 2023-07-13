const models = require('../models/WorkspaceModal.js')
const infoController = {};



infoController.getMoreData = (req, res, next) => {
    const { name } = req.query;
    console.log(name);
    models.Workspaces.find({ name: name })
    .exec()
    .then((data) => {
      console.log(data);
      res.locals.data = data;
      return next();
    })
    .catch(err => {
      return next(err);
    });
    
}
infoController.sendData = (req, res, next) => {
    const obj = req.body;
    console.log(obj);
    models.Workspaces.create(obj)
        .then(() => {
            return next();
        }).catch(err => {
            err.message = 'error in add';
            return next(err);
        });
}

module.exports = infoController;