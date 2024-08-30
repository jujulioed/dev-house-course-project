// Common methods: index, show, update, store, destroy
/**
 * index: list of sessions
 * store: create a new session
 * show: list a specific session
 * update: update a session
 * destroy: delete a session
 */

import User from '../models/User';

class SessionController {

    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        // If the user doesn't exist in DB, we can register this email
        if(!user) {
            user = await User.create({ email: email });
        }

        return res.json(user);
    }
}

export default new SessionController();