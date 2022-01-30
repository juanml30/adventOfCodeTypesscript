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
  return newData;
}

function separateXandY(data: string[]): string[][] {
  const regExp = /\d+/g;
  let newMatrix = [];
  let partArray;
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    partArray = element.match(regExp);
    let newPartArray = partArray as string[];
    newMatrix.push(newPartArray);
  }
  return newMatrix;
}

function addMatrix(array: number[], eje: string, mapGeneral: number[][]) {
  let newMapGeneral: number[][];
  if (eje === "x") {
    mapGeneral[array[0]][array[1]] = mapGeneral[array[0]][array[1]] + 1;
  }
}

function runMatrix(data: number[][], mapGeneral: number[][]) {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if ([element[0] === element[2]]) {
      addMatrix(element, "x", mapGeneral);
    }
  }
}

function comparation(num1: number, num2: number, numMax: number) {
  if (num1 > numMax || num2 > numMax) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else return numMax;
}

function cornersMap(data: number[][]): [number, number] {
  let xMax = 0;
  let yMax = 0;
  data.forEach((element) => {
    xMax = comparation(element[0], element[2], xMax);
    yMax = comparation(element[1], element[3], yMax);
  });
  return [xMax, yMax];
}

function createMap(array: number[]): number[][] {
  let newMap: number[][] = [];
  let newArray = [];
  for (let i = 0; i < (array[0]) + 1; i++) {
    for (let j = 0; j < (array[1]) + 1; j++) {
      newArray.push(0);
    }
    newMap.push(newArray);
    newArray = [];
  }
  return newMap;
}

function transformacionToNumber(data: string[][]): number[][] {
  let newDataComplete: number[][] = [];
  let newDataFila: number[] = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
      newDataFila.push(parseInt(data[i][j]));
    }
    newDataComplete.push(newDataFila);
    newDataFila = [];
  }
  return newDataComplete;
}

function main(data: string) {
  let corners: [number, number] = [0, 0];
  let map: number[][];
  const dataArray = readLine(data);
  const cleanWithoutSpaces = cleanArray(dataArray);
  const separateArray = separateXandY(cleanWithoutSpaces);
  const numberSeparateArray = transformacionToNumber(separateArray);
  corners = cornersMap(numberSeparateArray);
  map = createMap(corners);
  console.log(map);
  runMatrix(numberSeparateArray, map);
}

main(dataTest);
