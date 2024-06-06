const config = require('./config')

module.exports = class SnowayAPI {
    #apiKey

    constructor(apiKey) {
        this.#apiKey = apiKey
    };

    /**
     *
     * @param {String} userID
     * @returns {Promise<Object|null>}
     */

    async getNames(userID) {
        const response = await fetch(config.endpoint + "/api/" + config.version + "/prevname/get", {
            method: "POST",
            headers: {
                'Authorization': this.#apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userID,
            })
        });

        const data = await response.json();

        if (!data) return null
        else return data.data;
    };

    /**
       *
       * @param {String} userID
       * @returns {Promise<Object|null>}
       */

    async allPrevnames(userID) {
        const response = await fetch(config.endpoint + "/api/" + config.version + "allprevnames", {
            method: "POST",
            headers: {
                'Authorization': this.#apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userID,
            })
        });

        const data = await response.json();

        if (!data) return null
        else return data.data;
    };


    async count() {
        const response = await fetch(config.endpoint + "/api/" + config.version + "/prevname/count", {
            method: "GET",
            headers: {
                'Authorization': this.#apiKey,
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();

        if (!data) return null
        else return data.data;
    };
};
