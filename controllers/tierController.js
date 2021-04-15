const Tier = require('../models/tier');

const createTier = async (req, res, next) => {
    const name     = req.body['name'];
    const imageUrl = req.body['image_url'];
    const duoTiers = req.body['duo_tiers'];

    const tier = new Tier(req.body);
    await tier.save();

    res.status(201).send({
        'name'    : name,
        'imageUrl': imageUrl,
        'tiers'   : duoTiers
    })
}

const findAllTier = async (req, res, next) => {
    const tier = await Tier.find({});

    res.status(200).send(tier);
}

const findOneTier = async (req, res, next) => {
    const name = req.params;
    const tier = await Tier.findOne(name);

    res.status(200).send(tier);
}

module.exports = {
    createTier,
    findAllTier,
    findOneTier,
}