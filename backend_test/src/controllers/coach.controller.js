const pool = require('../configDB');
const {
    errorMessage,
    successMessage,
    status,
} =  require('../helpers/status');

const getCoachesByDirector = async (req, res) => {
    const id_director = req.params.id_director;

    try {
        const { rows } = await pool.query(
            'SELECT user_info.*, coach.*, role.name AS "role" FROM user_info INNER JOIN coach ON coach.id_coach = user_info.id_user \
            INNER JOIN director ON director.id_director = coach.id_director INNER JOIN role ON role.id_role = user_info.id_role \
            WHERE coach.id_director = $1;',
            [id_director]);
        successMessage.data = rows;
        return res.status(status.success).send(successMessage);
    } catch (error) {
        errorMessage.error = 'Error getting coaches';
        return res.status(status.error).send(errorMessage);
    }
}

module.exports = {
    getCoachesByDirector
}