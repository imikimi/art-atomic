// Generated by CoffeeScript 1.12.7
(function() {
  var Color, Matrix, Perimeter, Point, Rectangle, _package, compactFlatten;

  Color = require('./Color');

  Point = require('./Point');

  Rectangle = require('./Rectangle');

  Matrix = require('./Matrix');

  Perimeter = require('./Perimeter');

  compactFlatten = require('art-standard-lib').compactFlatten;

  module.exports = [
    compactFlatten([Color, "isColor", "rgbColor", "newColor", "color", "hslColor", "rgb256Color", "colorNames", "colorNamesMap", "hsl2Rgb", "isColorOrColorString"]), compactFlatten([Rectangle, "isRect", "rect", "nothing", "everything"]), compactFlatten([Matrix, "isMatrix", "matrix", "identityMatrix"]), compactFlatten([Perimeter, "isPerimeter", "perimeter", "perimeter0"]), compactFlatten([Point, "isPoint", "point", "pointWithAspectRatioAndArea", Object.keys(Point.namedPoints)]), {
      "package": _package = require("../../package.json"),
      version: _package.version
    }
  ];

}).call(this);

//# sourceMappingURL=Atomic.js.map
