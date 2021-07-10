var taskid = [];
var taskName = [];
var taskDone = [];
var taskDoneDate=[];
function addArray(){
    
    
    var countid = 0;
    var mytable = "<table>";
    var CELL=0;
    taskNamee = document.getElementById("t1").value;
    countid=taskid.length;
    countid+=1;
    taskid.push(countid);
    taskName.push(taskNamee);

    mytable += "<tr><th>ID</th><th>TASKNAME</th><th>DONE</th><th>DELETE</th></tr>";
       
    for(CELL;CELL<taskid.length-1;CELL++) {  
        
        mytable += "<tr><td>"+taskid[CELL]+ "</td><td>" + taskName[CELL]+"</td><td><button onClick=doneTask("+CELL+")>DONE</button></td><td><button onClick=deleteTask("+CELL+")>DELETE</button></td></tr>";  
        document.getElementById("ID").innerHTML = mytable;
    }
     
    mytable += "</table>";
    document.getElementById("ID").innerHTML = mytable;
}
function doneTask(id){
    x=taskName[id];
    xx=taskid[id];
    taskName=taskName.filter(function(f) { return f !== x });
    taskName[id]="DONE";
    var date=new Date();
    taskdate=date.getFullYear()+"-"+date.getMonth()+"-"+ date.getDay();
    taskDoneDate.unshift(taskdate);
    taskDone.splice(0,0,x);
    var mytablee = "<table>";
    var CELL=0;
    countid=taskDone.length;
    countid+=1;
    mytablee += "<tr><th>TASKNAME</th><th>DateDone</th></tr>";
       
    for(CELL;CELL<taskDone.length-1;CELL++) {  
        
        mytablee += "<tr><td>"+taskDone[CELL]+ "</td><td>" + taskDoneDate[CELL]+"</td></tr>";  
        document.getElementById("donetaskjs").innerHTML = mytablee;
    }
     
    mytablee += "</table>";
    document.getElementById("donetaskjs").innerHTML = mytablee;
    // document.getElementById("donetaskjs").innerHTML=taskDone;
   
}


// DELETE FUNCTION
function deleteTask(id){
     x=taskName[id];
     xx=taskid[id];
    // delete x;
    // delete xx;
    taskName=taskName.filter(function(f) { return f !== x });
    taskid=taskid.filter(function(f) { return f !== xx });
    var countid = 0;
    var mytable = "<table>";
    var CELL=0;
    countid=taskid.length;
    countid+=1;
    mytable += "<tr><th>ID</th><th>TASKNAME</th><th>DONE</th><th>DELETE</th></tr>";
       
    for(CELL;CELL<taskid.length-1;CELL++) {  
        
        mytable += "<tr><td>"+taskid[CELL]+ "</td><td>" + taskName[CELL]+"</td><td><button onClick=doneTask("+CELL+")>DONE</button></td><td><button onClick=deleteTask("+taskid[CELL]+")>DELETE</button></td></tr>";  
        document.getElementById("ID").innerHTML = mytable;
    }
     
    mytable += "</table>";
    document.getElementById("ID").innerHTML = mytable;
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