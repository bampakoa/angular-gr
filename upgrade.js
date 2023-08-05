const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const angularGrPath = path.resolve('.');
const angularPath = path.resolve('..', 'angular');
const angularIoPath = path.resolve('..', 'angular', 'aio');
const translationsPath = path.resolve('..', 'aio-translations');
const angularVersion = process.argv.slice(2);

// Το script περιμένει πάντα μια έκδοση της Angular σαν παράμετρο διαφορετικά επιστρέφει σφάλμα.
if (angularVersion.length === 0) {
  throw 'Angular version was not specified!'
}

// Αφαιρούμε τα περιεχόμενα του angular-gr
fs.readdir(angularGrPath, (_, entries) => {
  for(entry of entries) {
    if (!['.git', 'upgrade.js', '.github', 'node_modules'].includes(entry)) {
      fs.rmSync(path.join(angularGrPath, entry), { recursive: true, force: true });
    }
  }
});

// Μεταβαίνουμε στον φάκελο που περιέχει το αποθετήριο της Angular, κάνουμε fetch για να πάρουμε τα τελευταία tags
// και μετά κάνουμε checkout την έκδοση που έρχεται από την παράμετρο του script
process.chdir(angularPath);
exec(`git fetch --all && git checkout ${angularVersion}`);

// Αντιγράφουμε τα περιεχόμενα από το angular στο angular-gr για να πάρουμε τις αλλαγές της ζητούμενης έκδοσης
fs.readdir(angularPath, (_, entries) => {
  for(entry of entries) {
    if (!['.git', '.github', '.circleci', '.devcontainer', '.husky', '.pullapprove.yml', '.gitmessage'].includes(entry)) {
      fs.copy(path.join(angularPath, entry), path.join(angularGrPath, entry));
    }
  }
});

// Αφαιρούμε τα περιεχόμενα του aio-translations
fs.readdir(translationsPath, (_, entries) => {
  for(entry of entries) {
    if (!['.git', '.gitignore'].includes(entry)) {
      fs.rmSync(path.join(translationsPath, entry), { recursive: true, force: true });
    }
  }
});

// Αντιγράφουμε τα περιεχόμενα από το angular στο aio-translations για να δούμε αν έχει αλλάξει κάτι σε ήδη μεταφρασμένο περιεχόμενο
fs.readdir(angularIoPath, (_, entries) => {
  for(entry of entries) {
    if (!['.git', '.gitignore'].includes(entry)) {
      fs.copy(path.join(angularIoPath, entry), path.join(translationsPath, entry));
    }
  }
});
