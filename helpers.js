/* helpers: helper functions */

function new_element_img(name) { 
    let img = document.createElement("img");
    img.src = `./assets/tiles/${name}_tile.png`
    img.style.width = "1.8em";
    img.style.height = "1.8em";
    return img;
}
function shuffle_array(array) {
   let currentIndex = array.length, randomIndex;
   while (currentIndex > 0) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--;
       [array[currentIndex], array[randomIndex]] = [
           array[randomIndex], array[currentIndex]];
   }
   return array;
}
function rotate_element(element) { 
    let matrix = element["shape"];
    for (let i = 0; i < 3; i++) {
        for (let j = i; j < 3 ; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < 3; i++) {
        matrix[i] = matrix[i].reverse();
    }
    element["shape"] = matrix;
    element["rotation"] = element["rotation"] % 4;

   return element;
}
function flip_element(element) { 
    let matrix = element["shape"];
    for (let i = 0; i < 3; i++) {
        matrix[i] = matrix[i].reverse();
    }
    element["shape"] = matrix;
    element["mirrored"] = !element["mirrored"];

    return element;
}
function getBorderland(array) { 
    let cnt = 0;
    cnt += array.filter(row => row.every(value => value != "empty")).length;
    let transposedArray = array[0].map((_, i) => array.map(row => row[i]));
    cnt += transposedArray.filter(column => column.every(value => value != "empty")).length;
    return 6 * cnt;
}
function getEdgeofTheForest(array) { 
    let count = 0;
    for (let i = 0; i < array[0].length; i++) {
        if (array[0][i] === "forest") {
            count++;
        }
        if (array[array.length - 1][i] === "forest") {
            count++;
        }
    }
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i][0] === "forest") {
            count++;
        }
        if (array[i][array[0].length - 1] === "forest") {
            count++;
        }
    }
    return count;
}
function getSleepyValley(array) { 
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        let onesCount = array[i].filter(value => value === "forest").length;
        if (onesCount == 3) {
            count++;
        }
    }
    return 4 * count;
}
function getWateringPotatoes(array) { 
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === "farm") {
                let positions = [
                            [-1, 0], 
                    [0, -1],          [0, 1],
                             [1, 0], 
                ];

                positions.forEach(([x, y]) => {
                    let newX = i + x;
                    let newY = j + y;
                    if (
                        newX >= 0 && newY >= 0 &&
                        newX < array.length && newY < array[i].length &&
                        array[newX][newY] === "water"
                    ) {
                        count++;
                    }
                });
            }
        }
    }
    return count * 2; 
}