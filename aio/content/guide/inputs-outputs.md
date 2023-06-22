# Κοινή χρήση δεδομένων μεταξύ child και parent directives και components

Ένα κοινό μοτίβο στην Angular είναι η κοινή χρήση δεδομένων μεταξύ ενός parent component και ενός ή περισσότερων child components.
Εφαρμόστε αυτό το μοτίβο με τους `@Input()` και `@Output()` decorators.

<div class="alert is-helpful">

Δείτε το <live-example></live-example> για ένα παράδειγμα που περιέχει τα αποσπάσματα κώδικα σε αυτόν τον οδηγό.

</div>

Θεωρείστε την παρακάτω ιεραρχία:

<code-example format="html" language="html">

&lt;parent-component&gt;
  &lt;child-component&gt;&lt;/child-component&gt;
&lt;/parent-component&gt;

</code-example>

Το `<parent-component>` χρησιμεύει ως πλαίσιο για το `<child-component>`.

Τα `@Input()` και `@Output()` δίνουν σε ένα child component έναν τρόπο επικοινωνίας με το parent component του.
Το `@Input()` επιτρέπει σε ένα parent component να ενημερώσει δεδομένα στο child component.
Αντίθετα, το `@Output()` επιτρέπει στο child να στείλει δεδομένα σε ένα parent component.

<a id="input"></a>

## Αποστολή δεδομένων σε ένα child component

Το `@Input()` decorator σε ένα child component ή directive σημαίνει ότι η ιδιότητα μπορεί να λάβει την αξία της από το parent component.

<div class="lightbox">

<img alt="Διάγραμμα ροής δεδομένων που ρέουν από το parent στο child" src="generated/images/guide/inputs-outputs/input.svg">

</div>

Για να χρησιμοποιήσετε το `@Input()`, πρέπει να ρυθμίσετε το parent και το child.

### Ρύθμιση του child component

Για να χρησιμοποιήσετε τον `@Input()` decorator σε ένα child component class, πρώτα εισαγάγετε το `Input` και μετά διακοσμήστε την ιδιότητα με `@Input()`, όπως στο παρακάτω παράδειγμα.

<code-example header="src/app/item-detail/item-detail.component.ts" path="inputs-outputs/src/app/item-detail/item-detail.component.ts" region="use-input"></code-example>

Σε αυτήν την περίπτωση, το `@Input()` διακοσμεί την ιδιότητα <code class="no-auto-link">item</code>, το οποίο είναι τύπου `string`, ωστόσο, οι ιδιότητες `@Input()` μπορούν να έχουν οποιονδήποτε τύπο, όπως `number`, `string`, `boolean`, ή `object`.
Η τιμή για το `item` προέρχεται από το parent component.

Στη συνέχεια, στο child component template, προσθέστε τα εξής:

<code-example header="src/app/item-detail/item-detail.component.html" path="inputs-outputs/src/app/item-detail/item-detail.component.html" region="property-in-template"></code-example>

### Ρύθμιση του parent component

Το επόμενο βήμα είναι να συνδέσετε την ιδιότητα στο template του parent component.
Σε αυτό το παράδειγμα, το template του parent component είναι το `app.component.html`.

1.  Χρησιμοποιήστε τον selector του child, εδώ `<app-item-detail>`, σαν ένα directive μέσα στο template του parent component.
1.  Χρησιμοποιήστε [property binding](guide/property-binding) για να συνδέσετε την ιδιότητα `item` του child στην ιδιότητα `currentItem` του parent.

    <code-example header="src/app/app.component.html" path="inputs-outputs/src/app/app.component.html" region="input-parent"></code-example>

1.  Στο parent component class, ορίστε μια τιμή για το `currentItem`:

    <code-example header="src/app/app.component.ts" path="inputs-outputs/src/app/app.component.ts" region="parent-property"></code-example>

Με το `@Input()`, η Angular μεταβιβάζει την τιμή για το `currentItem` στο child έτσι ώστε το `item` εμφανίζεται σαν `Television`.

Το παρακάτω διάγραμμα δείχνει αυτή τη δομή:

<div class="lightbox">

<img alt="Διάγραμμα property binding του στόχου, item, σε τετράγωνες αγκυλες ορισμένο στην πηγή, currentItem, στα δεξιά του συμβόλου ίσου" src="generated/images/guide/inputs-outputs/input-diagram-target-source.svg">

</div>

Ο στόχος στις αγκύλες, `[]`, είναι η ιδιότητα που διακοσμείτε με το `@Input()` στο child component.
Η πηγή του binding, το τμήμα στα δεξιά του συμβόλου ίσου, είναι τα δεδομένα που μεταβιβάζει το parent component στο nested component.

### Παρακολούθηση για αλλαγές στο `@Input()`

Για να παρακολουθήσετε αλλαγές σε μια ιδιότητα `@Input()`, χρησιμοποιήστε το `OnChanges`, ένα από τα [lifecycle hooks](guide/lifecycle-hooks) της Angular.
Ανατρέξτε στην ενότητα [`OnChanges`](guide/lifecycle-hooks#onchanges) του οδηγού [Lifecycle Hooks](guide/lifecycle-hooks) για περισσότερες λεπτομέρειες και παραδείγματα.

<a id="output"></a>

## Αποστολή δεδομένων σε ένα parent component

Ο `@Output()` decorator σε ένα child component ή directive επιτρέπει τη ροή δεδομένων από το child στο parent.

<div class="lightbox">

<img alt="Διάγραμμα ροής δεδομένων που ρέουν από το child στο parent" src="generated/images/guide/inputs-outputs/output.svg">

</div>

Το `@Output()` επισημαίνει μια ιδιότητα σε ένα child component ως μια πόρτα μέσω της οποίας τα δεδομένα μπορούν να μεταφερθούν από το child στο parent.

Το child component χρησιμοποιεί την ιδιότητα `@Output()` για να δημιουργήσει ένα event που ειδοποιεί τον parent για αυτή την αλλαγή.
Για να δημιουργήσετε ένα event, ένα `@Output()` πρέπει να έχει τον τύπο `EventEmitter`, που είναι ένα class στο `@angular/core` που χρησιμοποιείται για την εκτέλεση custom events.

Το παρακάτω παράδειγμα δείχνει πώς να ρυθμίσετε ένα `@Output()` σε ένα child component που στέλνει δεδομένα από ένα HTML `<input>` σε έναν πίνακα στο parent component.

Για να χρησιμοποιήσετε το `@Output()`, πρέπει να ρυθμίσετε το parent και child.

### Ρύθμιση του child component

Το παρακάτω παράδειγμα περιλαμβάνει ένα `<input>` όπου ένας χρήστης μπορεί να εισαγάγει μια τιμή και να κάνει κλικ σε ένα `<button>` που ενεργοποιεί ένα event.
Στη συνέχεια, το `EventEmitter`  αναμεταδίδει τα δεδομένα στο parent component.

1.  Κάντε import τα `Output` και `EventEmitter` στο child component class:

    <code-example format="javascript" language="javascript">

    import { Output, EventEmitter } from '&commat;angular/core';

    </code-example>

1.  Στο component class, διακοσμήστε μια ιδιότητα με `@Output()`.
    Το ακόλουθο παράδειγμα `newItemEvent` `@Output()` έχει έναν τύπο `EventEmitter`, που σημαίνει ότι είναι ένα event.

    <code-example header="src/app/item-output/item-output.component.ts" path="inputs-outputs/src/app/item-output/item-output.component.ts" region="item-output"></code-example>

    Τα διάφορα μέρη της προηγούμενης εντολής είναι τα εξής:

    | Μερη της εντολης         | Λεπτομερειες |
    |:---                          |:---     |
    | `@Output()`                  | Μια συνάρτηση decorator που επισημαίνει την ιδιότητα ως τρόπο μεταφοράς δεδομένων από το child στο parent. |
    | `newItemEvent`               | Το όνομα του `@Output()`.                                                                    |
    | `EventEmitter<string>`       | Ο τύπος του `@Output()`.                                                                         |
    | `new EventEmitter<string>()` | Λέει στην Angular να δημιουργήσει έναν νέο event emitter και ότι τα δεδομένα που στέλνει είναι τύπου string.       |

    Για περισσότερες πληροφορίες σχετικά με το `EventEmitter`, ανατρέξτε στην [τεκμηρίωση του EventEmitter API](api/core/EventEmitter).

1.  Δημιουργήστε μια μέθοδο `addNewItem()` στην ίδια component class:

    <code-example header="src/app/item-output/item-output.component.ts" path="inputs-outputs/src/app/item-output/item-output.component.ts" region="item-output-class"></code-example>

    Η συνάρτηση `addNewItem()` χρησιμοποιεί το `@Output()`, `newItemEvent`, για να εκτελέσει ένα event με την τιμή που πληκτρολογεί ο χρήστης στο `<input>`.

### Ρύθμιση του child template

Το template του child έχει δύο στοιχεία.
Το πρώτο είναι ένα HTML `<input>` με ένα [template reference variable](guide/template-reference-variables), `#newItem`, όπου ο χρήστης πληκτρολογεί ένα όνομα για το item.
Η ιδιότητα `value` της μεταβλητής `#newItem` αποθηκεύει αυτό που πληκτρολογεί ο χρήστης στο `<input>`.

<code-example header="src/app/item-output/item-output.component.html" path="inputs-outputs/src/app/item-output/item-output.component.html" region="child-output"></code-example>

Το δεύτερο στοιχείο είναι ένα `<button>` με ένα `click` [event binding](guide/event-binding).

Το `(click)` event συνδέεται με τη μέθοδο `addNewItem()` στο child component class.
Η μέθοδος `addNewItem()` παίρνει ως όρισμα την τιμή της ιδιότητας `#newItem.value`.

### Ρύθμιση του parent component

Το `AppComponent` σε αυτό το παράδειγμα διαθέτει μια λίστα από `items` σε έναν πίνακα και μια μέθοδο για την προσθήκη περισσότερων στοιχείων στον πίνακα.

<code-example header="src/app/app.component.ts" path="inputs-outputs/src/app/app.component.ts" region="add-new-item"></code-example>

Η μέθοδος `addItem()` παίρνει ένα όρισμα με τη μορφή string και στη συνέχεια προσθέτει αυτό το string στον πίνακα `items`.

### Ρύθμιση του parent template

1.  Στο parent template, συνδέστε τη μέθοδο του parent με το event του child.
1.  Τοποθετήστε τον selector του child, εδώ `<app-item-output>`, στο template του parent component, `app.component.html`.

    <code-example header="src/app/app.component.html" path="inputs-outputs/src/app/app.component.html" region="output-parent"></code-example>

    Το event binding, `(newItemEvent)='addItem($event)'`, συνδέει το event του child, `newItemEvent`, με τη μέθοδο στο parent, `addItem()`.

    Το `$event` περιέχει τα δεδομένα που πληκτρολογεί ο χρήστης στο `<input>` στο child template UI.

    Για να δείτε το `@Output()` να λειτουργεί, προσθέστε τα ακόλουθα στο parent template:

    <code-example format="html" language="html">

    &lt;ul&gt;
      &lt;li *ngFor="let item of items"&gt;{{item}}&lt;/li&gt;
    &lt;/ul&gt;

    </code-example>

    Το `*ngFor` επαναλαμβάνει τα στοιχεία στον πίνακα `items`.
    Όταν εισάγετε μια τιμή στο `<input>` του child και κάνετε κλικ στο κουμπί, to child εκτελεί ένα event και η μέθοδος `addItem()` του parent προσθέτει την τιμή στον πίνακα `items` και το νέο στοιχείο εμφανίζεται στην λίστα.

## Χρησιμοποιώντας τα `@Input()` και `@Output()` μαζί

Χρησιμοποιήστε τα `@Input()` και `@Output()` στο ίδιο child component ως εξής:

<code-example header="src/app/app.component.html" path="inputs-outputs/src/app/app.component.html" region="together"></code-example>

Ο στόχος, `item`, που είναι μια ιδιότητα `@Input()` στο child component class, λαμβάνει την τιμή του από την ιδιότητα του parent, `currentItem`.
Όταν κάνετε κλικ στο delete, το child component εκτελεί ένα event, `deleteRequest`, το οποίο είναι το όρισμα για τη μέθοδο `crossOffItem()` του parent.

Το παρακάτω διάγραμμα δείχνει τα διάφορα μέρη των `@Input()` και `@Output()` στο `<app-input-output>` child component.

<div class="lightbox">

<img alt="Διάγραμμα ενός input στόχου και ενός output στόχου το καθένα συνδεδεμένο σε μια πηγή." src="generated/images/guide/inputs-outputs/input-output-diagram.svg">

</div>

Ο selector του child είναι `<app-input-output>` με τα `item` και `deleteRequest` να είναι ιδιότητες `@Input()` και `@Output()` στο child component class.
Η ιδιότητα `currentItem` και η μέθοδος `crossOffItem()` βρίσκονται και οι δύο στο parent component class.

Για να συνδυάσετε property και event bindings χρησιμοποιώντας την σύνταξη banana-in-a-box, `[()]`, ανατρέξτε στην ενότητα [Two-way Binding](guide/two-way-binding).

<!-- links -->

<!-- external links -->

<!-- end links -->

@reviewed 2022-08-31
