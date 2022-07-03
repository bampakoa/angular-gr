const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const angularGrPath = path.resolve('.');
const angularPath = path.resolve('..', 'angular');
const angularVersion = process.argv.slice(2);

if (angularVersion.length === 0) {
  throw 'Angular version was not specified!'
}

fs.readdir(angularGrPath, (_, entries) => {
  for(entry of entries) {
    if (!['.git', 'upgrade.js', '.github', 'node_modules'].includes(entry)) {
      fs.rmSync(path.join(angularGrPath, entry), { recursive: true, force: true });
    }
  }
});

process.chdir(angularPath);
exec(`git checkout ${angularVersion}`);

fs.readdir(angularPath, (_, entries) => {
  for(entry of entries) {
    if (!['.git', '.github', '.circleci', '.devcontainer', '.husky', '.ng-dev', '.pullapprove.yml', '.gitmessage'].includes(entry)) {
      fs.copy(entry, path.join(angularGrPath, entry));
    }
  }
});
