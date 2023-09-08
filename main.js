var allTasks=[];
var completeTasks=[];
var count = 1;
function showTasksTable(){
    var myTable ="<table>";
    myTable += "<tr><th>Id</th><th>Task Name</th><th>Done</th><th>Delete</th></tr>";
    for(let obj in allTasks){
        myTable += "<tr><td>"+ allTasks[obj].id+"</td><td>"+allTasks[obj].name+"</td><td><i onclick='donetask("+allTasks[obj].id+")' class='fa-solid fa-check' style='color: #04AA6D;'</i></td><td><i onclick='deleteTask("+allTasks[obj].id+")' class='fa-solid fa-trash' style='color: #e53434;'></i></td></tr>";
    }
    myTable +="</table>";
    document.getElementById("ID").innerHTML = myTable;

}
function addTask(){
    let task = document.getElementById("t1").value;
    let taskObj = {
        id:count,
        name :task
    }
    allTasks.push(taskObj);
    count++;
    showTasksTable();
    
}

function donetask(id){
    var mycompleteTasks ="<table>";
    let completeTask= allTasks.filter(function(f){
        return f.id === id;
    });
    allTasks= allTasks.filter(function(f){
        return f.id !== id;
    });
    completeTasks.push(completeTask);
    mycompleteTasks += "<tr><th>Id</th><th>Task Name</th><th>Date</th></tr>";
    let date = new Date();
    taskdate=date.getFullYear()+"-"+date.getMonth()+"-"+ date.getDay();
    for(let x in completeTasks){
            mycompleteTasks += "<tr><td>"+ completeTasks[x][0].id+"</td><td>"+completeTasks[x][0].name+"</td><td>"+taskdate+"</td></tr>";
        }
        mycompleteTasks +="</table>";
    showTasksTable();
    document.getElementById("donetaskjs").innerHTML = mycompleteTasks;
}
function deleteTask(id){
    
    // let completeTask= allTasks.filter(function(f){
    //     return f.id === id;
    // });
    allTasks= allTasks.filter(function(f){
        return f.id !== id;
    });
    // completeTasks.push(completeTask);
   
    showTasksTable();
   
}
function showTime(){
    var date = new Date();
    var hourss = date.getHours();
    var minutes = date.getMinutes();
    var secounds =date.getSeconds();
    var TimeZone="AM";
    if(hourss===0){
        hourss=12;
    }
    if(hourss>12){
        hourss -=12;
        TimeZone="PM";
    }
    hourss = (hourss<10) ? "0"+hourss : hourss;
    minutes = (minutes<10) ? "0"+minutes :minutes;
    secounds = (secounds<10) ? "0"+secounds :secounds;
    var time = hourss+ ":" +minutes+ ":"+secounds+" " +TimeZone;
    document.getElementById("clock").innerHTML=time;
    setTimeout(showTime,1000);
}
showTime();