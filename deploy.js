const fs = require('fs-extra');
const path = require('path');
const { spawn } = require('child_process');

const buildPath = path.resolve('.', 'dist/bin/aio/build');
const angularIoPath = path.resolve('.', 'aio');
const angularIoDistPath = path.resolve(angularIoPath, 'dist');

process.chdir(angularIoPath);
const build = spawn('yarn.cmd', ['build-prod'], { stdio: 'inherit' });
build.on('exit', () => {
  // recreate the dist path needed by the firebase configuration
  fs.removeSync(angularIoDistPath);
  fs.mkdirSync(angularIoDistPath);

  fs.readdir(buildPath, (_, entries) => {
    for(entry of entries) {
      fs.copySync(path.join(buildPath, entry), path.join(angularIoDistPath, entry));
    }

    // deployment is done by the root folder
    process.chdir(path.resolve('.'));
    spawn('firebase.cmd', ['deploy', '--only', 'hosting'], { stdio: 'inherit' });
  });
});
