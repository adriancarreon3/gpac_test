const pool = require('../configDB');
const {
    errorMessage,
    successMessage,
    status,
} =  require('../helpers/status');

const { isEmpty, isValidEmail } = require('../helpers/validations');

const getUsers = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT user_info.*, user_account.email, user_account.password, role.name as "role" FROM user_info INNER JOIN role ON role.id_role = user_info.id_role INNER JOIN user_account ON user_account.id_user = user_info.id_user;');
        successMessage.data = rows;
        return res.status(status.success).send(successMessage);
    } catch (error) {
        errorMessage.data = 'Error al obtener usuarios';
        return res.status(status.error).send(errorMessage);
    }
}

const login = async (req, res) => {

    const { email, password } = req.body;

    if (isEmpty(email) || isEmpty(password) || !isValidEmail(email)) {
        errorMessage.error = 'All fields are required';
        return res.status(status.bad).send(errorMessage);
    }

    try {
        const { rows } = await pool.query(
            'SELECT user_info.*, user_account.email, role.name as "role" FROM user_info INNER JOIN role ON role.id_role = user_info.id_role INNER JOIN user_account ON user_account.id_user = user_info.id_user WHERE user_account.email = $1 AND user_account.password = $2;',
            [email, password]);
        
        if(rows.length > 0){
            successMessage.data = rows[0];
            return res.status(status.success).send(successMessage);
        }
        else{
            errorMessage.data = 'Incorrect login';
            return res.status(status.bad).send(errorMessage);
        }
    } catch (error) {
        errorMessage.data = 'Login error';
        return res.status(status.error).send(errorMessage);
    }
  }

module.exports = {
    getUsers,
    login
}