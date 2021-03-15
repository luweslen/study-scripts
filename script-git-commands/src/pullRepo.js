require('dotenv').config()

const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function main() {
  try {
    const [, , foldePath ] = process.argv

    const { stdout } = await exec("git pull origin master", { cwd: `${foldePath}`})

    console.log('stdout:', stdout);

  } catch (e) {
    console.log(e)
  }
}

main()