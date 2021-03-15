require('dotenv').config()

const util = require('util')
const exec = util.promisify(require('child_process').exec)
const spawn  = require('child_process').spawn

async function main() {
  try {
    const [, , folderName, repository] = process.argv

    // Voltar uma pasta e criar uma PASTA
    // execSync("cd .. && mkdir repo-teste", (err, stdout, stderr) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log("CRIAR PASTA => ", stdout)

    // })
    // Executar um Git Init
    // await exec('cd .. && mkdir repo-teste')
    // const { stdout, stderr } = await exec('cd ../repo-teste && git init')
    // const { stdout, stderr } = 
    //   await exec(`cd ../repo-teste && git remote add origin ${repository}`)
    // const { stdout, stderr } = 
    //   await exec(`cd ../repo-teste && type nul >> README.md`)
    // const { stdout, stderr } = await exec(`
    //   cd ../repo-teste && 
    //   git add . 
    // `)
    // const { stdout, stderr } = await exec(`
    //   cd ../repo-teste && 
    //   git commit -m "first commit"
    // `)
    // const { stdout, stderr } = await exec(`
    //   cd ../repo-teste && 
    //   git push -u origin master
    // `)
    // console.log('stdout:', stdout);
    // console.error('stderr:', stderr);

    const gitAdd = spawn('git', ['add', '.']);
    const gitCommit = spawn('git', ['commit', '-m', "First Commit"]);
    const gitPush = spawn('git', ['push', '-u', "origin", "master"]);

    gitAdd.stdout.on('data', function (data) {
      console.log('Git Add stdout: ' + data);
    });

    gitCommit.stdout.on('data', function (data) {
      console.log('Git Commit stdout: ' + data);
    });

    gitPush.stdout.on('data', function (data) {
      console.log('Git Push stdout: ' + data);
    });

    // Executar um Git remote

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