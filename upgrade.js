const { copySync, readdir, rmSync } = require('fs-extra');
const { join, resolve } = require('path');
const { exec } = require('child_process');

// Το script προϋποθέτει ότι τα αποθετήρια angular και aio-translations είναι στο ίδιο επίπεδο με το angular-gr
const angularGrPath = resolve('.');
const angularGrIoPath = join(angularGrPath, 'aio');
const angularPath = resolve('..', 'angular');
const angularIoPath = join(angularPath, 'aio');
const translationsPath = resolve('..', 'aio-translations');

const angularVersion = process.argv.slice(2);

const angularGrBlacklist = ['.git', 'upgrade.js', '.github', 'node_modules', 'restore.js', 'deploy.js', 'aio'];
const angularBlacklist = ['.git', '.github', '.circleci', '.devcontainer', '.husky', '.pullapprove.yml', '.gitmessage'];
const gitBlacklist = ['.git', '.gitignore'];

// Το script περιμένει πάντα μια έκδοση της Angular σαν παράμετρο.
if (angularVersion.length === 0) {
  throw 'Angular version was not specified!'
}

// Βήμα 1: Αφαιρούμε τα περιεχόμενα του angular-gr
readdir(angularGrPath, (_, entries) => {
  for(entry of entries) {
    if (!angularGrBlacklist.includes(entry)) {
      rmSync(join(angularGrPath, entry), { recursive: true, force: true });
    }
  }
});

// Βήμα 2: Αφαιρούμε τα περιεχόμενα του aio
readdir(angularGrIoPath, (_, entries) => {
  for(entry of entries) {
    if (entry !== 'node_modules') {
      rmSync(join(angularGrIoPath, entry), { recursive: true, force: true });
    }
  }
});

// Βήμα 3: Μεταβαίνουμε στον φάκελο που περιέχει το αποθετήριο της Angular, κάνουμε fetch για να πάρουμε τα τελευταία tags
// και μετά κάνουμε checkout την έκδοση που έρχεται από την παράμετρο του script
process.chdir(angularPath);
exec(`git fetch --all && git checkout ${angularVersion}`);

// Βήμα 4: Αντιγράφουμε τα περιεχόμενα από το angular στο angular-gr για να πάρουμε τις αλλαγές της ζητούμενης έκδοσης
readdir(angularPath, (_, entries) => {
  for(entry of entries) {
    if (!angularBlacklist.includes(entry)) {
      copySync(join(angularPath, entry), join(angularGrPath, entry));
    }
  }
});

// Βήμα 5: Αφαιρούμε τα περιεχόμενα του aio-translations
readdir(translationsPath, (_, entries) => {
  for(entry of entries) {
    if (!gitBlacklist.includes(entry)) {
      rmSync(join(translationsPath, entry), { recursive: true, force: true });
    }
  }
});

// Βήμα 6: Αντιγράφουμε τα περιεχόμενα από το angular στο aio-translations για να δούμε αν έχει αλλάξει κάτι σε ήδη μεταφρασμένο περιεχόμενο
readdir(angularIoPath, (_, entries) => {
  for(entry of entries) {
    if (!gitBlacklist.includes(entry)) {
      copySync(join(angularIoPath, entry), join(translationsPath, entry));
    }
  }
});
