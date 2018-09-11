var MyFirstProgram = /** @class */ (function () {
    function MyFirstProgram() {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        this.printArgs(argArray);
    } //constructor gets run first
    MyFirstProgram.prototype.printArgs = function (argArray) {
        console.log(argArray);
    };
    MyFirstProgram.prototype.runFirst = function (callback) {
        console.log('this method runs first...');
    };
    MyFirstProgram.prototype.runLast = function () {
        console.log('this method runs last');
    };
    return MyFirstProgram;
}());
var newInstance = new MyFirstProgram("a", "b", "c");
