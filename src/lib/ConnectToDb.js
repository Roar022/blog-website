const { default: mongoose } = require("mongoose");
// if already a database connection is there
const connection = {};
export const ConnetToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using Existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
