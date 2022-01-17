var request=new XMLHttpRequest;
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    data.forEach(element => console.log(element.name));
    data.forEach(element => console.log(element.capital));
    data.forEach(element => console.log(element.flag));
}


