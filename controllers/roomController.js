
const createRoom = async (req, res, next) => {
    const roomTitle = req.body['title'];
    const roomTier  = req.body['tier'];
    const roomRoll  = req.body['roll'];

    return res.status(201).send({
        'title' : roomTitle,
        'tier'  : roomTier,
        'roll'  : roomRoll,
    });
}

module.exports = {
    createRoom,
}