"use strict";
const dataTest = `
0,21 -> 5,9
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
function readLine(data) {
    const newData = data.split("\n");
    return newData;
}
function cleanArray(data) {
    const newData = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element) {
            newData.push(element);
        }
    }
    return newData;
}
function separateXandY(data) {
    const regExp = /\d+/g;
    let newMatrix = [];
    let partArray;
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        partArray = element.match(regExp);
        let newPartArray = partArray;
        newMatrix.push(newPartArray);
    }
    return newMatrix;
}
function addMatrix(array) { }
function runMatrix(data) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if ([element[0] === element[2]]) {
            addMatrix(element);
        }
    }
}
function comparation(num1, num2, numMax) {
    if (num1 > numMax || num2 > numMax) {
        if (num1 > num2) {
            return num1;
        }
        else {
            return num2;
        }
    }
    else
        return numMax;
}
function cornersMap(data) {
    let xMax = 0;
    let yMax = 0;
    data.forEach((element) => {
        xMax = comparation(parseInt(element[0]), parseInt(element[2]), xMax);
        yMax = comparation(parseInt(element[1]), parseInt(element[3]), yMax);
    });
    return [xMax.toString(), yMax.toString()];
}
function createMap(array) {
    let newMap = [];
    let newArray = [];
    for (let i = 0; i < parseInt(array[0]) + 1; i++) {
        for (let j = 0; j < parseInt(array[1]) + 1; j++) {
            newArray.push(".");
        }
        newMap.push(newArray);
        newArray = [];
    }
    return newMap;
}
function main(data) {
    let corners = ["0", "0"];
    let map;
    const dataArray = readLine(data);
    const cleanWithoutSpaces = cleanArray(dataArray);
    const separateArray = separateXandY(cleanWithoutSpaces);
    corners = cornersMap(separateArray);
    map = createMap(corners);
    console.log(map);
    runMatrix(separateArray);
}
main(dataTest);
