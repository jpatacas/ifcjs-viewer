import {createCardDiv} from './overlay.js';
import { projects } from './projects.js';

//get list of projects from bimserver, create a card for each project

//local
//const socket = io("http://localhost:8088/");
//const socket = io("http://localhost:8088/");

//aws
//const socket = io("http://13.40.172.106:8088/");


// socket.on("hello", (arg) => {
//     console.log(arg);
// })

//socket.emit("getProjects", "getProjects"); //get projects from a bimserver

for (let proj of projects)
{
    createCardDiv(proj.name, proj.id);
   // console.log(proj.name, proj.id);
}

//need to build the projects map for locally hosted files instead of bimserver...
// socket.on("projectIds",(resname, reslist) => {

//     let projectsMap = buildMap(resname, reslist);

//     projectsMap.forEach(function (value, key) {
//         createCardDiv(key, value);
//     });

//     console.log(resname + reslist) 
//     //console.log("projectIds")

// }
// )