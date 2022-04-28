# Τι είναι η Angular?

Αυτό το θέμα μπορεί να σας βοηθήσει να κατανοήσετε την Angular: τι είναι η Angular, ποια πλεονεκτήματα παρέχει και τι μπορείτε να περιμένετε καθώς ξεκινάτε να δημιουργείτε τις εφαρμογές σας.

Η Angular είναι μια πλατφόρμα ανάπτυξης, που βασίζεται στην [TypeScript](https://www.typescriptlang.org/). Ως πλατφόρμα, η Angular περιλαμβάνει:

* Ένα framework βασισμένο σε components για την δημιουργία επεκτάσιμων διαδικτυακών εφαρμογών
* Μια συλλογή από ενσωματωμένες βιβλιοθήκες που καλύπτουν μια μεγάλη ποικιλία λειτουργιών, όπως η δρομολόγηση, η διαχείριση φορμών, η επικοινωνία πελάτη - διακομιστή, και άλλα
* Μια σουίτα εργαλείων ανάπτυξης που θα σας βοηθήσουν να αναπτύξετε, να δημιουργήσετε, να δοκιμάσετε, και να ενημερώσετε τον κώδικά σας

Με την Angular, εκμεταλλεύεστε μια πλατφόρμα που μπορεί να επεκταθεί από απλά προσωπικά projects μέχρι εφαρμογές σε επίπεδο επιχειρήσεων. Η Angular έχει σχεδιαστεί για να κάνει την ενημέρωση όσο το δυνατόν πιο απλή, επομένως επωφεληθείτε από τις τελευταίες εξελίξεις με ελάχιστη προσπάθεια. Το καλύτερο όλων είναι ότι το οικοσύστημα του Angular αποτελείται από μια ομάδα με πάνω από 1,7 εκατομμύρια προγραμματιστές, δημιουργούς βιβλιοθηκών, και άλλου περιεχομένου.

<div class="alert is-helpful">

Δείτε το <live-example name="what-is-angular"></live-example> για ένα παράδειγμα που περιέχει τα αποσπάσματα κώδικα αυτού του οδηγού.

</div>

{@a essentials}
## Εφαρμογές Angular: Τα βασικά

Αυτή η ενότητα εξηγεί τις βασικές ιδέες πίσω από την Angular. Η κατανόηση αυτών των ιδεών μπορεί να σας βοηθήσει να σχεδιάσετε και να δημιουργήσετε τις εφαρμογές σας πιο αποτελεσματικά.

{@a components}
### Components

Τα components αποτελούν τα δομικά στοιχεία που συνθέτουν μια εφαρμογή. Ένα component περιλαμβάνει ένα class TypeScript με ένα decorator `@Component()`, ένα template HTML, και στυλ. To decorator `@Component()` καθορίζει τις παρακάτω πληροφορίες που σχετίζονται με την Angular:

* Ένα selector CSS που ορίζει πως χρησιμοποιείται το component σε ένα template. Τα στοιχεία HTML στο template που ταιριάζουν με αυτό το selector μετατρέπονται σε οντότητες του component.
* Ένα template HTML που καθοδηγεί την Angular πως να εμφανίσει το component.
* Ένα προαιρετικό σύνολο από στυλ CSS που καθορίζει την εμφάνιση των στοιχείων HTML του template.

Το παρακάτω είναι ένα απλό component του Angular.

<code-example
  path="what-is-angular/src/app/hello-world/hello-world.component.ts"></code-example>

Για να χρησιμοποιήσετε αυτό το component, γράψτε τα ακόλουθα σε ένα template:

<code-example path="what-is-angular/src/app/app.component.html" region="hello-world-selector"></code-example>

Όταν η Angular φορτώσει αυτό το component, το DOM που προκύπτει μοιάζει με αυτό:

<code-example path="what-is-angular/src/app/hello-world-example.html" language="html"></code-example>

Η χρήση των components στην Angular προσφέρει ισχυρό encapsulation και μια διαισθητική δομή της εφαρμογής. Τα components επίσης βοηθάνε στην εύκολη διενέργεια unit test για την εφαρμογή σας και μπορούν να βελτιώσουν τη συνολική αναγνωσιμότητα του κώδικά σας.

Για περισσότερες πληροφορίες σχετικά με το τι μπορείτε να κάνετε με τα components, ανατρέξτε στην ενότητα [Components](guide/component-overview).

{@a templates}
### Templates

Κάθε component έχει ένα template HTML που ορίζει πως εμφανίζεται αυτό το component. Μπορείτε να ορίσετε αυτό το template είτε ενσωματωμένο στον κώδικα είτε χρησιμοποιώντας μια διαδρομή αρχείου.

Η Angular επεκτείνει το HTML με πρόσθετη σύνταξη που σας επιτρέπει να εισάγετε δυναμικές τιμές από το component σας. Η Angular ενημερώνει αυτόματα το DOM όταν αλλάζει η κατάσταση του component σας. Μια εφαρμογή αυτής της δυνατότητας είναι η εισαγωγή δυναμικού κειμένου, όπως φαίνεται στο παρακάτω παράδειγμα.

<code-example path="what-is-angular/src/app/hello-world-interpolation/hello-world-interpolation.component.html" region="say-hello"></code-example>

Η τιμή του message προέρχεται από το class του component:

<code-example path="what-is-angular/src/app/hello-world-interpolation/hello-world-interpolation.component.ts"></code-example>

Όταν η εφαρμογή φορτώνει το component και το template, ο χρήστης βλέπει τα εξής:

<code-example language="html">
&lt;p&gt;Hello, World!&lt;/p&gt;
</code-example>

Παρατηρήστε την χρήση των διπλών αγκύλων--δίνουν εντολή στην Angular να παρεμβάλει το περιεχόμενό ανάμεσά τους.

Η Angular υποστηρίζει επίσης property bindings, για να σας βοηθήσει να ορίσετε τιμές για properties και attributes στοιχείων HTML καθώς και να περάσετε τιμές στην λογική παρουσίασης της εφαρμογής.

<code-example path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.html" region="bindings"></code-example>

Παρατηρήστε την χρήση των τετράγωνων αγκύλων--αυτή η σύνταξη υποδεικνύει ότι συνδέετε ένα property ή attribute σε μια τιμή του class του component.

Δηλώστε event listeners για να ανταποκρίνεστε σε ενέργειες του χρήστη όπως πληκτρολόγηση, κινήσεις του ποντικιού, κλικ και αγγίγματα. Δηλώνετε ένα event listener καθορίζοντας το όνομα του event σε παρένθεση:

<code-example path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.html" region="event-binding"></code-example>

Το προηγούμενο παράδειγμα καλεί μια μέθοδο, που ορίζεται στο class του component:

<code-example path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.ts" region="method"></code-example>

Το παρακάτω είναι ένα συνδυασμένο παράδειγμα Interpolation, Property Binding και Event Binding σε ένα template του Angular:

<code-tabs linenums="true">
  <code-pane
    header="hello-world-bindings.component.ts"
    path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.ts">
  </code-pane>
  <code-pane
    header="hello-world-bindings.component.html"
    path="what-is-angular/src/app/hello-world-bindings/hello-world-bindings.component.html"
    linenums="false">
  </code-pane>
</code-tabs>

Προσθέστε επιπλέον λειτουργικότητα στα templates σας με την χρήση των [directives](guide/built-in-directives). Τα πιο διαδεδομένα directives στην Angular είναι το `*ngIf` και `*ngFor`. Χρησιμοποιείστε directives για να εκτελέσετε μια ποικιλία εργασιών, όπως η δυναμική τροποποίηση της δομής του DOM. Και δημιουργήστε τα δικά σας προσαρμοσμένα directives για να δημιουργήσετε εξαιρετικές εμπειρίες χρήστη.

Ο παρακάτω κώδικας είναι ένα παράδειγμα του directive `*ngIf`.

<code-tabs linenums="true">
  <code-pane
    header="hello-world-ngif.component.ts"
    path="what-is-angular/src/app/hello-world-ngif/hello-world-ngif.component.ts">
  </code-pane>
  <code-pane
    header="hello-world-ngif.component.html"
    path="what-is-angular/src/app/hello-world-ngif/hello-world-ngif.component.html"
    linenums="false">
  </code-pane>
</code-tabs>

Τα templates του Angular σας επιτρέπουν να διαχωρίσετε ξεκάθαρα την λογική της εφαρμογής σας από την παρουσίασή της. Τα templates βασίζονται σε τυπικό HTML, για ευκολία στην κατασκευή, τη συντήρηση και την ενημέρωση.

Για περισσότερες πληροφορίες σχετικά με τα templates, ανατρέξτε στην ενότητα [Templates](guide/template-syntax).

{@a di}
### Dependency injection

Το dependency injection σας επιτρέπει να δηλώνετε τις εξαρτήσεις των classes TypeScript χωρίς να φροντίζετε για την δημιουργία τους. Αντίθετα, η Angular χειρίζεται την δημιουργία για εσάς. Αυτό το μοτίβο σχεδίασης σας επιτρέπει να γράφετε πιο ελεγχόμενο και ευέλικτο κώδικα. Παρόλο που η κατανόηση του dependency injection δεν είναι αναγκαία για να ξεκινήσετε να χρησιμοποιείτε την Angular, το συνιστούμε ανεπιφύλακτα ως βέλτιστη πρακτική και πολλές πτυχές του Angular το εκμεταλλεύονται αυτό σε κάποιο βαθμό.

Για να δείξουμε πως λειτουργεί το dependency injection, θεωρούμε το παρακάτω παράδειγμα. Το πρώτο αρχείο, `logger.service.ts`, ορίζει ένα class `Logger` το οποίο περιέχει την συνάρτηση `writeCount` που καταγράφει έναν αριθμό στο console.

<code-example path="what-is-angular/src/app/logger.service.ts"></code-example>

Στη συνέχεια, το αρχείο `hello-world-di.component.ts` ορίζει ένα component του Angular. Αυτό το component περιέχει ένα πλήκτρο που χρησιμοποιεί την συνάρτηση `writeCount` από το class Logger. Για να αποκτήσουμε πρόσβαση σε αυτήν την συνάρτηση, το service `Logger` εισάγεται μέσα στο class `HelloWorldDI` προσθέτοντας το `private logger: Logger` στο constructor.

<code-example path="what-is-angular/src/app/hello-world-di/hello-world-di.component.ts"></code-example>

Για περισσότερες πληροφορίες σχετικά με το dependency injection και την Angular, ανατρέξτε στην ενότητα [Dependency injection in Angular](guide/dependency-injection).

{@a cli}

## Angular CLI

Το Angular CLI είναι ο πιο απλός, γρήγορος και συνιστώμενος τρόπος για την ανάπτυξη εφαρμογών Angular. Το Angular CLI διευκολύνει μια σειρά απο εργασίες. Παρακάτω είναι μερικά παραδείγματα:

<table>
<tr>
<td><a href="cli/build">ng build</a></td>
<td>Μεταγλωττίζει μια εφαρμογή Angular και εξάγει τα παραγόμενα αρχεία σε έναν φάκελο.</td>
</tr>
<tr>
<td><a href="cli/serve">ng serve</a></td>
<td>Δημιουργεί και φορτώνει την εφαρμογή σας, παρακολουθώντας τα αρχεία για τυχόν αλλαγές.</td>
</tr>
<tr>
<td><a href="cli/generate">ng generate</a></td>
<td>Δημιουργεί ή τροποποιεί αρχεία με βάση μια εντολή schematic.</td>
</tr>
<tr>
<td><a href="cli/test">ng test</a></td>
<td>Εκτελεί τα unit tests σε ένα συγκεκριμένο project.</td>
</tr>
<tr>
<td><a href="cli/e2e">ng e2e</a></td>
<td>Δημιουργεί και φορτώνει μια εφαρμογή Angular και, στη συνέχεια, εκτελεί τα end-to-end tests.</td>
</tr>
</table>

Θα δείτε ότι το Angular CLI είναι ένα πολύτιμο εργαλείο για να δημιουργείτε τις εφαρμογές σας.

Για περισσότερες πληροφορίες σχετικά με το Angular CLI, ανατρέξτε στην ενότητα [CLI Reference](/cli).

{@a 1p-libraries}
## Bιβλιοθήκες

Η ενότητα, [Εφαρμογές Angular: Τα βασικά](#essentials), παρέχει μια σύντομη επισκόπηση μερικών από τα βασικά αρχιτεκτονικά στοιχεία που θα χρησιμοποιήσετε κατά την κατασκευή εφαρμογών Angular. Αλλά τα πολλά οφέλη του Angular γίνονται πραγματικά εμφανή όταν η εφαρμογή σας μεγαλώνει και θέλετε να προσθέσετε πρόσθετες λειτουργίες, όπως η πλοήγηση ή η εισαγωγή δεδομένων από τον χρήστη. Χρησιμοποιήστε την πλατφόρμα Angular για να ενσωματώσετε μία από τις πολλές βιβλιοθήκες που παρέχει.

Μερικές απο τις διαθέσιμες βιβλιοθήκες περιλαμβάνουν:
<table>
<tr>
<td><a href="guide/router">Angular Router</a></td>
<td>Προηγμένη πλοήγηση και δρομολόγηση στον client που βασίζεται στα components του Angular. Υποστηρίζει lazy-loading, nested routes, προσαρμοσμένη αντιστοίχιση διαδρομής και πολλά άλλα.</td>
</tr>
<tr>
<td><a href="guide/forms-overview">Angular Forms</td>
<td>Ενιαίο σύστημα για δημιουργία και επικύρωση φορμών.</td>
<tr>
<td><a href="guide/http">Angular HttpClient</a></td>
<td>Πρόγραμμα HTTP που μπορεί να χρησημοποιηθεί ακόμα και στα πιο προηγμένα συστήματα επικοινωνίας πελάτη-διακομιστή.</td>
</tr>
<tr>
<td><a href="guide/animations">Angular Animations</a></td>
<td>Σύστημα για την χρήση κινούμενων εικόνων που βασίζονται στην κατάσταση της εφαρμογής.</td>
</tr>
<tr>
<td><a href="guide/service-worker-intro">Angular PWA</a>
<td>Εργαλεία για την δημιουργία Progressive Web Applications (PWAs) συμπεριλαμβανομένου ενός service worker και ενός Web app manifest.</td>
</tr>
<tr>
<td><a href="guide/schematics">Angular Schematics</td>
<td>Αυτοματοποιημένα εργαλεία για την δημιουργία, ανακατασκευή, και ενημέρωση που απλοποιούν την ανάπτυξη σε μεγάλη κλίμακα.</td>
</tr>
</table>

Αυτές οι βιβλιοθήκες επεκτείνουν τη λειτουργικότητα της εφαρμογής σας, ενώ σας επιτρέπουν επίσης να εστιάσετε περισσότερο στις δυνατότητες που κάνουν την εφαρμογή σας μοναδική. Προσθέστε αυτές τις βιβλιοθήκες γνωρίζοντας ότι έχουν σχεδιαστεί για να ενσωματώνονται απρόσκοπτα και να ενημερώνονται ταυτόχρονα με το Angular framework.

Αυτές οι βιβλιοθήκες απαιτούνται μόνο εάν και όταν μπορούν να σας βοηθήσουν να προσθέσετε λειτουργικότητα στις εφαρμογές σας ή να λύσετε ένα συγκεκριμένο πρόβλημα.

## Επόμενα βήματα

Αυτό το θέμα έχει σκοπό να σας δώσει μια σύντομη επισκόπηση του τι είναι η Angular, τα πλεονεκτήματα που παρέχει και τι να περιμένετε καθώς ξεκινάτε να δημιουργείτε τις εφαρμογές σας.

Για να δείτε την Angular σε δράση, ανατρέξτε στο σεμινάριό μας [Πως να ξεκινήσετε](start). Αυτό το σεμινάριο χρησιμοποιεί το [stackblitz.com](https://stackblitz.com/), για να εξερευνήσετε ένα παράδειγμα του Angular χωρίς απαιτήσεις εγκατάστασης.

Για να εξερευνήσετε περαιτέρω τις δυνατότητες του Angular, συνιστούμε να διαβάσετε τις ενότητες, Κατανόηση του Angular και Οδηγίες Προγραμματιστή.

@reviewed 2022-04-21
