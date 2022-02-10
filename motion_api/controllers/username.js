'use strict';

// Import packages and dependencies

/**
 * [START GET USERNAMES]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json items
 * Retrieve items
 */
exports.getAll = async (req, res, next) => {
	try {
		// TODO: Fetch all usernames from database
		if (!usernames.length) {
			return res.status(200).json([]);
		}
		return res.status(200).json(usernames.reverse());
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
};
// [END GET USERNAMES]

/**
 * [START POST USERNAME]
 * @param {object} req Cloud Function request context.
 * @param {object} req.body The Datastore kind of the data to save, e.g. "Transcript".
 * @param {object} res Cloud Function response context.
 * @param {object} next Cloud Function next context.
 * Create a new item.
 */
exports.postOne = async (req, res, next) => {
	try {
		// Add username to database
		const username = {
			id: req.body.id,
			username: req.body.username,
			created_at: req.body.created_at,
			updated_at: req.body.updated_at,
		}
		usernames.push(username);
		return res.status(200).json('Ok');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END POST USERNAME]

/**
 * [START PUT USERNAME]
 * @param {object} req Cloud Function request context.
 * @param {object} req.body The Datastore kind of the data to save.
 * @param {object} req.params The Datastore request parameter.
 * @param {object} res Cloud Function response context.
 * @param {object} next Cloud Function next context.
 * Update a item.
 */
exports.updateOne = async (req, res, next) => {
	try {
		// TODO: Update username to database
		const username = await usernames.find(username => username.id === req.params.id);
		if (!username) {
			return res.status(200).json({});
		}
		username = {
			id: req.body.id,
			username: req.body.username,
			created_at: req.body.created_at,
			updated_at: req.body.updated_at,
		}
		usernames.push(username);
		return res.status(200).json('Ok');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END PUT USERNAME]

/**
 * [START GET USERNAME]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json item
 * Retrieve item.
 */
exports.getOne = async (req, res, next) => {
	try {
		// TODO: Fetch a single username with id
		const username = await usernames.find(username => username.id === req.params.id);
		if (!username) {
			return res.status(200).json({});
		}
		return res.status(200).json(username);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
};
// [END GET USERNAME]

/**
 * [START DELETE USERNAME]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express response context.
 * Remove item
 */
exports.deleteOne = async (req, res, next) => {
	try {
		// TODO: Remove comment from the database
		const username = await usernames.find(username => username.id === req.params.id);
		if (!username) {
			return res.status(200).json({});
		}
		return res.status(200).json('Ok!');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
};
// [END DELETE USERNAME]

const usernames = [
	{
		"id": "029c4182-d817-45f9-8b15-3942fa636cf4",
		"username": "Jones",
		"created_at": 1644379256052,
		"updated_at": 1644379256052
	},
	{
		"id": "e18f9532-e242-4dc2-8c5c-b52860055f0e",
		"username": "John",
		"created_at": 1644379261556,
		"updated_at": 1644379261556
	},
	{
		"id": "9279af62-c796-47dc-8d5a-a2997c83469c",
		"username": "Jane",
		"created_at": 1644379265402,
		"updated_at": 1644379265402
	},
	{
		"id": "4b02474f-8c45-40c5-8722-0a5031715bad",
		"username": "Jack",
		"created_at": 1644379270171,
		"updated_at": 1644379270171
	},
	{
		"id": "ad908b8c-e947-4cb1-9b71-f2612b0653c1",
		"username": "Joe",
		"created_at": 1644379274282,
		"updated_at": 1644379274282
	},
	{
		"id": "155173b9-6ab4-4649-9106-3e331f7c0772",
		"username": "Josh",
		"created_at": 1644379305880,
		"updated_at": 1644379305880
	},
	{
		"id": "df15c0dd-46fb-43d3-a031-ac0a4c75539b",
		"username": "Jeff",
		"created_at": 1644379310906,
		"updated_at": 1644379310906
	}
];