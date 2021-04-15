const viewPath = { root : './views/'  };
const jwt      = require('jsonwebtoken');
const Tier     = require('../models/tier');
const User     = require('../models/user');

require('dotenv').config()
const SECRET_KEY = process.env.JWT_SECRET;

const sendToRiot = (req, res, next) => {
    res.status(200).send({'data': '유저 정보'});
}

const createUserCookie = (req, res, next) => {
    const username = req.body['username'];
    const discord  = req.body['discord'];
    const token    = jwt.sign({'username' : username}, SECRET_KEY, {expiresIn:'1d'});
    
    res.cookie('discordAvailability', discord);
    res.cookie('token', token);

    return res.status(200).send({success: true});
}

const createUser = async (req, res, next) => {
    const username = req.body['username'];
    const icon     = req.body['icon'];
    const tier     = await Tier.findOne({'name': req.body['tier']});

    console.log(username, icon, tier['_id']);

    const user = new User({
        name: username,
        icon: icon,
        tier: tier['_id']
    });
    await user.save();

    return res.status(201).send({success: true})
}

const findUser = async (req, res, next) => {
    const user     = await User.findOne(req.body);
    // const user = "hi"
    console.log(user);

    res.status(200).send(user);
}

module.exports = {
    sendToRiot,
    createUserCookie,
    createUser,
    findUser,
}