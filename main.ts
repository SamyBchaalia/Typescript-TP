//////////////////////////////////////////Exercice 1 //////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const alf_const: string = "This is my first ALF lab!";
// alf_const = "This is not correct";Cannot assign to 'alf_const' because it is a constant.
let alf_number: number;
// alf_number = "10";
alf_number = 10;
// TypeString is not assignable to type Number
let alf_bool: boolean = true;
// if(alf_bool === "true")
// This condition will always return 'false' since the types 'boolean' and 'string' have no overlap
if (alf_bool == true) {
  //no need to compare Types optional ===
  alf_bool = false;
  console.log("I found the answer!");
}
let tuple_example: [string, number];
tuple_example = ["ALF", 1];
// tuple_example = [1, "ALF"]; ORDER MATERS

// console.log(tuple_example[1].substring(1)); substring does not exist on Type Number
console.log(tuple_example[0].substring(1));
// tuple_example[2] = "TP1"; Type '"TP1"' is not assignable to type 'undefined'.
tuple_example[0] = "TP1";

//////////////////////////////////////////Exercice 2 //////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
enum Colours {
  BLACK,
  BROWN,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  VIOLET,
  GREY,
  WHITE,
}
let sum: number = Colours.BROWN + Colours.ORANGE + Colours.VIOLET;
console.log("this is sum", sum);
//////////////////////////////////////////Exercice 3 //////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin; /* TODO: Definissez ici le type */

export const persons: Person[] /* TODO: Modifiez en Person[] */ = [
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

export function logPerson(user: Person) {
  /* TODO: Modifiez pour afficher
        la liste des objets Person */
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);

//////////////////////////////////////////Exercice 4 //////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Pangram {
  private alphabet: string ='abcdefghijklmnopqrstuvwxyz';
  constructor(private phrase: string) {
    this.phrase=phrase;
}

  isPangram(): boolean {
    return this.alphabet
      .split('')
      .every((x) => this.phrase.toLowerCase().includes(x));
  }
}
let isApanagram :Pangram = new Pangram("SamyBenChaaliaabcdefghisjklmnopqrSTUVWXYZ");
let isNotApanagram :Pangram = new Pangram("SamyBenChaalia");
console.log("isapanagram Verified MUST RETURN TRUE",isApanagram.isPangram());
console.log("isNotpanagram Verified MUST RETURN FALSE",isNotApanagram.isPangram())

