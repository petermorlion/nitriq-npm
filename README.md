A simple NPM wrapper around Nitriq, a static code analysis tool for .NET.

## Usage

```
var nitriq = require('nitriq-npm');

nitriq.run({
    queriesFile: 'customQueries.nq',
    assemblies: ['assembly.dll', 'executable.exe'],
    resultsFile: 'results.html'
});
```

## Options

### queriesFile

A Nitriq queries file (.nq file).

The default value is the queries.nq file that can be found in the `lib` folder.

### assemblies

An array of assemblies (dll or exe).

### resultsFile

The location to store the results file.

The default value is results.html and will be store at the root of your project.

## Disclaimer

Nitriq is a discontinued application that no longer works on Windows 8 and above. Luckily, 
[Artur Kordowski](https://github.com/akordowski) extracted 
[the source][https://github.com/akordowski/Source-Code-Nitriq), fixed it and recompiled it.
The Nitriq binaries are included in this repository as-is.

This repository just contains an NPM wrapper around it, so it can be used in NPM build scripts.
The MIT license of this repository concerns all files *excluding* the Nitriq folder.