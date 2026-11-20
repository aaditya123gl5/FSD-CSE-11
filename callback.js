function register(cb){

    setTimeout(()=>{
         console.log("Registered..")
         cb()
    },7000)
}
function login(cb){
    setTimeout(()=>{
        console.log("User Logged in..")
        cb()
    },8000)
    
}
function fetchData(cb){
    setTimeout(()=>{
         console.log("Data fetched..")
          cb()
    },1000)
}
function DisplayData(){
    setTimeout(()=>{
         console.log("Data Displayed..")
    },9000)
}
register(()=>{
    login(()=>{
        fetchData(()=>{
            DisplayData();
        })
    })
});
console.log("Calling another app..")