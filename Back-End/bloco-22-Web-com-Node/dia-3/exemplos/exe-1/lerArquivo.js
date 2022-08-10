const fs = require('fs').promises;

async function lerArquivo(filename){
  try {
    const content = await fs.readFile(filename, 'utf-8');
    return content;
  } catch (error) {
    return null;
  }
};

module.exports = {
  lerArquivo
}
