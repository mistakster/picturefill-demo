module.exports.register = function (Handlebars, options) {
    options = options || {};
    Handlebars.registerHelper('prettyName', function (str) {
        return (str || "").toLowerCase().replace(/[^a-z0-9]+/, '-');
    });
};