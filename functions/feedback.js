const { createClient } = require("@supabase/supabase-js")

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    }
  }

  const { name, email, message } = JSON.parse(event.body)

  const { data, error } = await supabase
    .from("feedback")
    .insert([{ name, email, message }])

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Erro ao salvar feedback",
        error: error.message,
      }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Feedback enviado com sucesso!" }),
  }
}
