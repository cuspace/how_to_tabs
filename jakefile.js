(function() {
    "use strict";

    desc("Default build");
    task("default", ["version"], function() {
        console.log("\n\nBUILD OK");
    });

    var EXPECTED_NODE_VERSION = "v5.4.0";
    desc("Check Node version");
    task("version", function() {
        console.log("Checking Node version: .");
        var actualVersion = process.version;
        if (actualVersion !== EXPECTED_NODE_VERSION) {
            fail("Incorrect Node version: expected " +
                 EXPECTED_NODE_VERSION + ", but was " + actualVersion);
        }
    });
}());
