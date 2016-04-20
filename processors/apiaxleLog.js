var LogExporter = require('../exporters/logExporter.js');
var parser = require('../parsers/apiaxleParser.js');
var formatter = require('../formatters/trafficSpaces.js');

module.exports = function() {
  var exporter = new LogExporter(process.env.TRAFFIC_LOGFILE);

  this.processHit = function(hit, cb) {
    try {
      var payload = parser(hit);
      var formatted_payload = formatter(payload);
      exporter.add(formatted_payload);
    } catch (err) {
      console.log(err);
    } finally {
      cb(null);
    }
  };
};
