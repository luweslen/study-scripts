require('dotenv').config()

const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function main() {
  try {
    const [, , foldeName, repository] = process.argv

    await exec(`mkdir ${foldeName}`, { cwd: "../"})

    await exec("git init", { cwd: `../${foldeName}`})
    await exec(`git remote add origin ${repository}`, { cwd: `../${foldeName}`})

    await exec('type nul > README.md', { cwd: `../${foldeName}`})

    await exec("git add .", { cwd: `../${foldeName}`})
    await exec('git commit -m "First commit"', { cwd: `../${foldeName}`})

    const { stdout } = await exec("git push -u origin master", { cwd: `../${foldeName}`})

    console.log('stdout:', stdout);

  } catch (e) {
    console.log(e)
  }
}

main()

// cd existing_folder
// git init
// git remote add origin git@gitlab.com:tilit/test-script-git.git
// git add .
// git commit -m "Initial commit"
// git push -u origin master