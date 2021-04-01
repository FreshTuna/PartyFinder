const viewPath = { root : './views/'  };

// render home
const toHome = (req, res, next) => {
    res.render('index.ejs',viewPath);
}

const sendHello = (req, res, next) => {
    res.send("Hello!");
}

module.exports = {
    toHome,
    sendHello,
}