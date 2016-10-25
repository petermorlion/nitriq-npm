var execSync = require('child_process').execSync;
var fs = require('fs');
var path = require('path');

exports.run = function(options) {

    options = options || {};
    options.queriesFile = options.queriesFile || __dirname + '\\queries.nq';
    options.assemblies = options.assemblies || [];
    options.resultsFile = options.resultsFile || 'results.html';

    var nitriqPath = path.normalize(__dirname + '\\..\\Nitriq\\Nitriq.Console-cleaned.exe');
    var temporaryNitriqProject = 'temporary.nitriqProj';

    if (options.assemblies.length === 0) {
        throw 'Please provide at least one assembly (dll or exe) to analyze.';
    }

    var projectFileContents = '';
    for (var i = 0; i < options.assemblies.length; i++) {
        projectFileContents += options.assemblies[i] + '\n';
    }

    fs.writeFileSync(temporaryNitriqProject, projectFileContents)

    var args = [
        temporaryNitriqProject,
        options.queriesFile,
        options.resultsFile
    ];

    var command = nitriqPath + ' ' + temporaryNitriqProject + ' ' + options.queriesFile + ' ' + options.resultsFile;

    var childProcess = execSync(command, { stdio: 'inherit' });

}