const pool = require('../configDB');
const {
    errorMessage,
    successMessage,
    status: statusCode,
} =  require('../helpers/status');
const { isValidEmail, empty } = require('../helpers/validations');

const addRecruit = async (req, res) => {
    const { 
        id_owner, 
        first_name,
        last_name,
        status,
        wish_salary,
        functional_title,
        title,
        seniority,
        industry,
        id_location,
        phone,
        email,
        company,
        status_process,
        relocation 
    } = req.body;

    if (
        empty(id_owner) || 
        empty(first_name) ||
        empty(last_name) ||
        empty(status) ||
        empty(wish_salary) ||
        empty(functional_title) ||
        empty(title) ||
        empty(seniority) ||
        empty(industry) ||
        empty(id_location) ||
        empty(phone) ||
        empty(email) ||
        empty(company) ||
        empty(status_process) ||
        empty(relocation) ||
        !isValidEmail(email)
    ) 
    {
        errorMessage.data = 'All fields are required';
        return res.status(statusCode.bad).send(errorMessage);
    }

    try {
        const { rows } = await pool.query(
            'INSERT INTO public.recruit( \
                id_owner, first_name, last_name, status, wish_salary, functional_title, title, seniority, industry, id_location, phone, email, company, status_process, relocation) \
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *;',
            [
                id_owner, 
                first_name,
                last_name,
                status,
                wish_salary,
                functional_title,
                title,
                seniority,
                industry,
                id_location,
                phone,
                email,
                company,
                status_process,
                relocation 
            ]
        );
        
        successMessage.data = rows[0];
        return res.status(statusCode.success).send(successMessage);
        
    } catch (error) {
        errorMessage.data = 'Adding recruit error. ' + error?.detail;
        return res.status(statusCode.error).send(errorMessage);
    }
}

const getRecruitsByOwner = async (req, res) => {
    const id_owner = req.params.id_owner;

    try {
        const { rows } = await pool.query('SELECT recruit.*, location.name as "name_location", location.latitude, location.longitude, location.zipcode FROM recruit \
                                           INNER JOIN location ON recruit.id_location = location.id_location WHERE id_owner = $1', [id_owner]);
        successMessage.data = rows;
        return res.status(statusCode.success).send(successMessage);
    } catch (error) {
        errorMessage.data = 'Error getting recruits. ' + error?.detail;
        return res.status(statusCode.error).send(errorMessage);
    }
}

const getRecruitById = async (req, res) => {
    const id_recruit = req.params.id_recruit;

    try {
        const { rows } = await pool.query('SELECT recruit.*, location.name as "name_location", location.latitude, location.longitude, location.zipcode FROM recruit \
                                           INNER JOIN location ON recruit.id_location = location.id_location WHERE id_recruit = $1', [id_recruit]);
        successMessage.data = rows;
        return res.status(statusCode.success).send(successMessage);
    } catch (error) {
        errorMessage.data = 'Error getting recruit. ' + error?.detail;
        return res.status(statusCode.error).send(errorMessage);
    }
}

const getLocations = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM location', []);
        successMessage.data = rows;
        return res.status(statusCode.success).send(successMessage);
    } catch (error) {
        errorMessage.data = 'Error getting locations. ' + error?.detail;
        return res.status(statusCode.error).send(errorMessage);
    }
}

module.exports = {
    addRecruit,
    getRecruitsByOwner,
    getRecruitById,
    getLocations
}