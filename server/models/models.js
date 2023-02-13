// Getting at the information from the canele database in the collection products (getting all documents)
export async function getAllListings(client){   
    //awaiting the results from the database
    const result = client.db('canele').collection('products').find()
    //The results are recieved as a BJSON, so have to be converted to an Array to be readable.
    const data = await result.toArray()
    if(result){
        return data
    } else {
        console.log('No results')
    }
}

//Getting all documents where the type is equal to bread in the products collection.
export async function getAllBreadListings(client){   
    const result = await client.db('canele').collection('products').find({type: 'bread'})
    const data = await result.toArray()
    if(result){
        return data
    } else {
        console.log('No results')
    }
}

//Getting all documents where the type is equal to cake in the products collection.
export async function getAllCakeListings(client){   
    const result = await client.db('canele').collection('products').find({type: 'cake'})
    const data = await result.toArray()
    if(result){
        return data
    } else {
        console.log('No results')
    }
}

//Getting all documents where the type is equal to pastry in the products collection.
export async function getAllPastryListings(client){   
    const result = await client.db('canele').collection('products').find({type: 'pastry'})
    const data = await result.toArray()
    if(result){
        return data
    } else {
        console.log('No results')
    }
}



