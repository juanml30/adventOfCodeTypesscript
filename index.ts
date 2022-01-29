const dataTest = `
0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
`;

function readLine(data: string) {
  const newData = data.split("\n");
  console.log(newData);
  return newData;
}

function cleanArray(data: string[]) {
  const newData: string[] = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element) {
      newData.push(element);
    }
  }
  console.log("array limpio");
  console.log(newData);
  return newData;
}

function separateXandY(data: string[]) {
  const regExp = /\d+/g;
  let newMatrix= []; 
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const partArray = element.match(regExp)
    newMatrix.push(partArray)
  }
  return newMatrix
}

function runMatrix(data: (RegExpMatchArray | null)[]) {
  if (data===null){
    return [];
  }
  for (let i = 0; i < data.length; i++) {
    const element = data[i];

  }
}

function main(data: string) {
  const dataArray = readLine(data);
  const cleanWithoutSpaces = cleanArray(dataArray);
  const separateArray = separateXandY(cleanWithoutSpaces);
  runMatrix(separateArray)
}

main(dataTest);
