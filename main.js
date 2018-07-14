function loadJson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("Get",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJson("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var childTwo=document.querySelector(".child2");
function career(careerInfo){
var heading=document.createElement("h2");
heading.textContent="career Objective";
childTwo.appendChild(heading);
var hr=document.createElement("hr");
heading.appendChild(hr);
  var careerP=document.createElement("p");
  careerP.textContent=careerInfo.info;
  childTwo.appendChild(careerP);
  }
  function education(edu){
    var table=document.createElement("table");
    childTwo.appendChild(table);
    table.border="1";
    var tr1="<tr><td>Degree</td><td>Institute</td><td>Data</td></tr>";
    table.innerHTML=tr1;
    var tr2="";
    for(var i = 0; i <edu.length; i++){
       tr2+="<tr><td>"+edu[i].Degree+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].Data+"</td></tr>"

    }
    table.innerHTML=tr1+tr2;
  }
function skills(skill){
  var heading=document.createElement("h2");
  heading.textContent="Technical skills";
  childTwo.appendChild(heading);
  var hr=document.createElement("hr");
  childTwo.appendChild(hr);
  for (var i =0; i < skill.length; i++){
    var titleH=document.createElement("h3");
    titleH.textContent=skill[i].title;
    childTwo.appendChild(titleH);
    var ul=document.createElement("ul");
    childTwo.appendChild(ul);
    for (var j = 0; j<skill[i].info.length;j++)
    {
      var li=document.createElement("li");
      li.textContent=skill[i].info[j];
      ul.appendChild(li);

    }

  }
}
