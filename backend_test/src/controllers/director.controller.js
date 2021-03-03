const pool = require('../configDB');
const {
    errorMessage,
    successMessage,
    status,
} =  require('../helpers/status');

const getDirectors = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT user_info.*, director.id_director FROM user_info INNER JOIN director ON director.id_director = user_info.id_user;');
        successMessage.data = rows;
        return res.status(status.success).send(successMessage);
    } catch (error) {
        errorMessage.error = 'Error al obtener directores';
        return res.status(status.error).send(errorMessage);
    }
}

module.exports = {
    getDirectors
}