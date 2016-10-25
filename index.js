var execFile = require('child_process').execFile;
var fs = require('fs');

var nitriqPath = 'Nitriq\\Nitriq.Console-cleaned.exe'
var temporaryNitriqProject = 'temporary.nitriqProj';

/* Get queries file */
var queriesFile = '';

for (var i = 2; i < process.argv.length; i++) {
    var arg = process.argv[i];

    if (arg.length > 3 && arg.substring(arg.length - 3) === '.nq') {

        if (queriesFile !== '') {
            throw 'More than one query file was provided. Please provide only one queries file or none if you want to use the default queries.';
        }

        queriesFile = arg;
    }
}

if (queriesFile === '') {
    queriesFile = 'queries.nq';
}

/* Get dlls */
var assemblies = [];

for (var i = 2; i < process.argv.length; i++) {
    var arg = process.argv[i];

    if (arg.length > 4 && (arg.substring(arg.length - 4) === '.dll' || arg.substring(arg.length - 4) === '.exe')) {
        assemblies.push(arg);
    }
}

if (assemblies.length === 0) {
    throw 'Please provide at least one assembly (dll or exe) to analyze.';
}

var projectFileContents = '';
for (var i = 0; i < assemblies.length; i++) {
    projectFileContents += assemblies[i] + '\n';
}

fs.writeFileSync(temporaryNitriqProject, projectFileContents)

/* Get results file */
var resultsFile = '';

for (var i = 2; i < process.argv.length; i++) {
    var arg = process.argv[i];

    if (arg.length > 5 && arg.substring(arg.length - 5) === '.html') {

        if (resultsFile !== '') {
            throw 'More than one results file was provided. Please provide only one results file or none if you want to use the default (results.html).';
        }

        resultsFile = arg;
    }
}

if (resultsFile === '') {
    resultsFile = 'results.html';
}

/* Run */
var args = [
    temporaryNitriqProject,
    queriesFile,
    resultsFile
];

var childProcess = execFile(nitriqPath, args, {});

childProcess.stdout.on('data', function(data) {
    console.log(data);
});

childProcess.stderr.on('data', function(data) {
    console.log(data);
});