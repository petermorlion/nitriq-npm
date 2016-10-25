var execFile = require('child_process').execFile;
var fs = require('fs');

exports.run = function(options) {

    options = options || {};
    options.queriesFile = options.queriesFile || 'queries.nq';
    options.assemblies = options.assemblies || [];
    options.resultsFile = options.resultsFile || 'results.html';

    var nitriqPath = 'Nitriq\\Nitriq.Console-cleaned.exe'
    var temporaryNitriqProject = 'temporary.nitriqProj';

    if (options.assemblies.length === 0) {
        throw 'Please provide at least one assembly (dll or exe) to analyze.';
    }

    var projectFileContents = '';
    for (var i = 0; i < assemblies.length; i++) {
        projectFileContents += assemblies[i] + '\n';
    }

    fs.writeFileSync(temporaryNitriqProject, projectFileContents)

    /* Run */
    var args = [
        temporaryNitriqProject,
        options.queriesFile,
        options.resultsFile
    ];

    var childProcess = execFile(nitriqPath, args, {});

    childProcess.stdout.on('data', function(data) {
        console.log(data);
    });

    childProcess.stderr.on('data', function(data) {
        console.log(data);
    });

}