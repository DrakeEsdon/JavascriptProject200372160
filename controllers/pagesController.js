exports.show = function (req, res) {
  const path = (req.path === '/') ? '/home' : req.path;
    
    //render the path
    res.render(`pages${path}`); //ex. views/pages/about.pug
};