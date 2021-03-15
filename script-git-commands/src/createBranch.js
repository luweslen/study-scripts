require('dotenv').config()

const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function main() {
  try {
    const [, , folderPath, nameBranch] = process.argv

    await exec(`git checkout -b ${nameBranch}`, { cwd: `${folderPath}`})

    const { stdout: outGitStatus } = await exec('git status', { cwd: `${folderPath}`})

    const branch = outGitStatus.split(" ")[2].replace("Your", "")
    console.log(branch)
  } catch (e) {
    console.log(e)
  }
}

main()