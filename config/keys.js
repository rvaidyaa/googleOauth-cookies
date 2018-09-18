if (process.env.NODE_ENV === "production") {
    //return prod keys
    module.exports = require("./prod");
} else {
    //on local process.env.NODE_ENV should come undefined or not production
    //return dev keys
    module.exports = require("./dev");
}
//keys.js figure out what set of credentials to use
// when we deploy a server to heroku there is a existing environment variable, called env.NODE_ENV
