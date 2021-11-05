"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
//////////////////////////////////////////Exercice 1 //////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var alf_const = "This is my first ALF lab!";
// alf_const = "This is not correct";Cannot assign to 'alf_const' because it is a constant.
var alf_number;
// alf_number = "10";
alf_number = 10;
// TypeString is not assignable to type Number
var alf_bool = true;
// if(alf_bool === "true")
// This condition will always return 'false' since the types 'boolean' and 'string' have no overlap
if (alf_bool == true) {
    //no need to compare Types optional ===
    alf_bool = false;
    console.log("I found the answer!");
}
var tuple_example;
tuple_example = ["ALF", 1];
// tuple_example = [1, "ALF"]; ORDER MATERS
// console.log(tuple_example[1].substring(1)); substring does not exist on Type Number
console.log(tuple_example[0].substring(1));
// tuple_example[2] = "TP1"; Type '"TP1"' is not assignable to type 'undefined'.
tuple_example[0] = "TP1";
//////////////////////////////////////////Exercice 2 //////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Colours;
(function (Colours) {
    Colours[Colours["BLACK"] = 0] = "BLACK";
    Colours[Colours["BROWN"] = 1] = "BROWN";
    Colours[Colours["RED"] = 2] = "RED";
    Colours[Colours["ORANGE"] = 3] = "ORANGE";
    Colours[Colours["YELLOW"] = 4] = "YELLOW";
    Colours[Colours["GREEN"] = 5] = "GREEN";
    Colours[Colours["BLUE"] = 6] = "BLUE";
    Colours[Colours["VIOLET"] = 7] = "VIOLET";
    Colours[Colours["GREY"] = 8] = "GREY";
    Colours[Colours["WHITE"] = 9] = "WHITE";
})(Colours || (Colours = {}));
var sum = Colours.BROWN + Colours.ORANGE + Colours.VIOLET;
console.log("this is sum", sum);
exports.persons = [
    {
        name: "John Doe",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
];
function logPerson(user) {
    /* TODO: Modifiez pour afficher
          la liste des objets Person */
    console.log(" - " + user.name + ", " + user.age);
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
//////////////////////////////////////////Exercice 4 //////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Pangram = /** @class */ (function () {
    function Pangram(phrase) {
        this.phrase = phrase;
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
        this.phrase = phrase;
    }
    Pangram.prototype.isPangram = function () {
        var _this = this;
        return this.alphabet
            .split("")
            .every(function (x) { return _this.phrase.toLowerCase().includes(x); });
    };
    return Pangram;
}());
var isApanagram = new Pangram("SamyBenChaaliaabcdefghisjklmnopqrSTUVWXYZ");
var isNotApanagram = new Pangram("SamyBenChaalia");
console.log("isapanagramVerified MUST RETURN TRUE", isApanagram.isPangram());
console.log("isNotpanagramVerified MUST RETURN FALSE", isNotApanagram.isPangram());
