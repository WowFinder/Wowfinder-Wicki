const fs = require('fs');

const directoryPath = './src';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const filePath = `${directoryPath}/${file}`;

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }

      if (stats.isDirectory()) {
        readDirectory(filePath);
      } else {
        printTodo(filePath);
      }
    });
  });
});

function readDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const filePath = `${directoryPath}/${file}`;

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        if (stats.isDirectory()) {
          readDirectory(filePath);
        } else {
          printTodo(filePath);
        }
      });
    });
  });
}

function printTodo(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const regex = /\/\/\s*TODO\s*:\s*(.*)/g;
    const matches = data.match(regex);

    if (matches) {
      console.log(`\n${filePath}`);
      matches.forEach((match) => {
        console.log(`  ${match}`);
      });
    }
  });
}