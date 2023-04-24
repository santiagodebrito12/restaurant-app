import mongoose from 'mongoose';


// 0 disconected
// 1 connected
// 2 connecting
// 3 disconnecting

const mongoConection ={
    isConnected: 0,
}
export const connect = async () => {
    if (mongoConection.isConnected !== 0) {
        console.log('is conected')
        return;
    }
    if(mongoose.connections.length>0){
        mongoConection.isConnected = mongoose.connections[0].readyState;

        if(mongoConection.isConnected === 1){
            console.log('is conected')
            return;
        }
        await mongoose.disconnect();
         
    }
    await mongoose.connect(process.env.MONGO_URL || '') ;
    mongoConection.isConnected = 1;
    
}   

export const disconnect = async () => {
    if(process.env.NODE_ENV === 'development') return; 

    if(mongoConection.isConnected !== 0){
       
        await mongoose.disconnect();
    }
}
