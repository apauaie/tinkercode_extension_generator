This is a library for use with lekirbot Robot 

Installation
--------------------------------------------------------------------------------

To install this library, just place this entire folder as a subfolder in your
Arduino/lib/targets/libraries folder.

When installed, this library should look like:

Arduino/lib/targets/libraries/lekirbot              (this library's folder)
Arduino/lib/targets/libraries/lekirbot/lekirbot.cpp     (the library implementation file)
Arduino/lib/targets/libraries/lekirbot/lekirbot.h       (the library description file)
Arduino/lib/targets/libraries/lekirbot/keywords.txt (the syntax coloring file)
Arduino/lib/targets/libraries/lekirbot/examples     (the examples in the "open" menu)
Arduino/lib/targets/libraries/lekirbot/readme.txt   (this file)

Building
--------------------------------------------------------------------------------

After this library is installed, you just have to start the Arduino application.
You may see a few warning messages as it's built.

To use this library in a sketch, go to the Sketch | Import Library menu and
select Test.  This will add a corresponding line to the top of your sketch:
#include <lekirbot.h>

To stop using this library, delete that line from your sketch.

Geeky information:
After a successful build of this library, a new file named "lekirbot.o" will appear
in "Arduino/lib/targets/libraries/lekirbot". This file is the built/compiled library
code.

If you choose to modify the code for this library (i.e. "lekirbot.cpp" or "lekirbot.h"),
then you must first 'unbuild' this library by deleting the "lekirbot.o" file. The
new "lekirbot.o" with your code will appear after the next press of "verify"

