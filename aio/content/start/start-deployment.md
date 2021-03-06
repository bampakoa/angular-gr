# Κάντε deploy μια εφαρμογή

Το deployment της εφαρμογής σας είναι η διαδικασία μεταγλώττισης ή δημιουργίας του κώδικα και η μεταφορά του JavaScript, του CSS και του HTML σε έναν διακομιστή του διαδικτύου.

Αυτή η ενότητα βασίζεται στα προηγούμενα βήματα του σεμιναρίου [Πως να ξεκινήσετε](start "Δοκιμάστε το: Μια βασική εφαρμογή") και σας δείχνει πώς να κάνετε deploy την εφαρμογή σας.

## Προαπαιτούμενα

Μια καλή πρακτική είναι να τρέξετε το project σας τοπικά πριν το κάνετε deploy. Για να τρέξετε το project σας τοπικά, χρειάζεστε τα ακόλουθα εγκατεστημένα στον υπολογιστή σας:

*   [Node.js](https://nodejs.org/en/).
*   Το [Angular CLI](https://cli.angular.io/).
    Από το terminal, εγκαταστήστε το Angular CLI στον υπολογιστή σας με την εντολή:

    <code-example format="shell" language="shell">

    npm install -g &commat;angular/cli

    </code-example>

    Με το Angular CLI, μπορείτε να χρησιμοποιήσετε την εντολή `ng` για να δημιουργήσετε νέους χώρους εργασίας, νέα projects, να τρέξετε την εφαρμογή σας κατά την ανάπτυξη, ή να δημιουργήσετε εκδόσεις για κοινή χρήση ή διανομή.

## Εκτέλεση της εφαρμογής σας τοπικά

1.  Κατεβάστε τον πηγαίο κώδικα από το project του StackBlitz πατώντας στο εικονίδιο `Download Project` στο αριστερό μενού, απέναντι από το `Project`, για να κάνετε λήψη του project σας ως συμπιεσμένο αρχείο.

    <div class="lightbox">

    <img src="generated/images/guide/start/download-project.png" alt="Κατεβάστε το project του stackblitz">
    
    </div>

1.  Αποσυμπιέστε το αρχείο και μεταβείτε στον φάκελο του project που δημιουργήθηκε. Για παράδειγμα:

    <code-example format="shell" language="shell">

    cd angular-ynqttp

    </code-example>

1.  Για λήψη και εγκατάσταση πακέτων npm, χρησιμοποιήστε την ακόλουθη εντολή του npm CLI:

    <code-example format="shell" language="shell">

    npm install

    </code-example>

1.  Χρησιμοποιήστε την ακόλουθη εντολή CLI για να εκτελέσετε την εφαρμογή σας τοπικά:

    <code-example format="shell" language="shell">

    ng serve

    </code-example>

1.  Για να δείτε την εφαρμογή σας στο πρόγραμμα περιήγησης, μεταβείτε στο http://localhost:4200/.
    Εάν η προεπιλεγμένη θύρα 4200 δεν είναι διαθέσιμη, μπορείτε να καθορίσετε μια άλλη θύρα με την επιλογή port όπως στο ακόλουθο παράδειγμα:

    <code-example format="shell" language="shell">

    ng serve --port 4201

    </code-example>

    Κατά την προβολή της εφαρμογής σας, μπορείτε να επεξεργαστείτε τον κώδικά σας και να δείτε τις αλλαγές να ενημερώνονται αυτόματα στο πρόγραμμα περιήγησης.
    Για να διακόψετε την εντολή `ng serve`, πατήστε `Ctrl`+`c`.

<a id="building"></a>

## Building και hosting της εφαρμογής σας

 1. Για να προετοιμάσετε την εφαρμογή σας σε περιβάλλον παραγωγής, χρησιμοποιήστε την εντολή `build`. Από προεπιλογή, αυτή η εντολή χρησιμοποιεί την παραμετροποίηση `production` του build.

    <code-example format="shell" language="shell">

    ng build

    </code-example>

    Αυτή η εντολή δημιουργεί έναν φάκελο `dist` στον κεντρικό φάκελο της εφαρμογής με όλα τα αρχεία που χρειάζεται μια υπηρεσία hosting για να τρέξει την εφαρμογή σας.

    <div class="alert is-helpful">

    Εάν η παραπάνω εντολή `ng build` εμφανίσει σφάλμα σχετικά με πακέτα που λείπουν, προσθέστε τα πακέτα που λείπουν στο αρχείο `package.json` του τοπικού σας project ώστε να ταιριάζουν με αυτό που κατεβάσατε από το StackBlitz.

    </div>

1.  Αντιγράψτε τα περιεχόμενα του φακέλου `dist/my-project-name` στον διακομιστή σας.
    Επειδή αυτά τα αρχεία είναι στατικά, μπορείτε να τα μεταφέρετε σε οποιονδήποτε διακομιστή που μπορεί να αναγνωρίσει αρχεία όπως `Node.js`, Java, .NET, ή οποιοδήποτε backend όπως το [Firebase](https://firebase.google.com/docs/hosting), το [Google Cloud](https://cloud.google.com/solutions/web-hosting), ή το [App Engine](https://cloud.google.com/appengine/docs/standard/python/getting-started/hosting-a-static-website).
    Για περισσότερες πληροφορίες, ανατρέξτε στο θέμα [Δημιουργία & εκτέλεση](guide/build "Δημιουργία & εκτέλεσ εφαρμογών Angular") και [Deployment](guide/deployment "Οδηγός deployment").

## Στην συνέχεια

Σε αυτό το σεμινάριο, έχετε θέσει τα θεμέλια για να εξερευνήσετε τον κόσμο της Angular σε τομείς όπως η ανάπτυξη mobile εφαρμογών, η ανάπτυξη UX/UI, και η φόρτωση web εφαρμογών από την μεριά του server.
Μπορείτε να εμβαθύνετε μελετώντας περισσότερα από τα χαρακτηριστικά της Angular, αλληλεπιδρώντας με τη ζωντανή κοινότητα και εξερευνώντας το οικοσύστημα.

### Μάθετε περισσότερο Angular

Για ένα πιο αναλυτικό σεμινάριο που θα σας βοηθήσει στη δημιουργία μιας εφαρμογής τοπικά και στην εξερεύνηση πολλών από τις πιο δημοφιλείς λειτουργίες της Angular, ανατρέξτε στο [Tour of Heroes](tutorial).

Για να εξερευνήσετε τις θεμελιώδεις έννοιες της Angular, ανατρέξτε στους οδηγούς στην ενότητα Κατανόηση της Angular όπως [επισκόπηση των components της Angular](guide/component-overview) ή [Σύνταξη του template](guide/template-syntax).

### Συμμετοχή στην κοινότητα

[Πείτε στο Twitter ότι ολοκληρώσατε αυτό το σεμινάριο](https://twitter.com/intent/tweet?url=https://angular.io/start&text=I%20just%20finished%20the%20Angular%20Getting%20Started%20Tutorial "Η Angular στο Twitter"), πείτε μας τη γνώμη σας ή υποβάλλετε [Προτάσεις για μελλοντικές εκδόσεις](https://github.com/angular/angular/issues/new/choose "Φόρμα καταχώρησης νέου issue στο GitHub αποθετήριο της Angular").

Μείνετε ενημερωμένοι ακολουθώντας το [ιστολόγιο της Angular](https://blog.angular.io/ "Το ιστολόγιο της Angular").

### Εξερευνώντας το οικοσύστημα της Angular

Για να υποστηρίξετε την ανάπτυξη σας UX/UI, ανατρέξτε στο [Angular Material](https://material.angular.io/ "Ο ιστότοπος του Angular Material").

Η κοινότητα Angular διαθέτει επίσης ένα εκτεταμένο [δίκτυο εργαλείων και βιβλιοθηκών τρίτων](resources "Λίστα πόρων της Angular").

@reviewed 2022-05-21
