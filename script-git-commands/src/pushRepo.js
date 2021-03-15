require('dotenv').config()

const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function main() {
  try {
    const [, , foldePath, message] = process.argv

    await exec("git add .", { cwd: `${foldePath}`})
    await exec(`git commit -m "${message}"`, { cwd: `${foldePath}`})

    const { stdout } = await exec("git push origin master", { cwd: `${foldePath}`})

    console.log('stdout:', stdout);
  } catch (e) {
    console.log(e)
  }
}

main()