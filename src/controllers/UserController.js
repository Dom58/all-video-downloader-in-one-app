import dotenv from 'dotenv';
// import db from '../database/models/index.js';


dotenv.config();

// const {users} = db;

/**
 * User Controllers
 */
export default class UserController {

    /**
     * @param {Object} req
     * @param {Object} res
     * @returns {String} all users response and count
     *
     */
    static async getUsers(req, res) {
        try {
            const allUsers = await users.findAll({
                order: [['createdAt', 'DESC']]
            });

            return res.status(200).json({
                data: allUsers,
            });
        } catch (error) {
            console.log('====error===', error);
            return res.status(500).json({
                error: error.message,
            });
        }
    }
}
