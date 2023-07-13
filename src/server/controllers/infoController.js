const models = require('../models/WorkspaceModal.js')
const infoController = {};



// infoController.getAll = (req, res, next) => {
//   models.Workspaces.find({})
//     .then((data) => {
//       res.locals.data = data;
//       return next();
//     })
//     .catch(err => {
//       return next(err);
//     });

// }
infoController.getMoreData = (req, res, next) => {
  const { name } = req.query;
  console.log(name);
  models.Workspaces.find({ name: name })
    .then((data) => {
      const [resData] = data;
      res.locals.data = resData;
      return next();
    })
    .catch(err => {
      return next(err);
    });

}
infoController.sendData = (req, res, next) => {
  const { name, toDo, doing, done } = req.body;
  const obj = {
    name: name,
    toDo: toDo,
    doing: doing,
    done: done
  }
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