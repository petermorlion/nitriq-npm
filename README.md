A simple NPM wrapper around Nitriq, a static code analysis tool for .NET.

## Usage

```
node index [queriesFile.nq] <assembly1.dll> <assembly2.dll> <assembly3.exe> <...> [resultsFile.html]
```

## Options

There is no specific order to be respected. The file extension of the options is used to determine
what kind of option it is. Options with other or no file extensions are ignored.

### queriesFile

Specify a queries file (.nq file) or omit if you want to use the default file.

### assemblies

A list of assemblies (dll or exe), separated by spaces.

### resultsFile

Specify the results file or omit if you want to use the default file (results.html).

## Disclaimer

Nitriq is a discontinued application that no longer works on Windows 8 and above. Luckily, 
[Artur Kordowski](https://github.com/akordowski) extracted 
[the source][https://github.com/akordowski/Source-Code-Nitriq), fixed it and recompiled it.
The Nitriq binaries are included in this repository as-is.

This repository just contains an NPM wrapper around it, so it can be used in NPM build scripts.
The MIT license of this repository concerns all files *excluding* the Nitriq folder.