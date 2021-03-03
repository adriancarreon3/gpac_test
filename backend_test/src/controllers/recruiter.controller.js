const pool = require('../configDB');
const {
    errorMessage,
    successMessage,
    status,
} =  require('../helpers/status');

const getRecruitersByCoach = async (req, res) => {
    const id_coach = req.params.id_coach;

    try {
        const { rows } = await pool.query(
            'SELECT user_info.*, recruiter.*, role.name AS "role" FROM user_info INNER JOIN recruiter ON recruiter.id_recruiter = user_info.id_user \
            INNER JOIN coach ON coach.id_coach = recruiter.id_coach INNER JOIN role ON role.id_role = user_info.id_role \
            WHERE recruiter.id_coach = $1;',
            [id_coach]);
        successMessage.data = rows;
        return res.status(status.success).send(successMessage);
    } catch (error) {
        errorMessage.error = 'Error getting recruiters';
        return res.status(status.error).send(errorMessage);
    }
}

module.exports = {
    getRecruitersByCoach
}