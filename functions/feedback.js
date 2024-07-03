const sqlite3 = require("sqlite3").verbose()
const path = require("path")
const fs = require("fs")

const dbDir = path.resolve(__dirname, "db")
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir)
}

const dbPath = path.join(dbDir, "feedbacks.db")
const db = new sqlite3.Database(dbPath, (error) => {
  if (error) {
    console.error("Erro ao abrir o banco de dados", error.message)
  }
})

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT
  )`)
})

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    }
  }

  const { name, email, message } = JSON.parse(event.body)

  return new Promise((resolve, reject) => {
    const query = "INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)"
    db.run(query, [name, email, message], function (error) {
      if (error) {
        resolve({
          statusCode: 500,
          body: JSON.stringify({ message: "Erro ao salvar feedback" }),
        })
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ message: "Feedback enviado com sucesso!" }),
        })
      }
    })
  })
}
