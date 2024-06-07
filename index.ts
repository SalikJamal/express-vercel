// Add Express
const express = require("express")


// Initialize Express
const app = express()

// Create GET request
app.get("/", (req, res) => res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Express on Vercel</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Express on Vercel</h1>
    </body>
    </html>
  `))

// Initialize server
app.listen(5000, () => console.log("Running on port 5000."))


// Export the Express API
module.exports = app