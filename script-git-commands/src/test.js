require('dotenv').config()

const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function main() {
  try {
    const [, , foldePath] = process.argv

    await exec('git add .', { cwd: `${foldePath}`})

    const { stdout: outGitStatus } = await exec('git commit -m "Teste"', { cwd: `${foldePath}`})

    console.log('stdout:', outGitStatus);

  } catch (e) {
    console.log(e)
  }
}

main()