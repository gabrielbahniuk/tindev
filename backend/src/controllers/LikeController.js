const Developer = require('../models/Developer');

module.exports = {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.headers;

    const loggedDev = await Developer.findById(user);
    const targetDev = await Developer.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not found.' });
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    if (targetDev.likes.includes(loggedDev._id)) {
      const loggedSocket = req.connectedUsers[user];
      const targetSocket = req.connectedUsers[devId];

      if (loggedSocket) {
        req.io.to(loggedSocket).emit('match', targetDev);
      }

      if (targetSocket) {
        req.io.to(targetSocket).emit('match', loggedDev);
      }
    }

    return res.json(loggedDev);
  }
};
