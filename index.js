// Iteration 1: Names and Input
let hacker1 = "Rui";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Andrea";
console.log("The navigator's name is " +hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
    }
    else if (hacker1.length < hacker2.length) {
      console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
    }
    else {
      console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
    }

// Iteration 3: Loops
let capitalizedName = "";
for (i=0; i<hacker1.length; i++){
  capitalizedName += hacker1.charAt(i);
  capitalizedName += " ";
}
console.log(capitalizedName.toUpperCase());



let reversedName = "";
for (j=hacker2.length; j>=0; j--){
  reversedName += hacker2.charAt(j);
}
console.log(reversedName);


/*added .toUpperCase to prevent errors from entering the same name but only one capitalized, eg. Rui and rui*/
function lexiOrder (name1, name2){
  nameU1=name1.toUpperCase();
  nameU2=name2.toUpperCase();
  let k = 0;
  while (k<nameU1.length || k<nameU2.length){
    if (nameU1.charAt(k)<nameU2.charAt(k)){
      return "The driver's name goes first.";
      break;
    }
    else if (nameU1.charAt(k)>nameU2.charAt(k)){
      return "Yo, the navigator goes first, definitely.";
      break;
    }
    else {
      k++;
    }
  }
  return "What?! You both have the same name?";
}
console.log(lexiOrder(hacker1,hacker2));






/*Bonus1 */
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim est, rhoncus non magna ornare, egestas vehicula velit. Nam ut libero risus. Aliquam viverra sapien a tellus malesuada congue. Etiam et tincidunt arcu. Ut efficitur sapien ac blandit elementum. Donec laoreet sagittis nunc eu consequat. Praesent semper scelerisque eros vel posuere. Vestibulum fringilla erat ut molestie pulvinar. Mauris tempus felis ac dui laoreet commodo. Integer sit amet sapien quis erat lacinia efficitur. Curabitur ut auctor lorem, sagittis ultrices lectus. Sed dolor eros, tincidunt sed molestie vel, sollicitudin sit amet enim. Sed posuere non massa eget efficitur. Nullam at posuere justo. Pellentesque finibus nulla dui, at cursus nisi auctor non. Nunc tempus ligula turpis, nec faucibus mauris iaculis facilisis. Etiam malesuada turpis est, finibus interdum neque pellentesque quis. Mauris neque arcu, tincidunt id metus et, auctor facilisis nulla. Morbi ac sodales ligula, vel porta purus. In lacus magna, tempor suscipit pretium eu, pretium ac velit. Quisque egestas quam ante, ornare dictum arcu iaculis quis. Proin non luctus purus, nec vehicula nunc. Fusce vel varius enim, sed auctor augue. Vestibulum mollis dui eget purus ornare, vitae hendrerit sem viverra. Morbi mattis lectus dolor. Nunc scelerisque ac massa in consectetur. Fusce ultricies convallis nunc, et rhoncus lectus interdum non. Donec nisl libero, rhoncus in sem nec, dignissim finibus metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a suscipit nunc. Nunc eget magna mi. Maecenas commodo mattis enim nec ullamcorper. Morbi neque risus, malesuada consectetur dolor vitae, iaculis euismod nisl. Quisque luctus id lorem quis volutpat. Maecenas dignissim magna at tortor volutpat rutrum. Aenean convallis consequat fermentum. Nullam nec imperdiet tortor, nec mattis sapien. Mauris id pharetra metus. Phasellus erat leo, lobortis id ante at, finibus laoreet erat."
let counter = 0;
for (x=0; x<longText.length; x++){
  if (longText.charAt(x) === " "){
    counter = counter + 1;
  }
}
console.log(counter);
