import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import testRoutes from "./routes/api/test.js";
import userRoutes from "./routes/api/user.js";
import metadataRoutes from "./routes/api/metadata.js";
import contentRoutes from "./routes/api/content.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

app.use('/api/test', testRoutes);
app.use('/api/user', userRoutes);
app.use('/api/metadata', metadataRoutes);
app.use('/api/content', contentRoutes);

app.use("/", (req, res) => {
    res.json({message: "Nothing to see here!"});
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})