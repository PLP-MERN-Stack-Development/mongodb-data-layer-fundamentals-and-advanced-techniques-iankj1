const {MongoClient} =require('mongodb');
const uri = "mongodb://localhost:27017"

async function connectDB() {
    try {
        await mongoose.connect(process.MONOGDB_URI);
        console.log("Database connected");
    } catch (error) {
        console.error("Database did not connect", error);
        process.exit(1);
    }
} 

connectDB ();