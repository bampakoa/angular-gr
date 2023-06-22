# Εμφάνιση λίστας επιλογών

Αυτό το σεμινάριο σας δείχνει πως να: 

* Επεκτείνετε την εφαρμογή Tour of Heroes για να εμφανίσετε μια λίστα με ήρωες.
* Επιτρέψετε στους χρήστες να επιλέξουν έναν ήρωα και να εμφανίσουν τα στοιχεία του ήρωα.

<div class="alert is-helpful">

Για το δείγμα εφαρμογής που περιγράφει αυτή η σελίδα, ανατρέξτε στο <live-example></live-example>.

</div>


## Δημιουργήστε εικονικούς ήρωες

Το πρώτο βήμα είναι να δημιουργήσετε μερικούς ήρωες για να εμφανίσετε.

Δημιουργήστε ένα αρχείο με το όνομα `mock-heroes.ts` στον φάκελο `src/app/`.
Καθορίστε μια σταθερά `HEROES` ως μια λίστα δέκα ηρώων και κάντε την export.
Το αρχείο πρέπει να μοιάζει με αυτό.

<code-example header="src/app/mock-heroes.ts" path="toh-pt2/src/app/mock-heroes.ts"></code-example>

## Εμφάνιση ηρώων

Ανοίξτε το αρχείο class του `HeroesComponent` και κάντε import το εικονικό `HEROES`.

<code-example header="src/app/heroes/heroes.component.ts (import HEROES)" path="toh-pt2/src/app/heroes/heroes.component.ts" region="import-heroes"></code-example>

Στο `HeroesComponent` class, ορίστε μια ιδιότητα του component που ονομάζεται `heroes` για να κάνετε την λίστα `HEROES` διαθέσιμη για binding.

<code-example header="src/app/heroes/heroes.component.ts" path="toh-pt2/src/app/heroes/heroes.component.ts" region="component"></code-example>

### Δημιουργήστε μια λίστα ηρώων με `*ngFor`

Ανοίξτε το αρχείο template του `HeroesComponent` και κάντε τις ακόλουθες αλλαγές:

1.  Προσθέστε ένα `<h2>` στην κορυφή.
2.  Κάτω από το `<h2>` προσθέστε ένα στοιχείο `<ul>`.
3.  Στο στοιχείο `<ul>` εισαγάγετε ένα `<li>`.
4.  Τοποθετήστε ένα `<button>` μέσα στο `<li>` που εμφανίζει τις ιδιότητες ενός `hero` μέσα σε στοιχεία `<span>`.
5.  Προσθέστε CSS classes για να προσθέσετε στυλ στο component.

για να μοιάζει με αυτό:

<code-example header="heroes.component.html (heroes template)" path="toh-pt2/src/app/heroes/heroes.component.1.html" region="list"></code-example>

Αυτό εμφανίζει ένα σφάλμα αφού η ιδιότητα 'hero' δεν υπάρχει. Για να έχετε πρόσβαση σε κάθε μεμονωμένο ήρωα και να τους εμφανίσετε όλους, προσθέστε ένα `*ngFor` στο `<li>` για να προσπελάσετε την λίστα των ηρώων:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="li"></code-example>

Το [`*ngFor`](guide/built-in-directives#ngFor) είναι ένα *επαναλαμβανόμενο* directive της Angular.
Επαναλαμβάνει το στοιχείο στο οποίο αναφέρεται για κάθε στοιχείο στην λίστα.

Η σύνταξη σε αυτό το παράδειγμα είναι η εξής:

| Συνταξη   | Λεπτομερειες |
|:---      |:---     |
| `<li>`   | Το στοιχείο στο οποίο αναφέρεται.                                                                  |
| `heroes` | Περιέχει την λίστα των εικονικών ηρώων από το class `HeroesComponent`, τη λίστα εικονικών ηρώων.   |
| `hero`   | Περιέχει το τρέχων αντικείμενο του ήρωα για κάθε επανάληψη μέσα από τη λίστα.                      |

<div class="alert is-important">

Μην ξεχνάτε να βάλετε τον αστερίσκο `*` μπροστά από το `ngFor`. Είναι ένα κρίσιμο μέρος της σύνταξης.

</div>

Μετά την ανανέωση του προγράμματος περιήγησης, εμφανίζεται η λίστα των ηρώων.

<div class="callout is-helpful">

<header>Διαδραστικα στοιχεια</header>

Μέσα στο στοιχείο `<li>`, προσθέστε ένα  στοιχείο `<button>` γύρω από τις λεπτομέρειες του ήρωα και μετά κάντε τον ήρωα να δέχεται κλικ. Για να βελτιώσετε την προσβασιμότητα χρησιμοποιήστε εγγενώς διαδραστικά στοιχεία HTML (π.χ. `<button>`) αντί να προσθέσετε έναν event listener σε μη-διαδραστικό.

Για περισσότερες λεπτομέρειες σχετικά με την προσβασιμότητα, δείτε το [Προσβασιμότητα στην Angular](guide/accessibility).

</div>

<a id="styles"></a>

### Προσθέστε στυλ στους ήρωες

Η λίστα ηρώων πρέπει να είναι ελκυστική και να ανταποκρίνεται οπτικά όταν οι χρήστες
τοποθετήσουν το δείκτη του ποντικιού από πάνω και επιλέξουν έναν ήρωα από τη λίστα.

Στο [πρώτο σεμινάριο](tutorial/toh-pt0#app-wide-styles), ορίσατε τα βασικά στυλ για ολόκληρη την εφαρμογή στο `styles.css`.
Εκείνο το αρχείο δεν περιλάμβανε στυλ για αυτήν τη λίστα ηρώων.

Θα μπορούσατε να προσθέσετε περισσότερα στυλ στο `styles.css` και να συνεχίσετε να αναπτύσσετε εκείνο το αρχείο στυλ καθώς προσθέτετε components.

Ίσως προτιμάτε να ορίσετε στυλ που απευθύνονται για ένα συγκεκριμένο component. Αυτό διατηρεί όλα όσα χρειάζεται ένα component όπως τον κώδικα, το HTML, και το CSS μαζί σε ένα μέρος.

Αυτή η προσέγγιση διευκολύνει την εκ νέου χρήση του component κάπου αλλού
και προσφέρει την επιδιωκόμενη εμφάνιση του component ακόμα κι αν τα καθολικά στυλ είναι διαφορετικά.

Ορίζετε στυλ για συγκεκριμένο component είτε ενσωματωμένα στην λίστα `@Component.styles` είτε
ως αρχείο(α) στυλ στην λίστα `@Component.styleUrls`.

Όταν η εντολή `ng generate` δημιούργησε το `HeroesComponent`, δημιούργησε ένα κενό αρχείο στυλ `heroes.component.css` για το `HeroesComponent`
και το πρόσθεσε στο `@Component.styleUrls` ώς εξής.

<code-example header="src/app/heroes/heroes.component.ts (@Component)" path="toh-pt2/src/app/heroes/heroes.component.ts" region="metadata"></code-example>

Ανοίξτε το αρχείο `heroes.component.css` και επικολλήστε τα στυλ CSS για το `HeroesComponent` από την [τελική επισκόπηση του κώδικα](#final-code-review).

<div class="alert is-important">

Τα στυλ και τα αρχεία στυλ που περιέχονται στα μεταδεδομένα `@Component` απευθύνονται σε αυτό το συγκεκριμένο component.
Τα στυλ στο `heroes.component.css` εφαρμόζονται μόνο στο `HeroesComponent` και δεν επηρεάζουν το εξωτερικό HTML ή το HTML σε οποιοδήποτε άλλο component.

</div>

## Προβολή λεπτομερειών

Όταν ο χρήστης κάνει κλικ σε έναν ήρωα στη λίστα, το component πρέπει να εμφανίζει τα στοιχεία του επιλεγμένου ήρωα στο κάτω μέρος της σελίδας.

Ο κώδικας σε αυτήν την ενότητα, θα εμφανίσει/ενημερώσει τις λεπτομέρειές του ήρωα όταν καλεστεί το event click του ήρωα.

### Προσθήκη ενός binding για το event click

Προσθέστε ένα click event binding στο `<button>` του `<li>` ως εξής:

<code-example header="heroes.component.html (απόσπασμα του template)" path="toh-pt2/src/app/heroes/heroes.component.1.html" region="selectedHero-click"></code-example>

Αυτό είναι ένα παράδειγμα της σύνταξης [event binding](guide/event-binding) της Angular.

Οι παρενθέσεις γύρω από το `click` δίνουν εντολή στην Angular να παρακολουθεί το event `click` του στοιχείου `<button>`.
Όταν ο χρήστης κάνει κλικ στο `<button>`, η Angular εκτελεί την μέθοδο `onSelect(hero)`.

Στην επόμενη ενότητα, ορίστε μια μέθοδο `onSelect()` στο `HeroesComponent` για
να εμφανίστε τον ήρωα που ορίστηκε στην έκφραση `*ngFor`.


### Προσθέστε μια μέθοδο στο click event

Μετονομάστε την ιδιότητα `hero` του component σε `selectedHero` αλλά μην της δώσετε τιμή γιατί δεν υπάρχει *επιλεγμένος ήρωας* όταν ξεκινά η εφαρμογή.

Προσθέστε την ακόλουθη μέθοδο `onSelect()`, η οποία θέτει τον ήρωα που έγινε κλικ από το template
στο `selectedHero` του component.

<code-example header="src/app/heroes/heroes.component.ts (onSelect)" path="toh-pt2/src/app/heroes/heroes.component.ts" region="on-select"></code-example>

### Προσθέστε μια ενότητα λεπτομερειών

Προς το παρόν, έχετε μια λίστα στο template του component. Για να δείξετε λεπτομέρειες για έναν ήρωα όταν επιλέγετε το όνομά του από την λίστα, προσθέστε μια ενότητα που εμφανίζει τις λεπτομέρειες του στο
template. Προσθέστε τα ακόλουθα στο `heroes.component.html` κάτω από την ενότητα της λίστας:

<code-example header="heroes.component.html (στοιχεία επιλεγμένου ήρωα)" path="toh-pt2/src/app/heroes/heroes.component.html" region="selectedHero-details"></code-example>

Οι λεπτομέρειες του ήρωα θα πρέπει να εμφανίζονται μόνο όταν είναι επιλεγμένος ένας ήρωας. Όταν το component δημιουργείται αρχικά, δεν υπάρχει επιλεγμένος ήρωας. Προσθέστε το directive `*ngIf` στο `<div>` που περιέχει τις λεπτομέρειες του ήρωα. Αυτό το directive δίνει εντολή στην Angular να εμφανίσει το τμήμα μόνο όταν το `selectedHero` είναι πραγματικά ορισμένο (αφού έχει επιλεχθεί κάνοντας κλικ σε έναν ήρωα).

<div class="alert is-important">

Μην ξεχνάτε τον αστερίσκο `*` μπροστά από το `ngIf`. Είναι ένα κρίσιμο μέρος της σύνταξης.

</div>

### Δώστε στυλ στον επιλεγμένο ήρωα

Για να βοηθήσετε στην αναγνώριση του επιλεγμένου ήρωα, μπορείτε να χρησιμοποιήσετε το CSS class `.selected` στα [στυλ που προσθέσατε νωρίτερα](#styles).
Για να εφαρμόσετε το class `.selected` στο `<li>` όταν ο χρήστης κάνει κλικ σε αυτό, χρησιμοποιήστε class binding.

<div class="lightbox">

<img alt="Επιλεγμένος ήρωας με σκούρο φόντο και ανοιχτό κείμενο που τον διαφοροποιεί από μη επιλεγμένα στοιχεία λίστας" src="generated/images/guide/toh/heroes-list-selected.png">

</div>

Το [class binding](guide/class-binding) της Angular μπορεί να προσθέσει και να αφαιρέσει ένα CSS class υπό συνθήκες.
Προσθέστε το `[class.some-css-class]="some-condition"` στο στοιχείο που θέλετε να αποκτήσει στυλ.

Προσθέστε το ακόλουθο binding `[class.selected]` στο `<li>` που βρίσκεται στο template του `HeroesComponent`:

<code-example header="heroes.component.html (αλλαγή του CSS class 'selected')" path="toh-pt2/src/app/heroes/heroes.component.1.html" region="class-selected"></code-example>

Όταν η τρέχουσα γραμμή ήρωα είναι η ίδια με το `selectedHero`, η Angular προσθέτει το CSS class `selected`. Όταν οι δύο ήρωες είναι διαφορετικοί, η Angular αφαιρεί το class.

Το τελικό `<li>` μοιάζει με αυτό:

<code-example header="heroes.component.html (αντικείμενο λίστας hero)" path="toh-pt2/src/app/heroes/heroes.component.html" region="li"></code-example>

<a id="final-code-review"></a>

## Τελική επισκόπηση του κώδικα

Αυτά είναι τα αρχεία κώδικα που συζητήθηκαν σε αυτήν τη σελίδα, συμπεριλαμβανομένων των στυλ του `HeroesComponent`.

<code-tabs>
    <code-pane header="src/app/mock-heroes.ts" path="toh-pt2/src/app/mock-heroes.ts"></code-pane>
    <code-pane header="src/app/heroes/heroes.component.ts" path="toh-pt2/src/app/heroes/heroes.component.ts"></code-pane>
    <code-pane header="src/app/heroes/heroes.component.html" path="toh-pt2/src/app/heroes/heroes.component.html"></code-pane>
    <code-pane header="src/app/heroes/heroes.component.css" path="toh-pt2/src/app/heroes/heroes.component.css"></code-pane>
</code-tabs>

## Περίληψη

*   Η εφαρμογή Tour of Heroes εμφανίζει μια λίστα ηρώων με προβολή λεπτομερειών.
*   Ο χρήστης μπορεί να επιλέξει έναν ήρωα και να δει τα στοιχεία αυτού του ήρωα.
*   Χρησιμοποιήσατε το `*ngFor` για να εμφανίσετε μια λίστα.
*   Χρησιμοποιήσατε το `*ngIf` για να συμπεριλάβετε ή να εξαιρέσετε υπό συνθήκες ένα κομμάτι HTML.
*   Μπορείτε να αλλάξετε ένα class με στυλ CSS χρησιμοποιώντας ένα binding `class`.

@reviewed 2022-07-23
