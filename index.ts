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

const dataTest2 = `
0,9 -> 5,9
0,9 -> 2,9
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
  let newMapGeneral: number[][] = mapGeneral;
  let up = 0;
  let down = 0;
  if (eje === "x") {
    if (array[1] > array[3]) {
      up = array[1];
      down = array[3];
      console.log("Up vale");
      console.log(up);
      console.log("Down vale");
      console.log(down);
    } else {
      up = array[3];
      down = array[1];
      console.log("Up vale");
      console.log(up);
      console.log("Down vale");
      console.log(down);
    }
    console.log("Aca se ve el mapa general previo al cambio");
    console.log(newMapGeneral);
    //0,9 -> 5,9
    while (down <= up) {
      newMapGeneral[down][array[0]] += 1;
      down++;
    }

    console.log("MapGeneral post cambio");
    console.log(newMapGeneral);
  } else {
    if (array[0] > array[2]) {
      up = array[0];
      down = array[2];
    } else {
      up = array[2];
      down = array[0];
    }
    while (down <= up) {
      //2,2 -> 2,1
      newMapGeneral[array[1]][down] += 1;
      down++;
    }
  }
  return newMapGeneral;
}

function runMatrix(data: number[][], mapGeneral: number[][]) {
  let newMapGeneral = [...mapGeneral];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log("El elemento que ingreso es este");
    console.log(element);
    console.log(element[0] === element[2]);
    if (element[0] === element[2]) {
      console.log("agrego matrix por x igual");
      newMapGeneral = addMatrix(element, "x", mapGeneral);
      console.log(newMapGeneral);
    } else if (element[1] === element[3]) {
      console.log("agrego matrix por y igual");
      newMapGeneral = addMatrix(element, "y", mapGeneral);
      console.log(newMapGeneral);
    } else {
      console.log("ni idea");
    }
  }
  return newMapGeneral;
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

function createMap2(cor: number[]) {
  const map = [];
  for (let i = 0; i <= cor[1]; i++) {
    const array = new Array(cor[0] + 1);
    array.fill(0);
    map.push(array);
  }
  console.log("map creado");
  console.log(map);
  return map;
}

//main
let corners: [number, number] = [0, 0];
const dataArray = readLine(dataTest);
const cleanWithoutSpaces = cleanArray(dataArray);
const separateArray = separateXandY(cleanWithoutSpaces);
const numberSeparateArray = transformacionToNumber(separateArray);
corners = cornersMap(numberSeparateArray);
const map = createMap2(corners);
const finalMap = runMatrix(numberSeparateArray, map);
console.log("This is the final map");
console.log(finalMap);
