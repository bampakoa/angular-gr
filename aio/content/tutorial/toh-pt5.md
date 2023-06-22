# Προσθήκη πλοήγησης με δρομολόγηση

Η εφαρμογή Tour of Heroes έχει νέες απαιτήσεις:

*   Προσθέστε μια προβολή *Dashboard*
*   Προσθέστε τη δυνατότητα πλοήγησης μεταξύ των προβολών *Heroes* και *Dashboard*
*   Όταν οι χρήστες κάνουν κλικ σε ένα όνομα ήρωα σε οποιαδήποτε προβολή, μεταβείτε σε μια αναλυτική προβολή του επιλεγμένου ήρωα
*   Όταν οι χρήστες κάνουν κλικ σε ένα *deep link* σε ένα μήνυμα ηλεκτρονικού ταχυδρομείου, ανοίξτε την προβολή λεπτομερειών για έναν συγκεκριμένο ήρωα

<div class="alert is-helpful">

Για το δείγμα εφαρμογής που περιγράφει αυτή η σελίδα, ανατρέξτε στο <live-example></live-example>.

</div>

Όταν τελειώσετε, οι χρήστες μπορούν να πλοηγηθούν στην εφαρμογή ως εξής:

<div class="lightbox">

<img alt="Προβολή πλοηγήσεων" src="generated/images/guide/toh/nav-diagram.png">

</div>

## Προσθέστε το `AppRoutingModule`

Στην Angular, η καλύτερη πρακτική είναι να φορτώσετε και να ρυθμίσετε το router σε ένα ξεχωριστό module στο πρώτο επίπεδο της εφαρμογής. Ο router είναι αφοσιωμένος στη δρομολόγηση και εισάγεται από το κεντρικό `AppModule`.

Κατά σύμβαση, το όνομα του class του module είναι `AppRoutingModule` και ανήκει στο `app-routing.module.ts` στον φάκελο `src/app`.

Εκτελέστε το `ng generate` για να δημιουργήσετε το routing module της εφαρμογής.

<code-example format="shell" language="shell">

ng generate module app-routing --flat --module=app

</code-example>

<div class="alert is-helpful">

| Παραμετρος      | Λεπτομερειες |
|:---            |:---     |
| `--flat`       | Βάζει το αρχείο στο `src/app` αντί για το δικό του φάκελο.                   |
| `--module=app` | Δίνει εντολή στο `ng generate` να το καταχωρήσει στην λίστα `imports` του `AppModule`.         |

</div>

Το αρχείο που δημιουργεί το `ng generate` μοιάζει με αυτό:

<code-example header="src/app/app-routing.module.ts (παραγόμενο)" path="toh-pt5/src/app/app-routing.module.0.ts"></code-example>

Αντικαταστήστε το με το εξής:

<code-example header="src/app/app-routing.module.ts (ενημερωμένο)" path="toh-pt5/src/app/app-routing.module.1.ts"></code-example>

Πρώτα, το αρχείο `app-routing.module.ts` κάνει import το `RouterModule` και το `Routes` ώστε η εφαρμογή να έχει ικανότητα δρομολόγησης. Το επόμενο import, `HeroesComponent`, δίνει εντολή στον Router κάπου να πάει μόλις διαμορφώσετε τις διαδρομές.

Παρατηρήστε ότι οι αναφορές `CommonModule` και η λίστα `declarations` δεν είναι απαραίτητες, επομένως δεν είναι
πλέον μέρος του `AppRoutingModule`. Οι ακόλουθες ενότητες εξηγούν το υπόλοιπο `AppRoutingModule` με περισσότερες λεπτομέρειες.

### Διαδρομές

Το επόμενο μέρος του αρχείου είναι όπου διαμορφώνετε τις διαδρομές σας.
Το *Routes* λέει στο Router ποια προβολή θα εμφανίζεται όταν ένας χρήστης κάνει κλικ σε έναν σύνδεσμο ή
επικολλά μια διεύθυνση URL στη γραμμή διευθύνσεων του προγράμματος περιήγησης.

Εφόσον το `app-routing.module.ts` εισάγει ήδη το `HeroesComponent`, μπορείτε να το χρησιμοποιήσετε στην λίστα `routes`:

<code-example header="src/app/app-routing.module.ts" path="toh-pt5/src/app/app-routing.module.ts" region="heroes-route"></code-example>

Ένα τυπικό `Route` της Angular έχει δύο ιδιότητες:

| Ιδιοτητες  | Λεπτομερειες |
|:---         |:---     |
| `path`      | Ένα κείμενο που ταιριάζει με τη διεύθυνση URL στη γραμμή διευθύνσεων του προγράμματος περιήγησης.                  |
| `component` | Το component που πρέπει να δημιουργήσει το router κατά την πλοήγηση σε αυτήν τη διαδρομή.                          |

Αυτό λέει στο router να αντιστοιχίσει αυτήν τη διεύθυνση URL με τη διαδρομή `path: 'heroes'`
και να εμφανίσει το `HeroesComponent` όταν η διεύθυνση URL είναι κάτι σαν `localhost:4200/heroes`.

### `RouterModule.forRoot()`

Τα μεταδεδομένα του `@NgModule` αρχικοποιούν το router και το ξεκινά να ακούει για αλλαγές στην τοποθεσία του προγράμματος περιήγησης.

Η ακόλουθη γραμμή προσθέτει το `RouterModule` στην λίστα `imports` του `AppRoutingModule` και
το παραμετροποιεί με το `routes` σε ένα βήμα καλώντας το
`RouterModule.forRoot()`:

<code-example header="src/app/app-routing.module.ts" path="toh-pt5/src/app/app-routing.module.ts" region="ngmodule-imports"></code-example>
<div class="alert is-helpful">

  Η μέθοδος ονομάζεται `forRoot()` επειδή ρυθμίζετε τις παραμέτρους του router στο πρώτο επίπεδο της εφαρμογής.
  Η μέθοδος `forRoot()` παρέχει τα providers των services και τα directives που απαιτούνται για τη δρομολόγηση,
  και εκτελεί την αρχική πλοήγηση με βάση την τρέχουσα διεύθυνση URL του προγράμματος περιήγησης.

</div>

Στη συνέχεια, το `AppRoutingModule` κάνει export το `RouterModule` ώστε να είναι διαθέσιμο σε όλη την εφαρμογή.

<code-example header="src/app/app-routing.module.ts (πίνακας exports)" path="toh-pt5/src/app/app-routing.module.ts" region="export-routermodule"></code-example>

## Προσθήκη `RouterOutlet`

Ανοίξτε το template του `AppComponent` και αντικαταστήστε το στοιχείο `<app-heroes>` με ένα στοιχείο `<router-outlet>`.

<code-example header="src/app/app.component.html (router-outlet)" path="toh-pt5/src/app/app.component.html" region="outlet"></code-example>

Το template του `AppComponent` δεν χρειάζεται πλέον το `<app-heroes>` επειδή η εφαρμογή εμφανίζει το `HeroesComponent` μόνο όταν ο χρήστης πλοηγηθεί σε αυτό.

Το `<router-outlet>` λέει στο router πού να εμφανίζει τις δρομολογημένες προβολές.

<div class="alert is-helpful">

Το `RouterOutlet` είναι ένα από τα directives του router που έγιναν διαθέσιμα στο `AppComponent`
επειδή το `AppModule` κάνει import το `AppRoutingModule` το οποίο κάνει export το `RouterModule`. Η εντολή `ng generate` που εκτελέσατε στην αρχή αυτού του σεμιναρίου, πρόσθεσε αυτό το import λόγω της επιλογής `--module=app`. Εάν δεν χρησιμοποιήσατε την εντολή `ng generate` για να δημιουργήσετε το `app-routing.module.ts`, εισάγετε το `AppRoutingModule` στο `app.module.ts` και προσθέστε το στην λίστα `imports` του `NgModule`.

</div>

#### Δοκιμάστε το

Εάν δεν τρέχετε ήδη την εφαρμογή σας, εκτελέστε το `ng serve` για να δείτε την εφαρμογή σας στο πρόγραμμα περιήγησης.

Το πρόγραμμα περιήγησης πρέπει να ανανεώσει και να εμφανίσει τον τίτλο της εφαρμογής αλλά όχι τη λίστα των ηρώων.

Κοιτάξτε τη γραμμή διευθύνσεων του προγράμματος περιήγησης.
Η διεύθυνση URL τελειώνει σε `/`.
Η διαδρομή προς το `HeroesComponent` είναι `/heroes`.

Προσθέστε το `/heroes` στην διεύθυνση URL στη γραμμή διευθύνσεων του προγράμματος περιήγησης.
Θα πρέπει να δείτε την γνωστή προβολή overview/detail των ηρώων.

Αφαιρέστε το `/heroes` από τη διεύθυνση URL στη γραμμή διευθύνσεων του προγράμματος περιήγησης.
Το πρόγραμμα περιήγησης πρέπει να ανανεώσει και να εμφανίσει τον τίτλο της εφαρμογής αλλά όχι τη λίστα των ηρώων.

<a id="routerlink"></a>

## Προσθέστε ένα συνδέσμο πλοήγησης χρησιμοποιώντας το `routerLink`

Ιδανικά, οι χρήστες θα πρέπει να μπορούν να κάνουν κλικ σε έναν σύνδεσμο για πλοήγηση
παρά να επικολλήσουν μια διεύθυνση URL διαδρομής στη γραμμή διευθύνσεων.

Προσθέστε ένα στοιχείο `<nav>` και, μέσα σε αυτό, ένα στοιχείο anchor στο οποίο, όταν κάνετε κλικ,
ενεργοποιεί την πλοήγηση στο `HeroesComponent`.
Το αναθεωρημένο template του `AppComponent` μοιάζει με αυτό:

<code-example header="src/app/app.component.html (heroes RouterLink)" path="toh-pt5/src/app/app.component.html" region="heroes"></code-example>

Ένα [attribute `routerLink`](#routerlink) έχει οριστεί ως `"/heroes"`,
το οποίο είναι το κείμενο που αντιστοιχεί το router στη διαδρομή προς το `HeroesComponent`.
Το `routerLink` είναι το selector για το [directive `RouterLink`](/api/router/RouterLink)
που μετατρέπει τα κλικ των χρηστών σε πλοήγηση του router.
Είναι άλλο ένα από τα public directives στο `RouterModule`.

Το πρόγραμμα περιήγησης ανανεώνει και εμφανίζει τον τίτλο της εφαρμογής και τον σύνδεσμο των ηρώων,
αλλά όχι την λίστα των ηρώων.

Κάντε κλικ στον σύνδεσμο.
Η γραμμή διευθύνσεων αλλάζει σε `/heroes` και εμφανίζεται η λίστα των ηρώων.

<div class="alert is-helpful">

Κάντε αυτόν και τους μελλοντικούς συνδέσμους πλοήγησης να φαίνονται καλύτεροι προσθέτοντας στυλ CSS στο `app.component.css`
όπως αναφέρεται στην [τελική επισκόπηση κώδικα](#appcomponent) παρακάτω.

</div>

## Προσθέστε μια προβολή dashboard

Η δρομολόγηση έχει πιο νόημα όταν η εφαρμογή σας έχει παραπάνω από μία προβολές, παρόλα αυτά η εφαρμογή *Tour of Heroes* έχει μόνο την προβολή των ηρώων.

Για να προσθέσετε ένα `DashboardComponent`, εκτελέστε το `ng generate` όπως φαίνεται εδώ:

<code-example format="shell" language="shell">

ng generate component dashboard

</code-example>

Το `ng generate` δημιουργεί τα αρχεία για το `DashboardComponent` και το δηλώνει στο `AppModule`.

Αντικαταστήστε το προεπιλεγμένο περιεχόμενο σε αυτά τα αρχεία ως εξής:

<code-tabs>
    <code-pane header="src/app/dashboard/dashboard.component.html" path="toh-pt5/src/app/dashboard/dashboard.component.1.html"></code-pane>
    <code-pane header="src/app/dashboard/dashboard.component.ts" path="toh-pt5/src/app/dashboard/dashboard.component.ts"></code-pane>
    <code-pane header="src/app/dashboard/dashboard.component.css" path="toh-pt5/src/app/dashboard/dashboard.component.css"></code-pane>
</code-tabs>

Το *template* παρουσιάζει ένα πλέγμα από συνδέσμους ονόματος ηρώων.

*   Το `*ngFor` δημιουργεί όσους συνδέσμους υπάρχουν στην λίστα `heroes` του component.
*   Οι σύνδεσμοι διαμορφώνονται ως χρωματιστά κομμάτια από το `dashboard.component.css`.
*   Οι σύνδεσμοι δεν οδηγούν πουθενά ακόμα.

Το *class* είναι σαν το class `HeroesComponent`.
*   Ορίζει μια ιδιότητα λίστας `heroes`
*   Το constructor αναμένει από την Angular να εισάγει το `HeroService` σε μια private ιδιότητα `heroService`
*   Το lifecycle hook `ngOnInit()` καλεί το `getHeroes()`

Αυτό το `getHeroes()` επιστρέφει τη λίστα των ηρώων σε κομμάτια στις θέσεις 1 και 5, επιστρέφοντας μόνο τέσσερις από τους ήρωες two, three, four, και five.

<code-example header="src/app/dashboard/dashboard.component.ts" path="toh-pt5/src/app/dashboard/dashboard.component.ts" region="getHeroes"></code-example>

### Προσθέστε τη διαδρομή του dashboard

Για πλοήγηση στο dashboard, το router χρειάζεται μια κατάλληλη διαδρομή.

Κάντε import το `DashboardComponent` στο αρχείο `app-routing-module.ts`.

<code-example header="src/app/app-routing.module.ts (import DashboardComponent)" path="toh-pt5/src/app/app-routing.module.ts" region="import-dashboard"></code-example>

Προσθέστε μια διαδρομή στην λίστα `routes` που ταιριάζει με μια διαδρομή προς το `DashboardComponent`.

<code-example header="src/app/app-routing.module.ts" path="toh-pt5/src/app/app-routing.module.ts" region="dashboard-route"></code-example>

### Προσθέστε μια προεπιλεγμένη διαδρομή

Όταν ξεκινά η εφαρμογή, η γραμμή διευθύνσεων του προγράμματος περιήγησης οδηγεί στην κεντρική σελίδα του ιστότοπου.
Αυτό δεν ταιριάζει με καμία υπάρχουσα διαδρομή, επομένως το router δεν πλοηγείται πουθενά.
Ο χώρος κάτω από το `<router-outlet>` είναι κενός.

Για να κάνετε την εφαρμογή να πλοηγηθεί αυτόματα στο dashboard, προσθέστε την ακόλουθη
διαδρομή στην λίστα `routes`.

<code-example header="src/app/app-routing.module.ts" path="toh-pt5/src/app/app-routing.module.ts" region="redirect-route"></code-example>

Αυτή η διαδρομή ανακατευθύνει μια διεύθυνση URL που ταιριάζει πλήρως με την κενή διαδρομή στη διαδρομή της οποίας η ιδιότητα path έχει την τιμή `'/dashboard'`.

Μετά την ανανέωση του προγράμματος περιήγησης, το router φορτώνει το `DashboardComponent`
και η γραμμή διευθύνσεων του προγράμματος περιήγησης εμφανίζει τη διεύθυνση URL `/dashboard`.

### Προσθήκη συνδέσμου του dashboard στο κέλυφος

Ο χρήστης θα πρέπει να μπορεί να πλοηγείται μεταξύ του
`DashboardComponent` και του `HeroesComponent` κάνοντας κλικ στους συνδέσμους στη
περιοχή πλοήγησης κοντά στην κορυφή της σελίδας.

Προσθέστε έναν σύνδεσμο πλοήγησης του dashboard στο template του κελύφους `AppComponent`, ακριβώς πάνω από τον σύνδεσμο *Heroes*.

<code-example header="src/app/app.component.html" path="toh-pt5/src/app/app.component.html"></code-example>

Μετά την ανανέωση του προγράμματος περιήγησης, μπορείτε να πλοηγηθείτε ελεύθερα μεταξύ των δύο προβολών κάνοντας κλικ στους συνδέσμους.

<a id="hero-details"></a>

## Πλοήγηση στις λεπτομέρειες του ήρωα

Το `HeroDetailComponent` εμφανίζει τις λεπτομέρειες ενός επιλεγμένου ήρωα.
Προς το παρόν το `HeroDetailComponent` είναι ορατό μόνο στο κάτω μέρος του `HeroesComponent`

Ο χρήστης θα πρέπει να μπορεί να φτάσει σε αυτές τις λεπτομέρειες με τρεις τρόπους.

1.  Κάνοντας κλικ σε έναν ήρωα στο dashboard.
1.  Κάνοντας κλικ σε έναν ήρωα στη λίστα ηρώων.
1.  Επικολλώντας μια διεύθυνση URL "deep link" στη γραμμή διευθύνσεων του προγράμματος περιήγησης που προσδιορίζει τον ήρωα που θα εμφανιστεί.

Αυτή η ενότητα ενεργοποιεί την πλοήγηση στο `HeroDetailComponent`
και την αποδεσμεύει από το `HeroesComponent`.

### Διαγραφή *στοιχείων ήρωα* από το `HeroesComponent`

Όταν ο χρήστης κάνει κλικ σε ένα ήρωα στο `HeroesComponent`,
η εφαρμογή θα πρέπει να μεταβεί στο `HeroDetailComponent`,
αντικαθιστώντας την προβολή της λίστας ηρώων με την προβολή λεπτομερειών του ήρωα.
Η προβολή λίστας ηρώων δεν θα πρέπει πλέον να εμφανίζει τις λεπτομέρειες του ήρωα όπως τώρα.

Ανοίξτε το `heroes/heroes.component.html` και αφαιρέστε το στοιχείο `<app-hero-detail>` από το κάτω μέρος.

Κάνοντας κλικ σε έναν ήρωα τώρα δεν γίνεται τίποτα.
Μπορείτε να το διορθώσετε αφού ενεργοποιήσετε τη δρομολόγηση στο `HeroDetailComponent`.

### Προσθέστε μια διαδρομή *στοιχείων ήρωα*

Μια διεύθυνση URL όπως το `~/detail/11` θα ήταν μια καλή διεύθυνση URL για πλοήγηση στην προβολή *Hero Detail* του ήρωα του οποίου το `id` είναι `11`.

Ανοίξτε το `app-routing.module.ts` και κάντε import το `HeroDetailComponent`.

<code-example header="src/app/app-routing.module.ts (import HeroDetailComponent)" path="toh-pt5/src/app/app-routing.module.ts" region="import-herodetail"></code-example>

Στη συνέχεια, προσθέστε μια *παραμετροποιημένη* διαδρομή στην λίστα `routes` που ταιριάζει με το μοτίβο διαδρομής στην προβολή *στοιχεία ήρωα*.

<code-example header="src/app/app-routing.module.ts" path="toh-pt5/src/app/app-routing.module.ts" region="detail-route"></code-example>

Η άνω και κάτω τελεία `:` στο `path` υποδηλώνει ότι το `:id` θα αντικατασταθεί από ένα συγκεκριμένο `id` ήρωα.

Σε αυτό το σημείο, όλες οι διαδρομές εφαρμογής είναι στη θέση τους.

<code-example header="src/app/app-routing.module.ts (όλες οι διαδρομές)" path="toh-pt5/src/app/app-routing.module.ts" region="routes"></code-example>

### Σύνδεσμοι ηρώων του `DashboardComponent`

Οι σύνδεσμοι ηρώων του `DashboardComponent` δεν κάνουν τίποτα αυτή τη στιγμή.

Τώρα που το router έχει μια διαδρομή προς το `HeroDetailComponent`,
διορθώστε τους συνδέσμους των ηρώων του dashboard ώστε να κάνουν πλοήγηση χρησιμοποιώντας την *παραμετροποιημένη* διαδρομή του dashboard.

<code-example header="src/app/dashboard/dashboard.component.html (σύνδεσμοι ηρώων)" path="toh-pt5/src/app/dashboard/dashboard.component.html" region="click"></code-example>

Χρησιμοποιείτε το [interpolation binding](guide/interpolation) της Angular μέσα στο `*ngFor`
για να εισάγετε το `hero.id` της τρέχουσας επανάληψης σε καθε
[`routerLink`](#routerlink).

<a id="heroes-component-links"></a>

### Σύνδεσμοι ηρώων του `HeroesComponent`

Οι ήρωες στο `HeroesComponent` είναι στοιχεία `<li>` των οποίων τα events click
είναι συνδεδεμένα με την μέθοδο `onSelect()` του component.

<code-example header="src/app/heroes/heroes.component.html (λίστα με onSelect)" path="toh-pt4/src/app/heroes/heroes.component.html" region="list"></code-example>

Αφαιρέστε το `<li>` μόνο στο `*ngFor` του.
Προσθέστε ένα στοιχείο anchor `<a>` γύρω από το badge και το name.
Προσθέστε ένα attribute `routerLink` στο anchor το οποίο είναι το ίδιο όπως στο template του dashboard.

<code-example header="src/app/heroes/heroes.component.html (λίστα με συνδέσμους)" path="toh-pt5/src/app/heroes/heroes.component.html" region="list"></code-example>

Θυμηθείτε να διορθώσετε το αρχείο στυλ `heroes.component.css` για να κάνετε
την λίστα να φαίνεται όπως πριν.
Τα αναθεωρημένα στυλ βρίσκονται στην [τελική επισκόπηση κώδικα](#heroescomponent) στο κάτω μέρος αυτού του οδηγού.

#### Αφαίρεση αχρησιμοποίητου κώδικα - προαιρετικό

Ενώ το class `HeroesComponent` εξακολουθεί να λειτουργεί,
η μέθοδος `onSelect()` και η ιδιότητα `selectedHero` δεν χρησιμοποιούνται πλέον.

Είναι ωραίο να τακτοποιείτε τα πράγματα για τον εαυτό σας αργότερα.
Εδώ είναι το class μετά την απομάκρυνση του αχρησιμοποίητου κώδικα.

<code-example header="src/app/heroes/heroes.component.ts (καθαρισμένο)" path="toh-pt5/src/app/heroes/heroes.component.ts" region="class"></code-example>

## `HeroDetailComponent` με δυνατότητα δρομολόγησης

Το parent `HeroesComponent` έθετε την ιδιότητα `HeroDetailComponent.hero`
και το `HeroDetailComponent` εμφάνιζε τον ήρωα.

Το `HeroesComponent` δεν το κάνει πια.
Τώρα το router δημιουργεί το `HeroDetailComponent` ως απόκριση σε μια διεύθυνση URL όπως το `~/detail/12`.

Το `HeroDetailComponent` χρειάζεται έναν νέο τρόπο για να αποκτήσει τον ήρωα που θα εμφανίσει.
Αυτή η ενότητα εξηγεί τα ακόλουθα:

*   Αποκτήστε τη διαδρομή που το δημιούργησε
*   Εξαγάγετε το `id` από τη διαδρομή
*   Αποκτήστε τον ήρωα με αυτό το `id` από τον διακομιστή χρησιμοποιώντας το `HeroService`

Προσθέστε τα ακόλουθα imports:

<code-example header="src/app/hero-detail/hero-detail.component.ts" path="toh-pt5/src/app/hero-detail/hero-detail.component.ts" region="added-imports"></code-example>

<a id="hero-detail-ctor"></a>

Εισαγάγετε τα services `ActivatedRoute`, `HeroService`, και `Location`
στο constructor, αποθηκεύοντας τις τιμές τους σε private πεδία:

<code-example header="src/app/hero-detail/hero-detail.component.ts" path="toh-pt5/src/app/hero-detail/hero-detail.component.ts" region="ctor"></code-example>

Το [`ActivatedRoute`](api/router/ActivatedRoute) περιέχει πληροφορίες σχετικά με τη διαδρομή προς αυτήν την οντότητα του `HeroDetailComponent`.
Αυτό το component ενδιαφέρεται για τις παραμέτρους της διαδρομής που εξάγονται από τη διεύθυνση URL.
Η παράμετρος "id" είναι το `id` του ήρωα που θα εμφανιστεί.

Το [`HeroService`](tutorial/toh-pt4) λαμβάνει δεδομένα ηρώων από τον απομακρυσμένο διακομιστή
και αυτό το component τα χρησιμοποιεί για να πάρει τον ήρωα-προς-εμφάνιση.

Το [`location`](api/common/Location) είναι ένα service της Angular για αλληλεπίδραση με το πρόγραμμα περιήγησης.
Αυτό το service σας επιτρέπει να πλοηγηθείτε πίσω στην προηγούμενη προβολή.

### Εξαγάγετε την παράμετρο διαδρομής `id`

Στο [lifecycle hook](guide/lifecycle-hooks#oninit) `ngOnInit()`
καλέστε το `getHero()` και ορίστε το ως εξής.

<code-example header="src/app/hero-detail/hero-detail.component.ts" path="toh-pt5/src/app/hero-detail/hero-detail.component.ts" region="ngOnInit"></code-example>

Το `route.snapshot` είναι μια στατική εικόνα των πληροφοριών διαδρομής λίγο μετά τη δημιουργία του component.

To `paramMap` είναι ένα dictionary από τιμές παραμέτρων διαδρομής που εξάγονται από τη διεύθυνση URL.
Το κλειδί `"id"` επιστρέφει το `id` του ήρωα που πρέπει να ανακτηθεί.

Οι παράμετροι διαδρομής είναι πάντα κείμενο.
Η συνάρτηση `Number` της JavaScript μετατρέπει το κείμενο σε αριθμό,
που είναι αυτό που πρέπει να είναι το `id` ενός ήρωα.

Το πρόγραμμα περιήγησης ανανεώνεται και η εφαρμογή αποτυγχάνει με ένα σφάλμα μεταγλώττισης.
Το `HeroService` δεν διαθέτει μέθοδο `getHero()`.
Προσθέστε το τώρα.

### Προσθήκη `HeroService.getHero()`

Ανοίξτε το `HeroService` και προσθέστε την ακόλουθη μέθοδο `getHero()` με το `id` μετά τη μέθοδο `getHeroes()`:

<code-example header="src/app/hero.service.ts (getHero)" path="toh-pt5/src/app/hero.service.ts" region="getHero"></code-example>

<div class="alert is-important">

**ΣΗΜΑΝΤΙΚΟ**: <br />
Τα backticks \( <code>&grave;</code> \) ορίζουν ένα [template literal](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals) στην JavaScript για την ενσωμάτωση του `id`.

</div>

Όπως το [`getHeroes()`](tutorial/toh-pt4#observable-heroservice),
το `getHero()` έχει ασύγχρονη μορφή.
Επιστρέφει έναν *εικονικό ήρωα* ως `Observable`, χρησιμοποιώντας τη συνάρτηση `of()` του RxJS.

Μπορείτε να ξανά-γράψετε το `getHero()` ώς ένα πραγματικό αίτημα `Http`
χωρίς να χρειαστεί να αλλάξετε το `HeroDetailComponent` που το καλεί.

#### Δοκιμάστε το

Το πρόγραμμα περιήγησης ανανεώνεται και η εφαρμογή λειτουργεί ξανά.
Μπορείτε να κάνετε κλικ σε έναν ήρωα στο dashboard ή στη λίστα ηρώων και να μεταβείτε στην προβολή λεπτομερειών αυτού του ήρωα.

Εάν επικολλήσετε το `localhost:4200/detail/12` στη γραμμή διευθύνσεων του προγράμματος περιήγησης,
το router πλοηγείται στην προβολή λεπτομερειών για τον ήρωα με `id: 12`, **Dr Nice**.

<a id="goback"></a>

### Επιστρέφοντας πίσω

Κάνοντας κλικ στο κουμπί επιστροφής του προγράμματος περιήγησης,
μπορείτε να επιστρέψετε στην προηγούμενη σελίδα. Αυτή θα μπορούσε να είναι η λίστα ηρώων ή η προβολή του dashboard,
ανάλογα με το ποιο σας έστειλε στην προβολή λεπτομερειών.

Θα ήταν ωραίο να υπάρχει ένα κουμπί στην προβολή `HeroDetail` που μπορεί να το κάνει αυτό.

Προσθέστε ένα κουμπί *επιστροφή πίσω* στο κάτω μέρος του template του component και συνδέστε το
στη μέθοδο `goBack()` του component.

<code-example header="src/app/hero-detail/hero-detail.component.html (κουμπί επιστροφής)" path="toh-pt5/src/app/hero-detail/hero-detail.component.html" region="back-button"></code-example>

Προσθέστε μια *μέθοδο* `goBack()` στο class του component που πλοηγείται προς τα πίσω ένα βήμα
στο ιστορικό του προγράμματος περιήγησης
χρησιμοποιώντας το service `Location` που [εισαγάγατε πριν](#hero-detail-ctor).

<code-example header="src/app/hero-detail/hero-detail.component.ts (goBack)" path="toh-pt5/src/app/hero-detail/hero-detail.component.ts" region="goBack"></code-example>

Ανανεώστε το πρόγραμμα περιήγησης και ξεκινήστε να κάνετε κλικ.
Οι χρήστες μπορούν τώρα να περιηγηθούν στην εφαρμογή χρησιμοποιώντας τα νέα κουμπιά.

Οι λεπτομέρειες φαίνονται καλύτερες όταν προσθέσετε τα στυλ CSS στο `hero-detail.component.css`
όπως αναφέρεται σε μία από τις καρτέλες της ["τελικής επισκόπησης κώδικα"](#τελική-επισκόπηση-κώδικα) παρακάτω.

## Τελική επισκόπηση κώδικα

Αυτά είναι τα αρχεία κώδικα που συζητήθηκαν σε αυτήν τη σελίδα.

<a id="approutingmodule"></a>
<a id="appmodule"></a>

#### `AppRoutingModule`, `AppModule`, and `HeroService`

<code-tabs>
    <code-pane header="src/app/app.module.ts" path="toh-pt5/src/app/app.module.ts"></code-pane>
    <code-pane header="src/app/app-routing.module.ts" path="toh-pt5/src/app/app-routing.module.ts"></code-pane>
    <code-pane header="src/app/hero.service.ts" path="toh-pt5/src/app/hero.service.ts"></code-pane>
</code-tabs>

<a id="appcomponent"></a>

#### `AppComponent`

<code-tabs>
    <code-pane header="src/app/app.component.html" path="toh-pt5/src/app/app.component.html"></code-pane>
    <code-pane header="src/app/app.component.ts" path="toh-pt5/src/app/app.component.ts"></code-pane>
    <code-pane header="src/app/app.component.css" path="toh-pt5/src/app/app.component.css"></code-pane>
</code-tabs>

<a id="dashboardcomponent"></a>

#### `DashboardComponent`

<code-tabs>
    <code-pane header="src/app/dashboard/dashboard.component.html" path="toh-pt5/src/app/dashboard/dashboard.component.html"></code-pane>
    <code-pane header="src/app/dashboard/dashboard.component.ts" path="toh-pt5/src/app/dashboard/dashboard.component.ts"></code-pane>
    <code-pane header="src/app/dashboard/dashboard.component.css" path="toh-pt5/src/app/dashboard/dashboard.component.css"></code-pane>
</code-tabs>

<a id="heroescomponent"></a>

#### `HeroesComponent`

<code-tabs>
    <code-pane header="src/app/heroes/heroes.component.html" path="toh-pt5/src/app/heroes/heroes.component.html"></code-pane>
    <code-pane header="src/app/heroes/heroes.component.ts" path="toh-pt5/src/app/heroes/heroes.component.ts"></code-pane>
    <code-pane header="src/app/heroes/heroes.component.css" path="toh-pt5/src/app/heroes/heroes.component.css"></code-pane>
</code-tabs>

<a id="herodetailcomponent"></a>

#### `HeroDetailComponent`

<code-tabs>
    <code-pane header="src/app/hero-detail/hero-detail.component.html" path="toh-pt5/src/app/hero-detail/hero-detail.component.html"></code-pane>
    <code-pane header="src/app/hero-detail/hero-detail.component.ts" path="toh-pt5/src/app/hero-detail/hero-detail.component.ts"></code-pane>
    <code-pane header="src/app/hero-detail/hero-detail.component.css" path="toh-pt5/src/app/hero-detail/hero-detail.component.css"></code-pane>
</code-tabs>

## Περίληψη

*   Προσθέσατε το router της Angular για πλοήγηση μεταξύ διαφορετικών components
*   Μετατρέψατε το `AppComponent` σε κέλυφος πλοήγησης με συνδέσμους`<a>` και ένα `<router-outlet>`
*   Διαμορφώσατε το router σε ένα `AppRoutingModule`
*   Ορίσατε διαδρομές, μια διαδρομή ανακατεύθυνσης και μια παραμετροποιημένη διαδρομή
*   Χρησιμοποιήσατε το directive `routerLink` σε στοιχεία anchor
*   Αναμορφώσατε μια tightly coupled προβολή main/detail σε μια δρομολογημένη προβολή λεπτομερειών
*   Χρησιμοποιήσατε παραμέτρους συνδέσμων του router για να πλοηγηθείτε στην προβολή λεπτομερειών ενός ήρωα επιλεγμένου από τον χρήστη
*   Μοιραστήκατε το `HeroService` με άλλα components

@reviewed 2022-11-06
