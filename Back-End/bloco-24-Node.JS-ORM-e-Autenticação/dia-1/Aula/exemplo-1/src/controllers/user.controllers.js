const userService = require('../services/user.service')

const getAllUsers = async (req, res) => {
    const result = await userService.getAllUsers()
    return res.status(200).json(result)
}

module.exports = {getAllUsers}
