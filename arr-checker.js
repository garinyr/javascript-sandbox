function validate(arrPertama, arrKedua) {
  let duplicate = [];

  for (let i = 0; i < arrPertama.length; i++) {
    const elPertama = arrPertama[i];

    for (let j = 0; j < arrKedua.length; j++) {
      const elKedua = arrKedua[j];

      if (elPertama === elKedua) {
        duplicate.push(elPertama);
      }
    }
  }
  console.log(duplicate);
}

const myArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  'kita',
  'bisa',
  'kitabisa',
  '1',
  '2',
  '3',
];
const myArr2 = ['a', 'c', 'e', 'a', 8, 1, 1, '3', 'kita', 'hello', 'kita'];

validate(myArr, myArr2);
