const {User} = require('../database/models/index')

const getAllUsers = async () => {
    const result = await User.findAll()
    // findALL - ENCONTRA TODOS OS DADOS DAS COLUNAS
    return result
}

module.exports = {getAllUsers}
