const { execSync } = require('child_process')

function main() {
  try {
    execSync("mkdir -p teste")
    execSync("cd teste && mkdir teste.txt")
  } catch (e) {
    console.log(e)
  }
}

main()