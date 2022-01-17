var request=new XMLHttpRequest;
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    //console.log(data);
    let dis=data.filter((ele)=> {
        if(ele.population<200000){
        console.log( ele.name);
        }    
    });
    console.log(dis);
};