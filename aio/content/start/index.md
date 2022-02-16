# Ξεκινώντας με το Angular

Καλώς ήρθατε στο Angular!

Αυτό το σεμινάριο σας εισάγει στα βασικά του Angular καθοδηγώντας σας στη δημιουργία μιας εφαρμογής ηλεκτρονικού εμπορίου με έναν κατάλογο, καλάθι αγορών και φόρμα ολοκλήρωσης αγοράς.

Για να σας βοηθήσουμε να ξεκινήσετε αμέσως, αυτό το σεμινάριο χρησιμοποιεί μια έτοιμη εφαρμογή που μπορείτε να δείτε και να τροποποιήσετε διαδραστικά στο [StackBlitz](https://stackblitz.com/)&mdash;χωρίς να χρειάζεται να [ρυθμίσετε ένα τοπικό περιβάλλον εργασίας](guide/setup-local "Setup guide").
Το StackBlitz είναι ένα περιβάλλον ανάπτυξης στον browser στο οποίο μπορείτε να δημιουργήσετε, να αποθηκεύσετε και να μοιραστείτε projects χρησιμοποιώντας μια ποικιλία τεχνολογιών.

## Προαπαιτούμενα

Για να αξιοποιήσετε στο έπακρο αυτό το σεμινάριο, θα πρέπει να έχετε ήδη μια βασική κατανόηση των παρακάτω.

* [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML "Learning HTML: Guides and tutorials")
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JavaScript")
* [TypeScript](https://www.typescriptlang.org/ "The TypeScript language")


{@a components}
## Κάντε μια περιήγηση στο παράδειγμα εφαρμογής

Δημιουργείτε εφαρμογές Angular με components.
Τα components ορίζουν τομείς ευθύνης στο UI που σας επιτρέπουν να επαναχρησιμοποιήσετε σετ από λειτουργίες του UI.

Ένα component αποτελείται από τρία πράγματα:

* **Ένα component class** που χειρίζεται δεδομένα και λειτουργικότητα.
* **Ένα HTML template** που καθορίζει το UI.
* **Στυλ για το συγκεκριμένο component** που καθορίζουν την εμφάνιση και την αίσθηση.

Αυτός ο οδηγός παρουσιάζει την δημιουργία μιας εφαρμογής με τα ακόλουθα components.

* `<app-root>`&mdash;το πρώτο component που φορτώνεται και περιέχει όλα τα άλλα components.
* `<app-top-bar>`&mdash;το όνομα του καταστήματος και το κουμπί ολοκλήρωσης αγοράς.
* `<app-product-list>`&mdash;η λίστα προϊόντων.
* `<app-product-alerts>`&mdash;το component που περιέχει τις ειδοποιήσεις της εφαρμογής.

<div class="lightbox">
  <img src="generated/images/guide/start/app-components.png" alt="Online store with three components">
</div>

Για περισσότερες πληροφορίες σχετικά με τα components, ανατρέξτε στην ενότητα [Εισαγωγή στα Components](guide/architecture-components "Introduction to Components and Templates").


{@a new-project}

## Δημιουργείστε το project

Για να δημιουργήσετε το project, χρησιμοποιήστε το <live-example name="getting-started-v0" noDownload>έτοιμο project στο StackBlitz</live-example>.
Για να αποθηκεύσετε την εργασία σας:

1. Συνδεθείτε στο StackBlitz.
1. Κάντε fork το project που δημιουργήσατε.
1. Αποθηκεύστε περιοδικά.

<div class="lightbox">
  <img src="generated/images/guide/start/fork-the-project.png" alt="Fork the project">
</div>

Στο StackBlitz, το παράθυρο προεπισκόπησης στα δεξιά δείχνει την αρχική κατάσταση του παραδείγματος εφαρμογής.
Η προεπισκόπηση περιλαμβάνει δύο περιοχές:

* μια μπάρα επάνω με το όνομα του καταστήματος, *My Store*, και ένα κουμπί αγοράς
* μια κεφαλίδα για λίστα προϊόντων, *Products*

<div class="lightbox">
  <img src="generated/images/guide/start/new-app-all.gif" alt="Starter online store application">
</div>

Το τμήμα του project στα αριστερά δείχνει τα αρχεία του κώδικα που απαρτίζουν την εφαρμογή, συμπεριλαμβανομένων των αρχείων υποδομής και παραμετροποίησης.

Όταν δημιουργείτε τα παραδείγματα εφαρμογών του StackBlitz που συνοδεύουν τα σεμινάρια, το StackBlitz δημιουργεί τα αρχικά αρχεία και τα εικονικά δεδομένα για εσάς.
Τα αρχεία που χρησιμοποιείτε σε όλο το σεμινάριο βρίσκονται στον φάκελο `src`.

Για περισσότερες πληροφορίες σχετικά με τον τρόπο χρήσης του StackBlitz, ανατρέξτε στις [οδηγίες χρήσης του StackBlitz](https://developer.stackblitz.com/docs/platform/).

{@a product-list}
## Δημιουργήστε τη λίστα προϊόντων

Σε αυτήν την ενότητα, θα ενημερώσετε την εφαρμογή για να εμφανίζει μια λίστα προϊόντων.
Θα χρησιμοποιήσετε προκαθορισμένα δεδομένα για τα προϊόντα από το αρχείο `products.ts` και μεθόδους από το αρχείο `product-list.component.ts`.
Αυτή η ενότητα σάς καθοδηγεί στην επεξεργασία του HTML, γνωστό και ως template.

1. Στον φάκελο `product-list`, ανοίξτε το template αρχείο `product-list.component.html`.

1. Προσθέστε ένα structural directive `*ngFor` σε ένα `<div>`, όπως φαίνεται παρακάτω.

  <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.2.html" region="ngfor">
  </code-example>

  Με το `*ngFor`, το `<div>` επαναλαμβάνεται για κάθε προϊόν στη λίστα.

  Τα structural directives διαμορφώνουν ή αναδιαμορφώνουν τη δομή του DOM, προσθέτοντας, αφαιρώντας και επεξεργάζοντας στοιχεία.
  Για περισσότερες πληροφορίες σχετικά με τα structural directives, δείτε [Structural directives](guide/structural-directives).

1. Μέσα στο `<div>`, προσθέστε ένα `<h3>` και `{{ product.name }}`.
  Η πρόταση `{{ product.name }}` είναι ένα παράδειγμα της σύνταξης του Angular interpolation.
  Το interpolation `{{ }}` σας επιτρέπει να εμφανίσετε την τιμή της ιδιότητας ως κείμενο.

  <code-example path="getting-started/src/app/product-list/product-list.component.2.html" header="src/app/product-list/product-list.component.html" region="interpolation">
</code-example>

  Το παράθυρο προεπισκόπησης ενημερώνεται για να εμφανίσει το όνομα κάθε προϊόντος στη λίστα.

  <div class="lightbox">
    <img src="generated/images/guide/start/template-syntax-product-names.png" alt="Product names added to list">
  </div>

1. Για να κάνετε κάθε όνομα προϊόντος έναν σύνδεσμο προς τις λεπτομέρειες του προϊόντος, προσθέστε το στοιχείο `<a>` γύρω από το `{{ product.name }}`.

1. Ορίστε το όνομα του προϊόντος σαν τίτλο χρησιμοποιώντας την σύνταξη property binding `[ ]`, ως εξής:

    <code-example path="getting-started/src/app/product-list/product-list.component.2.html" header="src/app/product-list/product-list.component.html">
    </code-example>

    Στο παράθυρο προεπισκόπησης, τοποθετήστε το δείκτη του ποντικιού πάνω από ένα όνομα προϊόντος για να δείτε την τιμή της ιδιότητας, που είναι το όνομα του προϊόντος συν τη λέξη "details".
    Το property binding `[ ]` σας επιτρέπει να χρησιμοποιήσετε την τιμή μιας ιδιότητας σε μια έκφραση του template.

    <div class="lightbox">
      <img src="generated/images/guide/start/template-syntax-product-anchor.png" alt="Product name anchor text is product name property">
    </div>

1. Προσθέστε τις περιγραφές προϊόντων. Σε ένα στοιχείο `<p>`, χρησιμοποιήστε ένα directive `*ngIf` έτσι ώστε το Angular να δημιουργεί το στοιχείο `<p>` μόνο εάν το τρέχον προϊόν έχει περιγραφή.

    <code-example path="getting-started/src/app/product-list/product-list.component.3.html" header="src/app/product-list/product-list.component.html">
    </code-example>

    Η εφαρμογή εμφανίζει τώρα το όνομα και την περιγραφή κάθε προϊόντος στη λίστα. 
    Παρατηρήστε ότι το τελικό προϊόν δεν έχει περιγραφή.
    Το Angular δεν δημιουργεί το στοιχείο `<p>` επειδή η περιγραφή του προϊόντος είναι κενή.

    <div class="lightbox">
      <img src="generated/images/guide/start/template-syntax-product-description.png" alt="Product descriptions added to list">
    </div>

1. Προσθέστε ένα κουμπί ώστε οι χρήστες να μπορούν να μοιράζονται ένα προϊόν.
  Συνδέστε το event `click` του πλήκτρου με την μέθοδο `share()` στο `product-list.component.ts`. Το event binding χρησιμοποιεί παρενθέσεις, `( )`, ανάμεσα στο event, όπως το event `(click)` σε ένα στοιχείο  `<button>`.

    <code-example path="getting-started/src/app/product-list/product-list.component.4.html" header="src/app/product-list/product-list.component.html">
    </code-example>

    Το κάθε προϊόν έχει τώρα ένα κουμπί **Share**.

    <div class="lightbox">
      <img src="generated/images/guide/start/template-syntax-product-share-button.png" alt="Share button added for each product">
    </div>

    Πατώντας το κουμπί **Share** εμφανίζεται μια ειδοποίηση που αναφέρει, "The product has been shared!".

    <div class="lightbox">
      <img src="generated/images/guide/start/template-syntax-product-share-alert.png" alt="Alert box indicating product has been shared">
    </div>

Κατά την επεξεργασία του template, έχετε εξερευνήσει μερικές από τις πιο δημοφιλείς δυνατότητες των Angular templates.
Για περισσότερες πληροφορίες, ανατρέξτε στην ενότητα [Εισαγωγή στα components και στα templates](guide/architecture-components#template-syntax "Template Syntax").

{@a passing-data-in}

## Μεταφορά δεδομένων σε ένα child component

Αυτή την στιγμή, η λίστα προϊόντων εμφανίζει το όνομα και την περιγραφή κάθε προϊόντος.
Το `ProductListComponent` επίσης ορίζει μια ιδιότητα `products` που περιέχει εισαγόμενα δεδομένα για κάθε προϊόν από την λίστα `products` στο `products.ts`.

Το επόμενο βήμα είναι να δημιουργήσετε μια νέα δυνατότητα ειδοποίησης που χρησιμοποιεί δεδομένα προϊόντος από το `ProductListComponent`.
Η ειδοποίηση ελέγχει την τιμή του προϊόντος και, εάν η τιμή είναι μεγαλύτερη από 700 $, εμφανίζει ένα κουμπί **Notify Me** που επιτρέπει στους χρήστες να εγγραφούν για ειδοποιήσεις όταν το προϊόν είναι διαθέσιμο.

Αυτή η ενότητα σας καθοδηγεί στη δημιουργία ενός child component, `ProductAlertsComponent` που μπορεί να λάβει δεδομένα από το parent component του, `ProductListComponent`.

1. Κάντε κλικ στο σύμβολο συν πάνω από το τρέχον terminal για να δημιουργήσετε ένα νέο terminal και να εκτελέσετε την εντολή για τη δημιουργία του component.

  <div class="lightbox">
    <img src="generated/images/guide/start/create-new-terminal.png" alt="StackBlitz command to generate component">
  </div>

1. Στο νέο terminal, δημιουργήστε ένα νέο component με το όνομα `product-alerts` εκτελώντας την παρακάτω εντολή.

  ```sh
  ng generate component product-alerts
  ```

  Η προηγούμενη εντολή δημιουργεί αρχικά αρχεία για τα τρία μέρη του component:

    * `product-alerts.component.ts`
    * `product-alerts.component.html`
    * `product-alerts.component.css`

1. Ανοίξτε το `product-alerts.component.ts`.
  Ο decorator `@Component()` υποδεικνύει ότι το ακόλουθο class είναι ένα component.
  Το `@Component()`παρέχει επίσης μεταδεδομένα σχετικά με το component, συμπεριλαμβανομένου του selector, των templates, και των στυλ του.

  <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.1.ts" region="as-generated"></code-example>

  Τα βασικά χαρακτηριστικά στο `@Component()` είναι τα εξής:

    * Ο `selector`, `app-product-alerts`, αναγνωρίζει το component.
      Βάση σύμβασης, οι selectors των Angular component ξεκινούν με το πρόθεμα `app-`, ακολουθούμενο από το όνομα του component.
    * Τα ονόματα αρχείων του template και style αντιστοιχούν στο HTML και CSS του component.
    * Ο ορισμός του `@Component()` επίσης κάνει export το class, `ProductAlertsComponent`, που χειρίζεται τη λειτουργικότητα για το component.

1. Για να ρυθμίσετε το `ProductAlertsComponent` να λαμβάνει δεδομένα προϊόντος, πρώτα κάντε import το `Input` από το `@angular/core`.

  <code-example path="getting-started/src/app/product-alerts/product-alerts.component.1.ts" region="imports" header="src/app/product-alerts/product-alerts.component.ts"></code-example>

1. Στο class `ProductAlertsComponent`, ορίστε μια ιδιότητα με το όνομα `product` χρησιμοποιώντας τον decorator `@Input()`.
  Ο decorator `@Input()` υποδηλώνει ότι η τιμή της ιδιότητας προέρχεται από το parent component, `ProductListComponent`.

  <code-example path="getting-started/src/app/product-alerts/product-alerts.component.1.ts" region="input-decorator" header="src/app/product-alerts/product-alerts.component.ts"></code-example>

1. Ανοίξτε το `product-alerts.component.html` και αντικαταστήστε το στοιχείο παραγράφου με ένα κουμπί **Notify Me** που εμφανίζεται εάν η τιμή του προϊόντος είναι πάνω από 700 $.

  <code-example header="src/app/product-alerts/product-alerts.component.html" path="getting-started/src/app/product-alerts/product-alerts.component.1.html"></code-example>

1. Το `ProductAlertsComponent` προστέθηκε αυτόματα στο `AppModule` για να είναι διαθέσιμο σε άλλα components της εφαρμογής.

  <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="declare-product-alerts"></code-example>

1. Τέλος, για να εμφανίσετε το `ProductAlertsComponent` ως child του `ProductListComponent`, προσθέστε το στοιχείο `<app-product-alerts>` στο `product-list.component.html`.
  Περάστε το τρέχον προϊόν ως input στο component χρησιμοποιώντας property binding.

  <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.5.html" region="app-product-alerts"></code-example>

Το νέο component ειδοποίησης προϊόντος δέχεται ένα προϊόν σαν input από τη λίστα προϊόντων.
Με αυτό το input, εμφανίζεται ή αποκρύπτεται το κουμπί **Notify Me**, με βάση την τιμή του προϊόντος.
Η τιμή του Phone XL είναι πάνω από 700 $, επομένως το κουμπί **Notify Me** εμφανίζεται σε αυτό το προϊόν.

<div class="lightbox">
  <img src="generated/images/guide/start/product-alert-button.png" alt="Product alert button added to products over $700">
</div>

{@a output}

## Μεταφορά δεδομένων σε ένα parent component

Για να λειτουργήσει το κουμπί **Notify Me**, το child component πρέπει να ειδοποιήσει και να διαβιβάσει τα δεδομένα στο parent component.
To `ProductAlertsComponent` πρέπει πρέπει να εκπέμψει ένα event όταν ο χρήστης κάνει κλικ στο **Notify Me** και το `ProductListComponent` πρέπει να ανταποκριθεί στο event.

  <div class="alert is-helpful">

  Σε νέα components, ο Angular Generator περιλαμβάνει έναν κενό `constructor()`, το interface `OnInit`, και την μέθοδο `ngOnInit()`.
  Επειδή αυτά τα βήματα δεν τα χρησιμοποιούν, τα ακόλουθα παραδείγματα κώδικα τα παραλείπουν για συντομία.

  </div>

1. Στο `product-alerts.component.ts`, κάντε import τα `Output` και `EventEmitter` από το `@angular/core`.

  <code-example header="src/app/product-alerts/product-alerts.component.ts" path="getting-started/src/app/product-alerts/product-alerts.component.ts" region="imports"></code-example>

1. Στο component class, ορίστε μια ιδιότητα με το όνομα `notify` χρησιμοποιώντας τον decorator `@Output()` και μια οντότητα `EventEmitter()`.
  Ο ορισμός του `ProductAlertsComponent` με ένα `@Output()` επιτρέπει στο `ProductAlertsComponent` να εκπέμπει ένα event όταν η τιμή της ιδιότητας `notify` αλλάζει.

  <code-example path="getting-started/src/app/product-alerts/product-alerts.component.ts" header="src/app/product-alerts/product-alerts.component.ts" region="input-output"></code-example>

1. Στο `product-alerts.component.html`, ενημερώστε το κουμπί **Notify Me** με ένα event binding που καλεί την μέθοδο `notify.emit()`.

    <code-example header="src/app/product-alerts/product-alerts.component.html" path="getting-started/src/app/product-alerts/product-alerts.component.html"></code-example>

1. Καθορίστε τη συμπεριφορά που συμβαίνει όταν ο χρήστης πατήσει το κουμπί.
  Το parent, `ProductListComponent`&mdash;όχι το `ProductAlertsComponent`&mdash;αντιδρά όταν το child ενεργοποιεί ένα event.
  Στο  `product-list.component.ts`, ορίστε μια μέθοδο `onNotify()`, παρόμοια με την μέθοδο `share()`.

  <code-example header="src/app/product-list/product-list.component.ts" path="getting-started/src/app/product-list/product-list.component.ts" region="on-notify"></code-example>

1. Ενημερώστε το `ProductListComponent` για να λαμβάνει δεδομένα από το `ProductAlertsComponent`.

  Στο `product-list.component.html`, συνδέστε το `<app-product-alerts>` με την μέθοδο `onNotify()` του component της λίστας προϊόντων.
  Το `<app-product-alerts>` είναι αυτό που εμφανίζει το κουμπί **Notify Me**.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.6.html" region="on-notify"></code-example>

1. Πατήστε το κουμπί **Notify Me** για να ενεργοποιήσετε μια ειδοποίηση που λέει, "You will be notified when the product goes on sale".

  <div class="lightbox">
    <img src="generated/images/guide/start/product-alert-notification.png" alt="Product alert notification confirmation dialog">
  </div>

Για περισσότερες πληροφορίες σχετικά με την επικοινωνία μεταξύ των components, ανατρέξτε στην ενότητα [Αλληλεπίδραση μεταξύ components](guide/component-interaction "Component interaction").

{@a whats-next}

## Στην συνέχεια

Σε αυτήν την ενότητα, έχετε δημιουργήσει μια εφαρμογή που διαβάζει δεδομένα και διαθέτει components που επικοινωνούν μεταξύ τους.

Για να συνεχίσετε την εξερεύνηση του Angular και την ανάπτυξη αυτής της εφαρμογής:

* Συνεχίστε στο [Πλοήγηση εντός της εφαρμογής](start/start-routing "Getting started: In-app navigation") για να δημιουργήσετε μια σελίδα λεπτομερειών προϊόντος.
* Συνεχίστε στο [Deployment](start/start-deployment "Getting started: Deployment") για να μεταβείτε σε τοπική ανάπτυξη, ή να ανεβάσετε την εφαρμογή σας στο Firebase ή σε έναν δικό σας διακομιστή.

@reviewed 2021-09-15
