export const reducerLink = (state , action) => {
    const dog = "https://random.dog/woof.json"
    const dog2 = "https://dog.ceo/api/breeds/image/random"
    

    switch (action) {
        
        case "Dog":
            return dog ;    
        case "AnotherDog":
            return dog2    
    
        default:
         return state   
    }
}