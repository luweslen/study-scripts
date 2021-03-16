require('dotenv').config();

const { readFileSync, writeFileSync } = require('fs');

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main() {
  try {
    let [, , name] = process.argv;

    const jsonData = readFileSync(`./src/jsons/${name}.json`);

    const components = JSON.parse(jsonData);

    let hasArray = false;
    let dataValues = {};

    let dataVueFile = `<template> <div class="form-${name}">`;
    
    for (const [keyComponent, valueComponent] of Object.entries(components)) {
      dataVueFile += `<t-input-${valueComponent.type} `;

      for (const [keyProperties, valueProperties] of Object.entries(valueComponent)) {
        if (Array.isArray(valueProperties)) {
          hasArray = true;

          dataVueFile += `:${keyProperties}="${keyComponent}Options" `;

          dataValues[`${keyComponent}Options`] = '[';

          valueProperties.forEach((item) => {
            dataValues[`${keyComponent}Options`] += `'${item}', `;
          });

          dataValues[`${keyComponent}Options`] = dataValues[`${keyComponent}Options`].replace(
            /,\s*$/,
            ''
          );
          dataValues[`${keyComponent}Options`] += `] `;
        } else {
          dataVueFile += `${keyProperties}="${valueProperties}" `;
        }
      }

      dataVueFile += `></t-input-${valueComponent.type}>`;
    }

    dataVueFile += '</div></template>';

    name = name[0].toUpperCase() + name.substr(1) + 'Form';

    dataVueFile += `<script>export default { name: "${name}Form", `;

    if (hasArray) {
      dataVueFile += 'data() { return {';
      for (const [key, value] of Object.entries(dataValues)) {
        dataVueFile += `${key}: ${value}, `;
      }
      dataVueFile += '}}';
    }

    dataVueFile += '}</script>';

    writeFileSync(`./src/vues/${name}.vue`, dataVueFile);

    await exec('prettier --write ./src/vues');

    const vueData = readFileSync(`./src/vues/${name}.vue`);

    console.log(`\nArquivo criado com sucesso - ${name}.vue`);
    console.log('-------------------------------------------\n');
    console.log(vueData.toString());
    console.log('-------------------------------------------\n');
  } catch (e) {
    console.log(e);
  }
}

main();