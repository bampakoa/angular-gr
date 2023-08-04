# Επισκόπηση των Angular Components

Τα components είναι το κύριο δομικό στοιχείο για τις Angular εφαρμογές. Κάθε component αποτελείται από:

* Ένα HTML template που δηλώνει τι απεικονίζεται στη σελίδα
* Ένα TypeScript class που ορίζει τη συμπεριφορά
* Ένας selector CSS που ορίζει πώς το component χρησιμοποιείται σε ένα template
* Προαιρετικά, τα CSS στυλ που εφαρμόζονται στο template

Αυτό το θέμα περιγράφει τον τρόπο δημιουργίας και παραμετροποίησης ενός Angular component.

<div class="alert is-helpful">

Για να δείτε ή να κατεβάσετε τον κώδικα του παραδείγματος που χρησιμοποιείται σε αυτό το θέμα, ανατρέξτε στο <live-example></live-example>.

</div>

## Προαπαιτούμενα

Για να δημιουργήσετε ένα component, βεβαιωθείτε ότι πληροίτε τις ακόλουθες προϋποθέσεις:

1. [Εγκαταστήστε το Angular CLI.](guide/setup-local#εγκαταστήστε-το-angular-cli)
2. [Δημιουργήστε έναν χώρο εργασίας Angular](guide/setup-local#δημιουργήστε-έναν-χώρο-εργασίας-και-μια-αρχική-εφαρμογή) με την αρχική εφαρμογή.
   Εάν δεν έχετε ένα project, δημιουργήστε ένα χρησιμοποιώντας το `ng new <project-name>`, όπου `<project-name>` είναι το όνομα της Angular εφαρμογής σας.

<a id="creating-a-component"></a>

## Δημιουργία ενός component

Ο καλύτερος τρόπος για να δημιουργήσετε ένα component είναι με το Angular CLI. Μπορείτε επίσης να δημιουργήσετε ένα component χειροκίνητα.

### Δημιουργία ενός component με το Angular CLI

Για να δημιουργήσετε ένα component χρησιμοποιώντας το Angular CLI:

1. Απο το παράθυρο τερματικού, μεταβείτε στον φάκελο που περιέχει την εφαρμογή σας.
2. Εκτελέστε την εντολή `ng generate component <component-name>`, όπου `<component-name>` είναι το όνομα του νέου component σας.

Από προεπιλογή, αυτή η εντολή δημιουργεί τα ακόλουθα:

* Ένα φάκελο με το όνομα του component
* Ένα component αρχείο, `<component-name>.component.ts`
* Ένα template αρχείο, `<component-name>.component.html`
* Ένα CSS αρχείο, `<component-name>.component.css`
* Ένα test αρχείο, `<component-name>.component.spec.ts`

Όπου `<component-name>` είναι το όνομα του component σας.

<div class="alert is-helpful">

Μπορείτε να αλλάξετε τον τρόπο που το `ng generate component` δημιουργεί νέα components.
Για περισσότερες πληροφορίες, δείτε [ng generate component](cli/generate#component-command) στην τεκμηρίωση του Angular CLI.

</div>

### Δημιουργία ενός component χειροκίνητα

Αν και το Angular CLI είναι ο καλύτερος τρόπος για να δημιουργήσετε ένα Angular component, μπορείτε επίσης να δημιουργήσετε ένα component με χειροκίνητα.
Αυτή η ενότητα περιγράφει τον τρόπο δημιουργίας του βασικού component αρχείου σε ένα υπάρχον Angular project.

Για να δημιουργήσετε ένα νέο component χειροκίνητα:

1. Μεταβείτε στον φάκελο του Angular project σας.
2. Δημιουργήστε ένα νέο αρχείο, `<component-name>.component.ts`.
3. Στην αρχή του αρχείου, προσθέστε το ακόλουθο import.

    <code-example path="component-overview/src/app/component-overview/component-overview.component.ts" region="import"></code-example>

4. Μετά το `import`, προσθέστε έναν `@Component` decorator.

    <code-example path="component-overview/src/app/component-overview/component-overview.component.ts" region="decorator-skeleton"></code-example>

5. Επιλέξτε έναν selector CSS για το component.

    <code-example path="component-overview/src/app/component-overview/component-overview.component.ts" region="selector"></code-example>

   Για περισσότερες πληροφορίες σχετικά με την επιλογή ενός selector, δείτε [Καθορισμός του selector CSS ενός component](#specifying-a-components-css-selector).
   

6. Καθορίστε το HTML template που χρησιμοποιεί το component για την εμφάνιση πληροφοριών.
   Στις περισσότερες περιπτώσεις, αυτό το template είναι ένα ξεχωριστό αρχείο HTML.
   
   <code-example
        path="component-overview/src/app/component-overview/component-overview.component.ts"
        region="templateUrl">
   </code-example>

   Για περισσότερες πληροφορίες σχετικά με τον ορισμό του component template, δείτε [Καθορισμός του component template](#defining-a-components-template).

7. Επιλέξτε τα στυλ για το component template.
   Στις περισσότερες περιπτώσεις, ορίζετε εσείς τα στυλ για το component template σας σε ένα ξεχωριστό αρχείο.

    <code-example path="component-overview/src/app/component-overview/component-overview.component.ts" region="decorator"></code-example>

8.  Προσθέστε ένα `class` που περιλαμβάνει τον κώδικα για το component.

    <code-example path="component-overview/src/app/component-overview/component-overview.component.ts" region="class"></code-example>

<a id="specifying-a-components-css-selector"></a>

## Καθορισμός του selector CSS ενός component

Κάθε component απαιτεί έναν CSS _selector_. Ένας selector δίνει εντολή στο Angular να δημιουργήσει αυτό το component όπου βρίσκει το αντίστοιχο tag στο HTML template. Για παράδειγμα, σκεφτείτε ένα component `hello-world.component.ts` που ορίζει τον selector του ως `app-hello-world`. Αυτός ο selector δίνει εντολή στην Angular να δημιουργήσει αυτό το component κάθε φορά που εμφανίζεται το tag `<app-hello-world>` σε ένα template.

Καθορίστε τον component selector προσθέτοντας μια ιδιότητα `selector` στον `@Component` decorator.

<code-example path="component-overview/src/app/component-overview/component-overview.component.ts" region="selector"></code-example>

<a id="defining-a-components-template"></a>

## Καθορισμός του component template

Ένα template είναι ένα κομμάτι HTML που λέει στην Angular πώς να απεικονίσει το component στην εφαρμογή σας.
Καθορίστε ένα template για το component σας με έναν από τους δύο τρόπους: με αναφορά σε ένα εξωτερικό αρχείο ή απευθείας μέσα στο component.

Για να ορίσετε ένα template ως εξωτερικό αρχείο, προσθέστε μια `templateUrl` ιδιότητα στον `@Component` decorator.

<code-example path="component-overview/src/app/component-overview/component-overview.component.ts" region="templateUrl"></code-example>

Για να ορίσετε ένα template εντός του component, προσθέστε μια `template` ιδιότητα στον `@Component` decorator, που περιέχει το HTML που θέλετε να χρησιμοποιήσετε.

<code-example path="component-overview/src/app/component-overview/component-overview.component.1.ts" region="template"></code-example>

Εάν θέλετε το template σας να εκτείνεται σε πολλές γραμμές, χρησιμοποιήστε backticks (<code> ` </code>).
Για παράδειγμα:

<code-example path="component-overview/src/app/component-overview/component-overview.component.2.ts" region="templatebacktick"></code-example>

<div class="alert is-helpful">

Ένα Angular component απαιτεί ένα template που ορίζεται με χρήση του `template` ή `templateUrl`. Δεν μπορείτε να έχετε και τις δύο ιδιότητες σε ένα component.

</div>

## Δήλωση στυλ ενός component

Δηλώστε τα στυλ του component για το template του με έναν από τους δύο τρόπους: με αναφορά σε ένα εξωτερικό αρχείο ή απευθείας μέσα στο component.

Για να δηλώσετε τα στυλ για ένα component σε ένα ξεχωριστό αρχείο, προσθέστε μια `styleUrls` ιδιότητα στον `@Component` decorator.

<code-example path="component-overview/src/app/component-overview/component-overview.component.ts" region="decorator"></code-example>

Για να δηλώσετε τα στυλ μέσα στο component, προσθέστε μια `styles` ιδιότητα στον `@Component` decorator που περιέχει τα στυλ που θέλετε να χρησιμοποιήσετε.

<code-example path="component-overview/src/app/component-overview/component-overview.component.3.ts" region="styles"></code-example>

Η ιδιότητα `styles` δέχεται μια λίστα από strings που περιέχουν τους κανόνες CSS.


## Επόμενα βήματα

* Για μια αρχιτεκτονική επισκόπηση των components, δείτε [Εισαγωγή στα components και τα templates](guide/architecture-components).
* Για πρόσθετες επιλογές που μπορείτε να χρησιμοποιήσετε κατά τη δημιουργία ενός component, δείτε [Component](api/core/Component) στο API Reference.
* Για περισσότερες πληροφορίες σχετικά με τα στυλ των components, ανατρέξτε στο [Στυλ του Component](guide/component-styles).
* Για περισσότερες πληροφορίες σχετικά με τα templates, δειτε [Σύνταξη του Template](guide/template-syntax).

@reviewed 2023-07-29
