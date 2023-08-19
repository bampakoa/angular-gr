const { copySync, mkdirSync, readdir, rmSync } = require('fs-extra');
const { join, resolve } = require('path');
const { spawn } = require('child_process');

const buildPath = resolve('.', 'dist', 'bin', 'aio', 'build');
const ioPath = resolve('.', 'aio');
const ioDistPath = join(ioPath, 'dist');

// build is done by the aio folder
process.chdir(ioPath);
const build = spawn('yarn.cmd', ['build-prod'], { stdio: 'inherit' });

build.on('exit', () => {
  // recreate the dist path in case it exists already
  rmSync(ioDistPath, { force: true, recursive: true });
  mkdirSync(ioDistPath);

  readdir(buildPath, (_, entries) => {
    for(entry of entries) {
      copySync(join(buildPath, entry), join(ioDistPath, entry));
    }

    // deployment is done by the root folder
    process.chdir(resolve('.'));
    spawn('firebase.cmd', ['deploy', '--only', 'hosting'], { stdio: 'inherit' });
  });
});
