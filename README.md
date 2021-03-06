About
=====

*Trigger* is a Firefox OS app for remotely triggering the shutters of cameras
connected by [PTP/IP][1].

It is available on [Firefox Marketplace][2].


Development
===========

Grunt
-----

  * Planned: Run [Grunt][3] to create the package for distribution on Firefox
    Marketplace.

  * Run `grunt watch` to keep CSS updated during development.

Coding conventions
------------------

  * Code needs to validate with JSLint.

  * Comments are in Markdown.

  * Avoid constructors (JS is classless), don’t throw exceptions (not necessary
    in JS).

  * Version numbers: [major.minor.patch][4]

Publishing a new version
------------------------

  * Keep version up to date in:

      + Git tags

      + `package.json`

      + `package/manifest.webapp`

  * Publish to:

      + [github.com/feklee/trigger][5]

      + Firefox Marketplace: [Trigger][6]

License
=======

Except where noted otherwise, files are licensed under the MIT License.

The MIT License (MIT)
---------------------

Copyright (c) 2014 [Felix E. Klee](felix.klee@inka.de)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[1]: https://en.wikipedia.org/wiki/Picture_Transfer_Protocol
[2]: https://marketplace.firefox.com/app/trigger
[3]: http://gruntjs.com/
[4]: http://semver.org/
[5]: https://github.com/feklee/trigger
[6]: https://marketplace.firefox.com/app/trigger
