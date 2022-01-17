var request=new XMLHttpRequest;
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    let dis=data.filter((ele)=> ele.currencies[0].symbol==='$'); 
    let res=dis.map((ele)=>ele=ele.name);
    console.log(res);
};