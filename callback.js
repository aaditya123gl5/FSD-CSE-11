function register(cb){

    setTimeout(()=>{
         console.log("Registered..")
         cb()
    }, 7000)
}
function login(cb){
    setTimeout(()=>{
        console.log("User Logged in..")
        cb()
    },5000)
    
}
function fetchData(cb){
    setTimeout(()=>{
         console.log("Data fetched..")
          cb()
    },3000)
}
function DisplayData(){
    setTimeout(()=>{
         console.log("Data Displayed..")
    },8000)
}
register(()=>{
    login(()=>{
        fetchData(()=>{
            DisplayData();
        })
    })
});
console.log("Calling another app..")