// the function
function conversion(text) {
    const replacements = {
      "ا": 1,
      "ب": 2,
      "ج": 3,
      "د": 4,
      "ه": 5,
      "ة": 5,
      "و": 6,
      "ز": 7,
      "ح": 8,
      "ط": 9,
      "ي": 10,
      "ى": 10,
      "ئ": 10, 
      "ك": 20,
      "ل": 30,
      "م": 40,
      "ن": 50,
      "س": 60,
      "ع": 70,
      "ف": 80,
      "ص": 90,
      "ق": 100,
      "ر": 200,
      "ش": 300,
      "ت": 400,
      "ث": 500,
      "خ": 600,
      "ذ": 700,
      "ض": 800,
      "ظ": 900,
      "غ": 1000,
    }
    let converted = text.split("").map(letter =>  replacements[letter]);
    converted = converted.reduce((total, num) => total + num);
    return converted;
  }





  //test
  const text = "الجملة"
  console.log(conversion(text));
  