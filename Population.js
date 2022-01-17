var request=new XMLHttpRequest;
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    //let arr=[1,2,3,4];
    //let res=arr.reduce((a,b)=>a+b);
    let dis=data.reduce((a,b)=> {
          return a+b.population
    },0);
    console.log(dis);
};