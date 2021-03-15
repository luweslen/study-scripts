require('dotenv').config()

const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function main() {
  try {
    const [, , foldePath] = process.argv

    await exec('git add .', { cwd: `${foldePath}`})

    const { stdout: outGitStatus } = await exec('git status', { cwd: `${foldePath}`})

    const branch = outGitStatus.split(" ")[2].replace("Your", "")


  } catch (e) {
    console.log(e)
  }
}

main()