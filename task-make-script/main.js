require('dotenv').config()

const { execSync } = require('child_process')

function main() {
  try {
    const urlFrom = process.env.MONGO_URL_FROM
    const urlTo = process.env.MONGO_URL_TO
    const database = process.env.MONGO_DB
    const collection = process.env.MONGO_COLLECTION

    // FAZER DUMP DO BANCO
    execSync(`mongodump --uri="${urlFrom}"`, (error) => {
      if(error){
        console.log("Erro ao fazer dump do banco!")
      }
      return
    })

    // RESTAURAR COLLECTION EM OUTRO BANCO
    execSync(`mongorestore --uri=${urlTo} --db=${database} --collection=${collection} dump/testfrom/${collection}.bson`, (error) => {
      if(error){
        console.log("Erro ao restaurar do banco!")
      }
      return
    })

    // APAGAR PASTA DUMP GERADA
    execSync("rm -rf dump", (error) => {
      if(error){
        console.log("Erro ao apagar pasta dump!")
      }
      return
    })
   
  } catch (e) {
    console.log(e)
  }
}

main()