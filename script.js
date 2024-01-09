/* consts */
const size = 11;
const elements_number = elements.length;

/* doms */
const table = document.getElementById("table");
const element_table = document.getElementById("element_table");
const unit_time_element =  document.getElementById('unit_time');
const elapsed_time_element =  document.getElementById('elapsed_time');
const rotateBtn = document.getElementById("rotate-btn");
const flipBtn = document.getElementById("flip-btn");
const totalPoints = document.getElementById("total");

const spring = document.getElementById("spring")
const summer = document.getElementById("summer")
const autumn = document.getElementById("autumn")
const winter = document.getElementById("winter")
const sleepyValley = document.getElementById("sleepyvalley")
const wateringPotatoes = document.getElementById("wateringpotatoes")
const edgeOfForest = document.getElementById("edgeofforest")
const borderLand = document.getElementById("borderland")

const springPts = document.getElementById("spring-pts");
const summerPts = document.getElementById("summer-pts")
const autumnPts = document.getElementById("autumn-pts")
const winterPts = document.getElementById("winter-pts")
const sleepyValleyPts = document.getElementById("sleepyvalley-pts")
const wateringPotatoesPts = document.getElementById("wateringpotatoes-pts")
const edgeOfForestPts = document.getElementById("edgeofforest-pts");
const borderLandPts = document.getElementById("borderland-pts")

/* vars */
let element_iterator = 0, elapsed_time = 0;
let cnt = 0, cntSpring = 0, cntSummer = 0, cntAutumn = 0, cntWinter = 0;
let cntSleepyValley = 0, cntEdgeOfForest = 0, cntWateringPotatoes = 0, cntBorderLand = 0;
let stopCntSleepyValley = 0, stopCntEdgeOfForest = 0, stopCntWateringPotatoes = 0, stopCntBorderLand = 0, firstCntSleepyValley;

let grid = Array(size);
for (let i = 0; i < size; i++)  grid[i] = Array(size).fill("empty");

grid[1][1] = "mountain";
grid[3][8] = "mountain";
grid[5][3] = "mountain";
grid[8][9] = "mountain";
grid[9][7] = "mountain";

function getPts() { 
    cntSleepyValley = getSleepyValley(grid) - stopCntSleepyValley;
    cntWateringPotatoes = getWateringPotatoes(grid) - stopCntWateringPotatoes;
    cntEdgeOfForest = getEdgeofTheForest(grid) - stopCntEdgeOfForest;
    cntBorderLand = getBorderland(grid) - stopCntBorderLand;
}

function handleTime() { 
    if (elapsed_time < 7) { 
    } else if (elapsed_time < 14) { 
        springPts.innerHTML = cntSleepyValley + cntWateringPotatoes;
        cntSpring = cntSleepyValley + cntWateringPotatoes;

        spring.style.color = "black";
        summer.style.color = "green";
        sleepyValley.style.color = "black";
        edgeOfForest.style.color = "green";
    } else if (elapsed_time < 21 ) { 
        cntSummer = cntWateringPotatoes + cntEdgeOfForest;
        summerPts.innerHTML = cntSummer;

        summer.style.color = "black";
        autumn.style.color = "green";
        wateringPotatoes.style.color = "black";
        borderLand.style.color = "green";
    } else if (elapsed_time < 27) { 
        cntAutumn = cntEdgeOfForest + cntBorderLand;
        autumnPts.innerHTML = cntAutumn;

        autumn.style.color = "black";
        winter.style.color = "green";
        edgeOfForest.style.color = "black";
        sleepyValley.style.color = "green";
    } else { 
        winter.style.color = "black";
        sleepyValley.style.color = "black";
        borderLand.style.color = "black";

        cntWinter = cntBorderLand + cntSleepyValley;
        winterPts.innerHTML = cntWinter;
        cnt = cntAutumn + cntSpring + cntSummer + cntWinter;
        totalPoints.innerHTML = cnt;

        alert(`game over, ${cnt} points`)

    }
}

function handlePoints() { 
    getPts();
    if (elapsed_time < 7) { 
        sleepyValleyPts.innerHTML = cntSleepyValley;
        wateringPotatoesPts.innerHTML = cntWateringPotatoes;

        firstCntSleepyValley = cntSleepyValley;
        stopCntEdgeOfForest = cntEdgeOfForest;
        stopCntBorderLand = cntBorderLand;
    } else if (elapsed_time < 14) { 
        // springPts.innerHTML = cntSleepyValley + cntWateringPotatoes;
        // cntSpring = cntSleepyValley + cntWateringPotatoes;

        // spring.style.color = "black";
        // summer.style.color = "green";
        // sleepyValley.style.color = "black";
        // edgeOfForest.style.color = "green";

        wateringPotatoesPts.innerHTML = cntWateringPotatoes;
        edgeOfForestPts.innerHTML = cntEdgeOfForest;

        stopCntSleepyValley = cntSleepyValley;
        stopCntBorderLand = cntBorderLand;
    } else if (elapsed_time < 21 ) { 
        // cntSummer = cntWateringPotatoes + cntEdgeOfForest;
        // summerPts.innerHTML = cntSummer;

        // summer.style.color = "black";
        // autumn.style.color = "green";
        // wateringPotatoes.style.color = "black";
        // borderLand.style.color = "green";

        edgeOfForestPts.innerHTML = cntEdgeOfForest;
        borderLandPts.innerHTML = cntBorderLand;

        stopCntSleepyValley = cntSleepyValley;
        stopCntWateringPotatoes = cntWateringPotatoes;
    } else if (elapsed_time < 27) { 
        // cntAutumn = cntEdgeOfForest + cntBorderLand;
        // autumnPts.innerHTML = cntAutumn;

        // autumn.style.color = "black";
        // winter.style.color = "green";
        // edgeOfForest.style.color = "black";
        // sleepyValley.style.color = "green";

        borderLandPts.innerHTML = cntBorderLand;
        cntSleepyValley += firstCntSleepyValley;
        sleepyValleyPts.innerHTML = cntSleepyValley;
    } else { 
        // winter.style.color = "black";
        // sleepyValley.style.color = "black";
        // borderLand.style.color = "black";

        // cntWinter = cntBorderLand + cntSleepyValley;
        // winterPts.innerHTML = cntWinter;
        // cnt = cntAutumn + cntSpring + cntSummer + cntWinter;
        // totalPoints.innerHTML = cnt;

        // alert(`game over, ${cnt} points`)
    }
}
function is_valid_position(x, y) { 
    let shape = current_element["shape"];
    for (let i = x; i < x + 3; i++) { 
        for (let j = y; j < y + 3; j++) { 
            if ( i < 0 || j < 0 || i > size || j > size || shape[i - x][j - y] == 1 && grid[i][j] != "empty") { 
                return false;
            } 
        }
    }
    return true;
}
function tile_click_handler(event) { 
    let tile = event.target.parentNode;
    let x = Number(tile.dataset.x) - 1, y = Number(tile.dataset.y) - 1;

    if (elapsed_time >= 28) { 
        end_time();
        return;
    }

    if (isNaN(x) || isNaN(y)) { 
        return;
    }

    let shape = current_element["shape"];
    if (is_valid_position(x, y)) { 
        for (let i = x; i < size && i < x + 3; i++) { 
            for (let j = y; j < size && j < y + 3; j++) { 
                if (shape[i - x][j - y] == 1) { 
                    grid[i][j] = current_element["type"];
                } 
            }
        }
        handlePoints();
        elapsed_time += current_element["time"];
        elapsed_time_element.innerHTML = `${elapsed_time} ELAPSED TIME`
        if (elapsed_time < 28){ 
            element_iterator++;
            current_element = elements[element_iterator];
        }
        handleTime();
        create_base_table();
        create_element_table();
    }
}
function create_base_table() { 
    table.innerHTML = "";
    for(let i = 0; i < size; i++) {
    let row = document.createElement("tr");
    for(let j = 0; j < size; j++) {
            let cell = document.createElement("td");
            if (grid[i][j] != "empty") { 
                cell.appendChild(new_element_img(grid[i][j]));
            } else { 
                cell.appendChild(new_element_img("base"));
            }
            cell.dataset.x = i;
            cell.dataset.y = j;
            cell.addEventListener("click", tile_click_handler);
            row.appendChild(cell);
    }
    table.appendChild(row);
    }
}
function create_element_table() { 
    element_table.innerHTML = "";

    let shape = current_element["shape"];
    let type = current_element["type"];

    for (let i = 0; i < 3; i++) { 
        let row = document.createElement("tr");
        for (let j = 0; j < 3; j++) { 
            let cell = document.createElement("td");
            if (shape[i][j] == 1) { 
                cell.appendChild(new_element_img(type));
            } else { 
                cell.appendChild(new_element_img("base"));
            }
            row.appendChild(cell)
        }
        element_table.appendChild(row);
    }
    unit_time_element.innerHTML = `${current_element["time"]} TIME UNIT`;
}

shuffle_array(elements);
let current_element = elements[0];

/* create doms */
create_base_table();
create_element_table();

/* event listeners */
rotateBtn.addEventListener("click", () => { 
    current_element = rotate_element(current_element);
    create_element_table();
});
flipBtn.addEventListener("click", () => { 
    current_element = flip_element(current_element);
    create_element_table();
});