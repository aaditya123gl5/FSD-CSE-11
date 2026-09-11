function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ username: "Alex" });
        }, 2000); 
    });
}
async function runProfileUpdate() {
    console.log("1. Requesting user profile details...");
    
    const user = await fetchUserData(); 
    
    console.log(`2. Profile retrieved for user: ${user.username}`);
    console.log("3. UI successfully updated.");
}

runProfileUpdate();