const axios = require('axios');
const Player = require('../models/Player');
const User = require('../models/User');

const timeGap = require('../../utils/timeGap');
// require("dotenv").config({ path: `${__dirname}/../../dotenv/config.env` });

class PlayerController {
	async index(req, res) {
		const player = await Player.findAll();
		return res.json(users);
	}

	async store(req, res) {
		const { username, region, icon_id } = req.body;
		try {
			const leagueUser = await axios({
				method: 'get',
				url: `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}`,
				headers: { 'X-Riot-Token': process.env.LEAGUE_API_KEY }
			});
			if (icon_id != leagueUser.data.profileIconId) {
				return res.status(400).json({ message: 'Icons does not match.' });
			}

			const player = await Player.create({ username, user_id: req.user.id });
			return res.json(player);
		} catch (err) {
			return res.status(500).json({ err });
		}
	}
}

module.exports = new PlayerController();
