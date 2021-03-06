const fetch = require('node-fetch');

/**
 * Client for Eternal Realms MC
 * https://eternalrealms.net
 */

class EternalRealmsMCClient {

	/**
     * @typedef {Object} EternalRealmsMCClientOptions
     * @param {String} [url] Base URL for Eternal Realms Client
     * @memberof EternalRealmsMCClient
     */

	/**
     * @param {EternalRealmsMCClientOptions} [options] Client Options
     */
	constructor(options = {}) {
		/**
         * Client Options
         * @type {Object}
         */
		this.options = options;

		/**
        * Base URL
        * @type {String}
        */
		this.baseURL = options.url || 'https://api.eternal.gs/';
	}

	/**
	 * Fetch the list of players online from all or a specific server.
	 * @param {('dev'|'lobby'|'stage'|'kitpvp'|'survival'|null)} server The server name of the
	 * @returns {Promise<Object>}
	 */

	online(server) {
		return this._get(`online${server ? `/${server}` : ''}`);
	}

	user(user) {
		return this._get(`user${user ? `/${user}` : ''}`);
	}

	staff() {
		return this._get(`online/staff`);
	}

	stats() {
		return this._get('stats');
	}

	servers() {
		return this._get('servers');
	}

	async _get(endpoint) {
		const req = await fetch(`${this.baseURL}${endpoint}`)
			.then(res => res.json());
		return req;
	}

}

module.exports = EternalRealmsMCClient;
