# Εμφάνιση λίστας επιλογών

Σε αυτήν τη σελίδα, θα επεκτείνετε την εφαρμογή Tour of Heroes για να εμφανίσετε μια λίστα με ήρωες και
θα επιτρέψετε στους χρήστες να επιλέξουν έναν ήρωα και να εμφανίσουν τα στοιχεία του ήρωα.

<div class="alert is-helpful">

  Για το δείγμα εφαρμογής που περιγράφει αυτή η σελίδα, ανατρέξτε στο <live-example></live-example>.

</div>


## Δημιουργήστε εικονικούς ήρωες

Θα χρειαστείτε μερικούς ήρωες για να εμφανίσετε.

Τελικά θα τους πάρετε από έναν απομακρυσμένο διακομιστή δεδομένων.
Προς το παρόν, θα δημιουργήσετε μερικούς _εικονικούς ήρωες_ και θα προσποιηθείτε ότι προέρχονται από τον διακομιστή.

Δημιουργήστε ένα αρχείο με το όνομα `mock-heroes.ts` στον φάκελο `src/app/`.
Καθορίστε μια σταθερά `HEROES` ως μια λίστα δέκα ηρώων και κάντε την export.
Το αρχείο πρέπει να μοιάζει με αυτό.

<code-example path="toh-pt2/src/app/mock-heroes.ts" header="src/app/mock-heroes.ts"></code-example>

## Εμφάνιση ηρώων

Ανοίξτε το αρχείο class του `HeroesComponent` και κάντε import το εικονικό `HEROES`.

<code-example path="toh-pt2/src/app/heroes/heroes.component.ts" region="import-heroes" header="src/app/heroes/heroes.component.ts (import HEROES)">
</code-example>

Στο ίδιο αρχείο (class `HeroesComponent`), ορίστε μια ιδιότητα του component που ονομάζεται `heroes` για να κάνετε την λίστα `HEROES` διαθέσιμη για binding.

<code-example path="toh-pt2/src/app/heroes/heroes.component.ts" header="src/app/heroes/heroes.component.ts" region="component">
</code-example>

### Δημιουργήστε μια λίστα ηρώων με `*ngFor`

Ανοίξτε το αρχείο template του `HeroesComponent` και κάντε τις ακόλουθες αλλαγές:

* Προσθέστε ένα `<h2>` στην κορυφή,
* Κάτω από αυτό προσθέστε μια μη-ταξινομημένη λίστα HTML (`<ul>`)
* Εισαγάγετε ένα `<li>` μέσα στο `<ul>` που εμφανίζει τις ιδιότητες του `hero`.
* Ενσωματώστε μερικά CSS classes για στυλ (θα προσθέσετε τα στυλ CSS σύντομα).

Κάντε το να μοιάζει με αυτό:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="list" header="heroes.component.html (heroes template)"></code-example>

Αυτό εμφανίζει ένα σφάλμα αφού η ιδιότητα 'hero' δεν υπάρχει. Για να έχετε πρόσβαση σε κάθε μεμονωμένο ήρωα και να τους εμφανίσετε όλους, προσθέστε ένα `*ngFor` στο `<li>` για να προσπελάσετε την λίστα των ηρώων:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="li">
</code-example>

Το [`*ngFor`](guide/built-in-directives#ngFor) είναι ένα  _επαναλαμβανόμενο_ directive του Angular.
Επαναλαμβάνει το στοιχείο στο οποίο αναφέρεται για κάθε στοιχείο στην λίστα.

Η σύνταξη σε αυτό το παράδειγμα είναι η εξής:

* `<li>` είναι το στοιχείο στο οποίο αναφέρεται.
* `heroes` περιέχει την λίστα των εικονικών ηρώων από το class `HeroesComponent`, τη λίστα εικονικών ηρώων.
* `hero` περιέχει το τρέχων αντικείμενο του ήρωα για κάθε επανάληψη μέσα από τη λίστα.

<div class="alert is-important">

Μην ξεχνάτε τον αστερίσκο (*) μπροστά από το `ngFor`. Είναι ένα κρίσιμο μέρος της σύνταξης.

</div>

Μετά την ανανέωση του προγράμματος περιήγησης, εμφανίζεται η λίστα των ηρώων.

{@a styles}

### Προσθέστε στυλ στους ήρωες

Η λίστα ηρώων πρέπει να είναι ελκυστική και να ανταποκρίνεται οπτικά όταν οι χρήστες
τοποθετήσουν το δείκτη του ποντικιού από πάνω και επιλέξουν έναν ήρωα από τη λίστα.

Στο [πρώτο σεμινάριο](tutorial/toh-pt0#app-wide-styles), ορίσατε τα βασικά στυλ για ολόκληρη την εφαρμογή στο `styles.css`.
Εκείνο το αρχείο δεν περιλάμβανε στυλ για αυτήν τη λίστα ηρώων.

Θα μπορούσατε να προσθέσετε περισσότερα στυλ στο `styles.css` και να συνεχίσετε να αναπτύσσετε εκείνο το αρχείο στυλ καθώς προσθέτετε components.

Ίσως προτιμάτε να ορίσετε στυλ που απευθύνονται για ένα συγκεκριμένο component και να διατηρήσετε όλα όσα χρειάζεται ένα component&mdash; τον κώδικα, το HTML,
και το CSS &mdash;μαζί σε ένα μέρος.

Αυτή η προσέγγιση διευκολύνει την εκ νέου χρήση του component κάπου αλλού
και προσφέρει την επιδιωκόμενη εμφάνιση του component ακόμα κι αν τα καθολικά στυλ είναι διαφορετικά.

Ορίζετε στυλ για συγκεκριμένο component είτε ενσωματωμένα στην λίστα `@Component.styles` είτε
ως αρχείο(α) στυλ στην λίστα `@Component.styleUrls`.

Όταν το CLI δημιούργησε το `HeroesComponent`, δημιούργησε ένα κενό αρχείο στυλ `heroes.component.css` για το `HeroesComponent`
και το πρόσθεσε στο `@Component.styleUrls` ώς εξής.

<code-example path="toh-pt2/src/app/heroes/heroes.component.ts" region="metadata"
 header="src/app/heroes/heroes.component.ts (@Component)">
</code-example>

Ανοίξτε το αρχείο `heroes.component.css` και επικολλήστε τα στυλ CSS για το `HeroesComponent`.
Θα τα βρείτε στην [τελική επισκόπηση του κώδικα](#final-code-review) στο κάτω μέρος αυτού του οδηγού.

<div class="alert is-important">

Τα στυλ και τα αρχεία στυλ που περιέχονται στα μεταδεδομένα `@Component` απευθύνονται σε αυτό το συγκεκριμένο component.
Τα στυλ στο `heroes.component.css` εφαρμόζονται μόνο στο `HeroesComponent` και δεν επηρεάζουν το εξωτερικό HTML ή το HTML σε οποιοδήποτε άλλο component.

</div>

## Προβολή λεπτομερειών

Όταν ο χρήστης κάνει κλικ σε έναν ήρωα στη λίστα, το component πρέπει να εμφανίζει τα στοιχεία του επιλεγμένου ήρωα στο κάτω μέρος της σελίδας.

Σε αυτήν την ενότητα, θα ενημερώσετε τις λεπτομέρειές του ήρωα όταν καλεστεί το event click του ήρωα.

### Προσθήκη ενός binding για το event click

Προσθέστε ένα binding για το event click στο `<li>` ως εξής:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="selectedHero-click" header="heroes.component.html (template excerpt)"></code-example>

Αυτό είναι ένα παράδειγμα της σύνταξης [event binding](guide/event-binding) του Angular.

Οι παρενθέσεις γύρω από το `click` δίνουν εντολή στο Angular να παρακολουθεί το event `click` του στοιχείου `<li>`.
Όταν ο χρήστης κάνει κλικ στο `<li>`, το Angular εκτελεί την έκφραση `onSelect(hero)`.


Στην επόμενη ενότητα, ορίστε μια μέθοδο `onSelect()` στο `HeroesComponent` για
να εμφανίστε τον ήρωα που ορίστηκε στην έκφραση `*ngFor`.


### Προσθέστε μια μέθοδο στο click event

Μετονομάστε την ιδιότητα `hero` του component σε `selectedHero` αλλά μην της δώσετε τιμή.
Δεν υπάρχει _επιλεγμένος ήρωας_ όταν ξεκινά η εφαρμογή.

Προσθέστε την ακόλουθη μέθοδο `onSelect()`, η οποία θέτει τον ήρωα που έγινε κλικ από το template
στο `selectedHero` του component.

<code-example path="toh-pt2/src/app/heroes/heroes.component.ts" region="on-select" header="src/app/heroes/heroes.component.ts (onSelect)"></code-example>

### Προσθέστε μια ενότητα λεπτομερειών

Προς το παρόν, έχετε μια λίστα στο template του component. Για να κάνετε κλικ σε έναν ήρωα στη λίστα
και να αποκαλύψετε λεπτομέρειες για αυτόν τον ήρωα, χρειάζεστε μια ενότητα για να εμφανίσετε τις λεπτομέρειες στο
template. Προσθέστε τα ακόλουθα στο `heroes.component.html` κάτω από την ενότητα της λίστας:

<code-example path="toh-pt2/src/app/heroes/heroes.component.html" region="selectedHero-details" header="heroes.component.html (selected hero details)"></code-example>

Μετά την ανανέωση του προγράμματος περιήγησης, η εφαρμογή δεν δουλεύει σωστά.

Ανοίξτε τα developer tools του προγράμματος περιήγησης και αναζητήστε στο console ένα μήνυμα σφάλματος όπως αυτό:

<code-example language="sh">
  HeroesComponent.html:3 ERROR TypeError: Cannot read property 'name' of undefined
</code-example>

#### Τι συνέβη?

Όταν ξεκινά η εφαρμογή, το `selectedHero` είναι `undefined` _λόγω σχεδιασμού_.

Εκφράσεις binding στο template που αναφέρονται σε ιδιότητες του `selectedHero`&mdash;εκφράσεις όπως `{{selectedHero.name}}`&mdash;_πρέπει να περιέχουν σφάλμα_ επειδή δεν υπάρχει επιλεγμένος ήρωας.


#### Η διόρθωση - απόκρυψη των κενών λεπτομερειών με _*ngIf_


Το component θα πρέπει να εμφανίζει τα επιλεγμένα στοιχεία ήρωα μόνο εάν υπάρχει το `selectedHero`.

Προσθέστε ένα `<div>` γύρω από το HTML των λεπτομερειών του ήρωα.
Προσθέστε το directive `*ngIf` του Angular στο `<div>` και ορίστε το στο `selectedHero`.


<div class="alert is-important">

Μην ξεχνάτε τον αστερίσκο (*) μπροστά από το `ngIf`. Είναι ένα κρίσιμο μέρος της σύνταξης.

</div>

<code-example path="toh-pt2/src/app/heroes/heroes.component.html" region="ng-if" header="src/app/heroes/heroes.component.html (*ngIf)"></code-example>

Μετά την ανανέωση του προγράμματος περιήγησης, η λίστα με τα ονόματα εμφανίζεται ξανά.
Η περιοχή λεπτομερειών είναι κενή.
Κάντε κλικ σε έναν ήρωα στη λίστα των ηρώων και εμφανίζονται τα στοιχεία του.
Η εφαρμογή φαίνεται να λειτουργεί ξανά.
Οι ήρωες εμφανίζονται σε μια λίστα και λεπτομέρειες σχετικά με τον ήρωα στον οποίο έγινε κλικ εμφανίζονται στο κάτω μέρος της σελίδας.


#### Γιατί λειτουργεί

Όταν το `selectedHero` δεν έχει οριστεί, το `ngIf` αφαιρεί τη λεπτομέρεια του ήρωα από το DOM. Δεν υπάρχουν bindings στο `selectedHero` που πρέπει να ληφθούν υπόψη.

Όταν ο χρήστης επιλέγει έναν ήρωα, το `selectedHero` έχει μια τιμή και
το `ngIf` τοποθετεί τη λεπτομέρεια του ήρωα στο DOM.

### Δώστε στυλ στον επιλεγμένο ήρωα

Για να βοηθήσετε στην αναγνώριση του επιλεγμένου ήρωα, μπορείτε να χρησιμοποιήσετε το CSS class `.selected` στα [στυλ που προσθέσατε νωρίτερα](#styles).
Για να εφαρμόσετε το class `.selected` στο `<li>` όταν ο χρήστης κάνει κλικ σε αυτό, χρησιμοποιήστε class binding.

<div class="lightbox">
  <img src='generated/images/guide/toh/heroes-list-selected.png' alt="Επιλεγμένος ήρωας με σκούρο φόντο και ανοιχτό κείμενο που τον διαφοροποιεί από μη επιλεγμένα στοιχεία λίστας">
</div>

Το [class binding](guide/attribute-binding#class-binding) του Angular μπορεί να προσθέσει και να αφαιρέσει ένα CSS class υπό συνθήκες.
Προσθέστε το `[class.some-css-class]="some-condition"` στο στοιχείο που θέλετε να αποκτήσει στυλ.

Προσθέστε το ακόλουθο binding `[class.selected]` στο `<li>` που βρίσκεται στο template του `HeroesComponent`:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="class-selected" header="heroes.component.html (toggle the 'selected' CSS class)"></code-example>

Όταν η τρέχουσα γραμμή ήρωα είναι η ίδια με το `selectedHero`, το Angular προσθέτει το CSS class `selected`. Όταν οι δύο ήρωες είναι διαφορετικοί, το Angular αφαιρεί το class.

Το τελικό `<li>` μοιάζει με αυτό:

<code-example path="toh-pt2/src/app/heroes/heroes.component.html" region="li" header="heroes.component.html (list item hero)"></code-example>

{@a final-code-review}

## Τελική επισκόπηση του κώδικα

Αυτά είναι τα αρχεία κώδικα που συζητήθηκαν σε αυτήν τη σελίδα, συμπεριλαμβανομένων των στυλ του `HeroesComponent`.

<code-tabs>

  <code-pane header="src/app/mock-heroes.ts" path="toh-pt2/src/app/mock-heroes.ts">
  </code-pane>

  <code-pane header="src/app/heroes/heroes.component.ts" path="toh-pt2/src/app/heroes/heroes.component.ts">
  </code-pane>

  <code-pane header="src/app/heroes/heroes.component.html" path="toh-pt2/src/app/heroes/heroes.component.html">
  </code-pane>

  <code-pane header="src/app/heroes/heroes.component.css" path="toh-pt2/src/app/heroes/heroes.component.css">
  </code-pane>

</code-tabs>

## Περίληψη

* Η εφαρμογή Tour of Heroes εμφανίζει μια λίστα ηρώων με προβολή λεπτομερειών.
* Ο χρήστης μπορεί να επιλέξει έναν ήρωα και να δει τα στοιχεία αυτού του ήρωα.
* Χρησιμοποιήσατε το `*ngFor` για να εμφανίσετε μια λίστα.
* Χρησιμοποιήσατε το `*ngIf` για να συμπεριλάβετε ή να εξαιρέσετε υπό συνθήκες ένα κομμάτι HTML.
* Μπορείτε να αλλάξετε ένα class με στυλ CSS χρησιμοποιώντας ένα binding `class`.

@reviewed 2022-03-09
