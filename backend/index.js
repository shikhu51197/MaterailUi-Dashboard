const express = require("express");
const bodyParser = require("body-parser");
const { downsampleData } = require("./downsampling");
const { readCSV } = require("./csv-reader");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/downsampled", async (req, res) => {
  try {
    const csvFilePath = "./dataset.csv";
    const dataset = await readCSV(csvFilePath);

    const targetSize = 100;
    const downsampledData = downsampleData(dataset, targetSize);

    res.json({ downsampledData: downsampledData });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
