const User = require('../models/User');



class UserController {
  async index(req, res) {
    const user = await User.find()

    return res.json(user)
  }

  async show(req, res) {
    const user = await User.findById(req.params.id)

    return res.json(user)
  }

  async store(req, res) {
    const { email } = req.body

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'Usuário já existe' })
    }

    const user = await User.create(req.body)

    return res.json(user)
  }

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(user)
  }

  async destroy(req, res) {
    await User.findByIdAndDelete(req.params.id)

    return res.send()
  }

}

module.exports = new UserController();