function greeting(name){
    let date=new Date();
const hours=date.getHours();
    if(hours>=4  && hours < 12  ){
        console.log("Good morning"+ name)
    }
    else if(hours>=12  && hours < 5  ){
        console.log("Good afternoon"+ name)
    }
    else if(hours>=5  && hours < 8  ){
        console.log("Good evening"+ name)
    }
    else(hours>=8  && hours < 4  )
        console.log("Good night"+ name)
    }
greeting("Joe")