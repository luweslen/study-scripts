require('dotenv').config()

const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function main() {
  try {
    const [, , folderPath, message] = process.argv

    await exec("git add .", { cwd: `${folderPath}`})
    await exec(`git commit -m "${message}"`, { cwd: `${folderPath}`})

    const { stdout: outGitStatus } = await exec('git status', { cwd: `${folderPath}`})

    const branch = outGitStatus.split(" ")[2].replace("Your", "")

    const { stdout: outGitPush } = 
      await exec(
        `git push origin ${branch}`, 
        { cwd: `${folderPath}`}
      )

    console.log('Git Push =>', outGitPush);
  } catch (e) {
    console.log(e)
  }
}

main()