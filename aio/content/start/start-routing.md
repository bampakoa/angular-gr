# Προσθήκη πλοήγησης

Αυτός ο οδηγός βασίζεται στο πρώτο βήμα του σεμιναρίου Ξεκινώντας με την Angular, [Ξεκινήστε με μια βασική εφαρμογή Angular](start "Ξεκινήστε με μια βασική εφαρμογή Angular").

Σε αυτό το στάδιο ανάπτυξης, η εφαρμογή ηλεκτρονικού καταστήματος διαθέτει έναν βασικό κατάλογο προϊόντων.

Στις παρακάτω ενότητες, θα προσθέσετε τις ακόλουθες δυνατότητες στην εφαρμογή:

*   Πληκτρολογήστε μια διεύθυνση URL στη γραμμή διευθύνσεων για να πλοηγηθείτε στην αντίστοιχη σελίδα προϊόντος
*   Κάντε κλικ σε συνδέσμους στη σελίδα για πλοήγηση μέσα στην εφαρμογή
*   Κάντε κλικ στα κουμπιά πίσω και εμπρός του προγράμματος περιήγησης για να περιηγηθείτε στο ιστορικό του

<a id="define-routes"></a>

## Συσχετίστε μια διαδρομή URL με ένα component

Η εφαρμογή χρησιμοποιεί ήδη το Angular `Router` για να πλοηγηθεί στο `ProductListComponent`.
Αυτή η ενότητα σάς δείχνει πώς να ορίσετε μια διαδρομή για την εμφάνιση μεμονωμένων λεπτομερειών προϊόντος.

1.  Δημιουργείστε ένα νέο component για τις λεπτομέρειες του προϊόντος.
    Στο terminal δημιουργείστε ένα νέο component `product-details` εκτελώντας την ακόλουθη εντολή:

    <code-example format="shell" language="shell">

    ng generate component product-details

    </code-example>

1.  Στο `app.module.ts`, προσθέστε μια διαδρομή για τις λεπτομέρειες προϊόντος, ορίζοντας το `path` ως `products/:productId` και το `ProductDetailsComponent` για το `component`.

    <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="product-details-route">
    </code-example>

1.  Ανοίξτε το `product-list.component.html`.

1.  Τροποποιήστε το στοιχείο anchor για το όνομα του προϊόντος ώστε να περιέχει ένα `routerLink` με την τιμή `product.id` ως παράμετρο.

    <code-example header="src/app/product-list/product-list.component.html" path="getting-started/src/app/product-list/product-list.component.html" region="router-link">
    </code-example>

    Το directive `RouterLink` βοηθά να προσαρμόσετε το στοιχείο anchor.
    Σε αυτήν την περίπτωση, η διαδρομή ή η διεύθυνση URL περιέχει ένα σταθερό τμήμα, `/products`.
    Το τελικό τμήμα είναι μεταβλητό, εισάγοντας την ιδιότητα `id` του τρέχοντος προϊόντος.
    Για παράδειγμα, η διεύθυνση URL για ένα προϊόν με `id` 1 θα ήταν παρόμοια με το `https://getting-started-myfork.stackblitz.io/products/1`.

1.  Βεβαιωθείτε ότι το router λειτουργεί όπως προβλέπεται κάνοντας κλικ στο όνομα του προϊόντος.
    Η εφαρμογή θα πρέπει να εμφανίζει το `ProductDetailsComponent`, το οποίο προς το παρόν λέει "product-details works!"

    Παρατηρήστε ότι η διεύθυνση URL στο παράθυρο προεπισκόπησης αλλάζει.
    Το τελικό τμήμα είναι το `products/#`  όπου `#` είναι ο αριθμός της διαδρομής που κάνατε κλικ.

    <div class="lightbox">

    <img alt="Προβολή λεπτομερειών προϊόντος με ενημερωμένη διεύθυνση URL" src="generated/images/guide/start/product-details-works.png">
    
    </div>

## Προβολή λεπτομερειών προϊόντος

Το `ProductDetailsComponent` χειρίζεται την εμφάνιση κάθε προϊόντος.
Το Angular Router εμφανίζει components με βάση τη διεύθυνση URL του προγράμματος περιήγησης και τις [καθορισμένες διαδρομές σας](#define-routes).

Σε αυτήν την ενότητα, θα χρησιμοποιήσετε το Angular Router για να συνδυάσετε τα δεδομένα `products` και τις πληροφορίες διαδρομής για να εμφανίσετε τις συγκεκριμένες λεπτομέρειες για κάθε προϊόν.

1.  Στο `product-details.component.ts`, κάντε import το `ActivatedRoute` από το `@angular/router`, και την λίστα `products` από το `../products`.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="imports"></code-example>

1.  Ορίστε την ιδιότητα `product`.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="product-prop"></code-example>

1.  Εισάγετε το `ActivatedRoute` μέσα στο `constructor()` προσθέτοντας το `private route: ActivatedRoute`ως όρισμα μέσα στις παρενθέσεις του constructor.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="props-methods"></code-example>

    Το `ActivatedRoute` είναι συγκεκριμένο για κάθε component που φορτώνει το Angular Router.
    Το `ActivatedRoute` περιέχει πληροφορίες σχετικά με τη διαδρομή και τις παραμέτρους της διαδρομής.

    Με την εισαγωγή του `ActivatedRoute`, διαμορφώνετε το component ώστε να χρησιμοποιεί ένα service.
    Το βήμα [Διαχείριση δεδομένων](start/start-data "Δοκιμάστε το: Διαχείριση δεδομένων") καλύπτει τα services με περισσότερες λεπτομέρειες.

1.  Στην μέθοδο `ngOnInit()`, διαβάστε το `productId` από τις παραμέτρους διαδρομής και βρείτε το αντίστοιχο προϊόν στην λίστα `products`.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.1.ts" region="get-product"></code-example>

    Οι παράμετροι διαδρομής αντιστοιχούν στις μεταβλητές διαδρομής που ορίζετε στη διαδρομή.
    Για να αποκτήσουμε πρόσβαση στις παραμέτρους διαδρομής, χρησιμοποιούμε το `route.snapshot`, το οποίο είναι το `ActivatedRouteSnapshot` που περιέχει πληροφορίες σχετικά με την ενεργή διαδρομή τη συγκεκριμένη χρονική στιγμή.
    Η διεύθυνση URL που αντιστοιχεί στη διαδρομή παρέχει το `productId` .
    Η Angular χρησιμοποιεί το `productId` για να εμφανίσει τις λεπτομέρειες για κάθε μοναδικό προϊόν.

1.  Ενημερώστε το template του `ProductDetailsComponent` για να εμφανίσετε τις λεπτομέρειες του προϊόντος με ένα `*ngIf`.
    Εάν υπάρχει ένα προϊόν, το `<div>` εμφανίζεται με ένα όνομα, μια τιμή και μια περιγραφή.

    <code-example header="src/app/product-details/product-details.component.html" path="getting-started/src/app/product-details/product-details.component.html" region="details"></code-example>

    Η γραμμή `<h4>{{ product.price | currency }}</h4>`, χρησιμοποιεί το pipe `currency` για να μετατρέψει το `product.price` από έναν αριθμό σε κείμενο που περιλαμβάνει το σύμβολο του νομίσματος.
    Το pipe είναι ένας τρόπος με τον οποίο μπορείτε να μετατρέψετε δεδομένα στο template HTML σας.
    Για περισσότερες πληροφορίες σχετικά με τα pipes της Angular, ανατρέξτε στην ενότητα [Pipes](guide/pipes "Pipes").

Όταν οι χρήστες κάνουν κλικ σε ένα όνομα στη λίστα προϊόντων, το router τους πλοηγεί στη διακριτή διεύθυνση URL για το προϊόν, εμφανίζει το `ProductDetailsComponent`, και εμφανίζει τις λεπτομέρειες του προϊόντος.

<div class="lightbox">

<img alt="Σελίδα λεπτομερειών προϊόντος με ενημερωμένη διεύθυνση URL και εμφάνιση πλήρων λεπτομερειών" src="generated/images/guide/start/product-details-routed.png">

</div>

Για περισσότερες πληροφορίες σχετικά με το Angular Router, ανατρέξτε στην ενότητα [Δρομολόγηση και πλοήγηση](guide/router "Οδηγός δρομολόγησης και πλοήγησης").

## Στην συνέχεια

Έχετε διαμορφώσει την εφαρμογή σας ώστε να μπορείτε να προβάλλετε τις λεπτομέρειες του προϊόντος, το καθένα με μια ξεχωριστή διεύθυνση URL.

Για να συνεχίσετε την εξερεύνηση της Angular:

*   Συνεχίστε στη [Διαχείριση δεδομένων](start/start-data "Δοκιμάστε το: Διαχείριση δεδομένων") για να προσθέσετε μια λειτουργία καλαθιού αγορών, να διαχειριστείτε τα δεδομένα του καλαθιού και να ανακτήσετε εξωτερικά δεδομένα για τις τιμές αποστολής
*   Συνεχίστε στο [Deployment](start/start-deployment "Δοκιμάστε το: Deployment") για να ανεβάσετε την εφαρμογή σας στο Firebase ή να μεταβείτε σε τοπική ανάπτυξη

@reviewed 2022-05-21
