# Διαχείριση δεδομένων

Αυτός ο οδηγός βασίζεται στο δεύτερο βήμα του σεμιναρίου [Ξεκινήστε με μια βασική εφαρμογή Angular](start), [Προσθήκη πλοήγησης](start/start-routing "Προσθήκη πλοήγησης").
Σε αυτό το στάδιο ανάπτυξης, η εφαρμογή καταστήματος διαθέτει κατάλογο προϊόντων με δύο προβολές: λίστα προϊόντων και λεπτομέρειες προϊόντων.
Οι χρήστες μπορούν να κάνουν κλικ σε ένα όνομα προϊόντος από τη λίστα για να δουν λεπτομέρειες σε μια νέα προβολή, με ξεχωριστή διεύθυνση URL ή διαδρομή.

Αυτό το βήμα του σεμιναρίου σάς καθοδηγεί στη δημιουργία ενός καλαθιού αγορών στις ακόλουθες φάσεις:

*   Ενημερώστε την προβολή λεπτομερειών προϊόντος για να συμπεριλάβετε ένα κουμπί **Buy**, το οποίο προσθέτει το τρέχον προϊόν σε μια λίστα προϊόντων που διαχειρίζεται ένα service καλαθιού αγορών
*   Προσθέστε ένα component για το καλάθι, το οποίο εμφανίζει τα είδη στο καλάθι
*   Προσθέστε ένα component για την αποστολή, το οποίο ανακτά τις τιμές αποστολής για τα είδη στο καλάθι χρησιμοποιώντας το Angular `HttpClient` για την ανάκτηση δεδομένων αποστολής από ένα αρχείο `.json`

<a id="create-cart-service"></a>

## Δημιουργήστε το service καλαθιού αγορών

Στην Angular, ένα service είναι μια οντότητα ενός class που μπορείτε να διαθέσετε σε οποιοδήποτε μέρος της εφαρμογής σας χρησιμοποιώντας το σύστημα του [dependency injection](guide/glossary#dependency-injection-di "Ορισμός dependency injection") της Angular.

Προς το παρόν, οι χρήστες μπορούν να δουν πληροφορίες για ένα προϊόν, και η εφαρμογή μπορεί να προσομοιώνει την κοινή χρήση και τις ειδοποιήσεις σχετικά με αλλαγές προϊόντων.

Το επόμενο βήμα είναι να δημιουργήσετε έναν τρόπο ώστε οι χρήστες να προσθέτουν προϊόντα σε ένα καλάθι.
Αυτή η ενότητα σάς καθοδηγεί στην προσθήκη ενός κουμπιού **Buy** and και στη ρύθμιση ενός service καλαθιού για αποθήκευση πληροφοριών σχετικά με τα προϊόντα στο καλάθι.

<a id="generate-cart-service"></a>

### Καθορίστε ένα service καλαθιού

Αυτή η ενότητα σας καθοδηγεί στη δημιουργία του `CartService` που παρακολουθεί τα προϊόντα που προστίθενται στο καλάθι αγορών.

1.  Στο terminal δημιουργείστε ένα νέο service `cart` εκτελώντας την ακόλουθη εντολή:

    <code-example format="shell" language="shell">

    ng generate service cart

    </code-example>

1.  Κάντε import το interface `Product` από το `./products.ts` στο αρχείο `cart.service.ts`, και στο class `CartService`, ορίστε μια ιδιότητα `items` για να αποθηκεύσετε την λίστα των τρέχοντων προϊόντων στο καλάθι.

    <code-example header="src/app/cart.service.ts" path="getting-started/src/app/cart.service.ts" region="props"></code-example>

1.  Καθορίστε μεθόδους για να προσθέσετε είδη στο καλάθι, να διαβάσετε τα είδη του καλαθιού και να διαγράψετε τα είδη του καλαθιού.

    <code-example header="src/app/cart.service.ts" path="getting-started/src/app/cart.service.ts" region="methods"></code-example>

    *   Η μέθοδος `addToCart()` προσθέτει ένα προϊόν στην λίστα `items`

    *   Η μέθοδος `getItems()` συλλέγει τα είδη που προσθέτουν οι χρήστες στο καλάθι και επιστρέφει κάθε είδος με τη σχετική ποσότητα

    *   Η μέθοδος `clearCart()` επιστρέφει μια κενή λίστα από είδη, η οποία αδειάζει το καλάθι

<a id="product-details-use-cart-service"></a>

### Χρησιμοποιήστε το service καλαθιού

Αυτή η ενότητα σάς καθοδηγεί στη χρήση του `CartService` για να προσθέσετε ένα προϊόν στο καλάθι.

1.  Στο `product-details.component.ts`, κάντε import το service του καλαθιού.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.ts" region="cart-service"></code-example>

1.  Εισάγετε το service καλαθιού προσθέτοντάς το στο `constructor()`.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.ts" region="inject-cart-service"></code-example>

1.  Ορίστε την μέθοδο `addToCart()`, που προσθέτει το τρέχον προϊόν στο καλάθι.

    <code-example header="src/app/product-details/product-details.component.ts" path="getting-started/src/app/product-details/product-details.component.ts" region="add-to-cart"></code-example>

    Η μέθοδος `addToCart()` κάνει τα εξής:

    *   Παίρνει το τρέχων `product` σαν παράμετρο
    *   Χρησιμοποιεί την μέθοδο `addToCart()` του `CartService` για να προσθέσει το προϊόν στο καλάθι
    *   Εμφανίζει ένα μήνυμα ότι έχετε προσθέσει ένα προϊόν στο καλάθι

1.  Στο `product-details.component.html`, προσθέστε ένα κουμπί με το κείμενο **Buy**, και συνδέστε το event `click()` με την μέθοδο `addToCart()`.
    Αυτός ο κώδικας ενημερώνει το template των λεπτομερειών προϊόντος με ένα κουμπί **Buy** που προσθέτει το τρέχον προϊόν στο καλάθι.

    <code-example header="src/app/product-details/product-details.component.html" path="getting-started/src/app/product-details/product-details.component.html"></code-example>

1.  Βεβαιωθείτε ότι το νέο κουμπί **Buy** εμφανίζεται όπως αναμένεται, ανανεώνοντας την εφαρμογή και κάνοντας κλικ στο όνομα ενός προϊόντος για να εμφανιστούν τα στοιχεία του.

    <div class="lightbox">

    <img alt="Εμφάνιση λεπτομερειών για το επιλεγμένο προϊόν με ένα κουμπί Buy" src="generated/images/guide/start/product-details-buy.png">
    
    </div>

1.  Κάντε κλικ στο κουμπί **Buy** για να προσθέσετε το προϊόν στην αποθηκευμένη λίστα ειδών στο καλάθι και να εμφανίσετε ένα μήνυμα επιβεβαίωσης.

    <div class="lightbox">

    <img alt="Εμφάνιση λεπτομερειών για το επιλεγμένο προϊόν με ένα κουμπί Buy" src="generated/images/guide/start/buy-alert.png">
    
    </div>

## Δημιουργήστε την προβολή καλαθιού

Για να δουν οι πελάτες το καλάθι τους, μπορείτε να δημιουργήσετε την προβολή καλαθιού σε δύο βήματα:

1.  Δημιουργήστε ένα component καλαθιού και διαμορφώστε τη δρομολόγηση για το component.
1.  Εμφανίστε τα είδη του καλαθιού.

### Ρυθμίστε το component καλαθιού

 Για να δημιουργήσετε την προβολή καλαθιού, ακολουθήστε τα ίδια βήματα που κάνατε για να δημιουργήσετε το `ProductDetailsComponent` και διαμορφώστε τη δρομολόγηση για το νέο component.

1.  Δημιουργήστε ένα νέο component με το όνομα `cart` στο terminal εκτελώντας την ακόλουθη εντολή:

    <code-example format="shell" language="shell">

    ng generate component cart

    </code-example>

    Αυτή η εντολή θα δημιουργήσει το αρχείο `cart.component.ts` και τα σχετικά αρχεία template and στυλ.

    <code-example header="src/app/cart/cart.component.ts" path="getting-started/src/app/cart/cart.component.1.ts"></code-example>

    Το StackBlitz δημιουργεί επίσης ένα `ngOnInit()` στα components.  Μπορείτε να αγνοήσετε το `ngOnInit()` του `CartComponent` για αυτό το σεμινάριο.

1.  Παρατηρήστε ότι το νέο `CartComponent` προστέθηκε στα `declarations` του `app.module.ts`.

    <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="declare-cart"></code-example>

1.  Παραμένοντας στο `app.module.ts`, προσθέστε μια διαδρομή για το component `CartComponent`, βάζοντας σαν τιμή του `path` το `cart`.

    <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="cart-route"></code-example>

1.  Ενημερώστε το κουμπί **Checkout** ώστε να οδηγεί στη διεύθυνση URL `/cart`.
    Στο `top-bar.component.html`, προσθέστε ένα directive `routerLink` που οδηγεί στο `/cart`.

    <code-example header="src/app/top-bar/top-bar.component.html" path="getting-started/src/app/top-bar/top-bar.component.html" region="cart-route"></code-example>

1.  Επαληθεύστε ότι το νέο `CartComponent` λειτουργεί όπως αναμένεται, κάνοντας κλικ στο κουμπί **Checkout**.
    Μπορείτε να δείτε το κείμενο "cart works!", και η διεύθυνση URL έχει το μοτίβο `https://getting-started.stackblitz.io/cart`, όπου το `getting-started.stackblitz.io` μπορεί να είναι διαφορετικό για το StackBlitz project σας.

    <div class="lightbox">

    <img alt="Εμφάνιση προβολής καλαθιού πριν από την προσαρμογή" src="generated/images/guide/start/cart-works.png">
    
    </div>

### Εμφάνιση των ειδών του καλαθιού

Αυτή η ενότητα σάς δείχνει πώς να χρησιμοποιήσετε το service καλαθιού για να εμφανίσετε τα προϊόντα στο καλάθι.


1.  Στο `cart.component.ts`, κάντε import το `CartService` από το αρχείο `cart.service.ts`.

    <code-example header="src/app/cart/cart.component.ts" path="getting-started/src/app/cart/cart.component.2.ts" region="imports"></code-example>

1.  Εισάγετε το `CartService` έτσι ώστε το `CartComponent` να μπορεί να το χρησιμοποιήσει προσθέτοντάς το στο `constructor()`.

    <code-example header="src/app/cart/cart.component.ts" path="getting-started/src/app/cart/cart.component.2.ts" region="inject-cart"></code-example>

1.  Καθορίστε την ιδιότητα `items` για να αποθηκεύσετε τα προϊόντα στο καλάθι.

    <code-example header="src/app/cart/cart.component.ts" path="getting-started/src/app/cart/cart.component.2.ts" region="items"></code-example>

    Αυτός ο κώδικας ορίζει τα είδη χρησιμοποιώντας την μέθοδο `getItems()` του `CartService`.
    Ορίσατε αυτή την μέθοδο [όταν δημιουργήσατε το `cart.service.ts`](#generate-cart-service).

1.  Ενημερώστε το template του καλαθιού με μια κεφαλίδα και χρησιμοποιήστε ένα `<div>` με ένα `*ngFor` για να εμφανίσετε καθένα από τα είδη του καλαθιού με το όνομα και την τιμή του.
    Tο `CartComponent` που προκύπτει είναι το εξής.

    <code-example header="src/app/cart/cart.component.html" path="getting-started/src/app/cart/cart.component.2.html" region="prices"></code-example>

1.  Βεβαιωθείτε ότι το καλάθι σας λειτουργεί όπως αναμένεται:

    1.  Κάντε κλικ στο **My Store**.
    1.  Κάντε κλικ στο όνομα ενός προϊόντος για να εμφανίσετε τα στοιχεία του.
    1.  Κάντε κλικ στο **Buy** για να προσθέσετε το προϊόν στο καλάθι.
    1.  Κάντε κλικ στο **Checkout** για να δείτε το καλάθι.

    <div class="lightbox">

    <img alt="Προβολή καλαθιού με προστιθέμενα προϊόντα" src="generated/images/guide/start/cart-page-full.png">
    
    </div>

Για περισσότερες πληροφορίες σχετικά με τα services, ανατρέξτε στην ενότητα [Εισαγωγή στα Services και Dependency Injection](guide/architecture-services "Έννοιες > Εισαγωγή στα services και στο DI").

## Ανάκτηση τιμών αποστολής

Οι διακομιστές συχνά επιστρέφουν δεδομένα με τη μορφή ροής.
Οι ροές είναι χρήσιμες επειδή διευκολύνουν τον μετασχηματισμό των επιστρεφόμενων δεδομένων και την πραγματοποίηση τροποποιήσεων στον τρόπο που ζητάτε αυτά τα δεδομένα.
Το Angular `HttpClient` είναι ένας ενσωματωμένος τρόπος λήψης δεδομένων από εξωτερικά API και παροχής τους στην εφαρμογή σας ως ροή.

Αυτή η ενότητα σάς δείχνει πώς να χρησιμοποιήσετε το `HttpClient` για να ανακτήσετε τις τιμές αποστολής από ένα εξωτερικό αρχείο.

Η εφαρμογή που δημιουργεί το StackBlitz για αυτόν τον οδηγό συνοδεύεται από προκαθορισμένα δεδομένα αποστολής στο `assets/shipping.json`.
Χρησιμοποιήστε αυτά τα δεδομένα για να προσθέσετε τιμές αποστολής για προϊόντα στο καλάθι.

<code-example header="src/assets/shipping.json" path="getting-started/src/assets/shipping.json"></code-example>

### Ρυθμίστε το `AppModule` να χρησιμοποιεί το `HttpClient`

Για να χρησιμοποιήσετε το `HttpClient` της Angular, πρέπει να ρυθμίσετε την εφαρμογή σας ώστε να χρησιμοποιεί το `HttpClientModule`.

Το `HttpClientModule` της Angular καταχωρεί τους providers που χρειάζεται η εφαρμογή σας για να χρησιμοποιεί το service `HttpClient` σε όλη την εφαρμογή σας.

1.  Στο `app.module.ts`, κάντε import το `HttpClientModule` από το πακέτο `@angular/common/http` στην κορυφή του αρχείου μαζί με τα υπόλοιπα imports.
    Καθώς υπάρχουν πολλά άλλα imports, αυτό το απόσπασμα κώδικα τα παραλείπει για συντομία.
    Φροντίστε να αφήσετε τα υπάρχοντα imports στην θέση τους.

    <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="http-client-module-import"></code-example>

1.  Για να καταχωρήσετε τους providers του Angular `HttpClient` σε όλη την εφαρμογή, προσθέστε το `HttpClientModule` στα `imports` του `@NgModule()` του `AppModule` .

    <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="http-client-module"></code-example>

### Ρυθμίστε το `CartService` να χρησιμοποιεί το `HttpClient`

Το επόμενο βήμα είναι να εισάγετε το service `HttpClient` στο δικό σας service ώστε η εφαρμογή σας να μπορεί να ανακτά δεδομένα και να αλληλεπιδρά με εξωτερικά API και πόρους.

1.  Στο `cart.service.ts`, κάντε import το `HttpClient` από το πακέτο `@angular/common/http`.

    <code-example header="src/app/cart.service.ts" path="getting-started/src/app/cart.service.ts" region="import-http"></code-example>

1.  Εισάγετε το `HttpClient` μέσα στο `constructor()` του `CartService`.

    <code-example header="src/app/cart.service.ts" path="getting-started/src/app/cart.service.ts" region="inject-http"></code-example>

### Ρυθμίστε το `CartService` να παίρνει τιμές αποστολής

Για να λάβετε δεδομένα αποστολής, από το `shipping.json`, μπορείτε να χρησιμοποιήσετε τη μέθοδο `get()` του `HttpClient`.

1.  Στο `cart.service.ts`, κάτω από την μέθοδο `clearCart()`, ορίστε μια νέα μέθοδο `getShippingPrices()` που χρησιμοποιεί την μέθοδο `get()` του `HttpClient`.

    <code-example header="src/app/cart.service.ts" path="getting-started/src/app/cart.service.ts" region="get-shipping"></code-example>

Για περισσότερες πληροφορίες σχετικά με το `HttpClient` της Angular, ανατρέξτε στον οδηγό [Αλληλεπίδραση πελάτη-διακομιστή](guide/http "Αλληλεπίδραση διακομιστή μέσω HTTP").

## Δημιουργήστε το component αποστολής

Τώρα που έχετε ρυθμίσει την εφαρμογή σας να ανακτά δεδομένα αποστολής, μπορείτε να δημιουργήσετε ένα μέρος για την εμφάνιση αυτών των δεδομένων.

1.  Δημιουργήστε ένα component καλαθιού με το όνομα `shipping` στο terminal εκτελώντας την ακόλουθη εντολή:

    <code-example format="shell" language="shell">

    ng generate component shipping

    </code-example>

    Η προηγούμενη εντολή θα δημιουργήσει το αρχείο `shipping.component.ts` και τα αντίστοιχα αρχεία template και στυλ.

    <code-example header="src/app/shipping/shipping.component.ts" path="getting-started/src/app/shipping/shipping.component.1.ts"></code-example>

1.  Στο `app.module.ts`, προσθέστε μια διαδρομή για την αποστολή.
    Καθορίστε το `path` ως `shipping` και το component ως `ShippingComponent`.

    <code-example header="src/app/app.module.ts" path="getting-started/src/app/app.module.ts" region="shipping-route"></code-example>

    Δεν υπάρχει ακόμη σύνδεσμος προς το νέο component, αλλά μπορείτε να δείτε το template του στο παράθυρο προεπισκόπησης εισάγοντας τη διεύθυνση URL που καθορίζει η διαδρομή του.
    Η διεύθυνση URL έχει το μοτίβο: `https://angular-ynqttp--4200.local.webcontainer.io/shipping` όπου το τμήμα `angular-ynqttp--4200.local.webcontainer.io` μπορεί να είναι διαφορετικό για το δικό σας StackBlitz project.

### Ρυθμίστε το `ShippingComponent` να χρησιμοποιεί το `CartService`

Αυτή η ενότητα σάς καθοδηγεί να τροποποιήσετε το `ShippingComponent` ώστε να ανακτά τα δεδομένα αποστολής μέσω HTTP από το αρχείο  `shipping.json`.

1.  Στο `shipping.component.ts`, κάντε import το `CartService`.

    <code-example header="src/app/shipping/shipping.component.ts" path="getting-started/src/app/shipping/shipping.component.ts" region="imports"></code-example>

1.  Εισάγετε το service του καλαθιού στο `constructor()` του `ShippingComponent`.

    <code-example header="src/app/shipping/shipping.component.ts" path="getting-started/src/app/shipping/shipping.component.ts" region="inject-cart-service"></code-example>

1.  Καθορίστε μια ιδιότητα `shippingCosts` χρησιμοποιώντας την μέθοδο `getShippingPrices()` από το `CartService`.

    <code-example header="src/app/shipping/shipping.component.ts" path="getting-started/src/app/shipping/shipping.component.ts" region="props"></code-example>

1.  Ενημερώστε το template του `ShippingComponent` ώστε να εμφανίζει τους τύπους αποστολής και τις τιμές χρησιμοποιώντας το pipe `async`.

    <code-example header="src/app/shipping/shipping.component.html" path="getting-started/src/app/shipping/shipping.component.html"></code-example>

    Το pipe `async` επιστρέφει την πιο πρόσφατη τιμή από μια ροή δεδομένων και συνεχίζει να το κάνει για τη διάρκεια ζωής ενός συγκεκριμένου component.
    Όταν η Angular καταστρέφει αυτό το component, το pipe `async` αυτόματα σταματάει.
    Για λεπτομερείς πληροφορίες σχετικά με το pipe `async`, ανατρέξτε στις [οδηγίες χρήσης API του AsyncPipe](api/common/AsyncPipe).

1.  Προσθέστε έναν σύνδεσμο από την προβολή του `CartComponent` στην προβολή του `ShippingComponent`.

    <code-example header="src/app/cart/cart.component.html" path="getting-started/src/app/cart/cart.component.2.html"></code-example>

1.  Πατήστε το κουμπί **Checkout** για να δείτε το ενημερωμένο καλάθι.
    Να θυμάστε ότι οποιαδήποτε αλλαγή της εφαρμογής προκαλεί ανανέωση της προεπισκόπησης, η οποία αδειάζει το καλάθι.

    <div class="lightbox">

    <img alt="Καλάθι με σύνδεσμο για τις τιμές αποστολής" src="generated/images/guide/start/cart-empty-with-shipping-prices.png">
    
    </div>

    Κάντε κλικ στον σύνδεσμο για να πλοηγηθείτε στις τιμές αποστολής.

    <div class="lightbox">

    <img alt="Εμφάνιση τιμών αποστολής" src="generated/images/guide/start/shipping-prices.png">
    
    </div>

## Στην συνέχεια

Τώρα έχετε μια εφαρμογή καταστήματος με κατάλογο προϊόντων, καλάθι αγορών και μπορείτε να αναζητήσετε τιμές αποστολής.

Για να συνεχίσετε την εξερεύνηση της Angular:

*   Συνεχίστε στο [Φόρμες για εισαγωγή δεδομένων](start/start-forms "Φόρμες για εισαγωγή δεδομένων") για να ολοκληρώσετε την εφαρμογή προσθέτοντας την προβολή καλαθιού αγορών και μια φόρμα ολοκλήρωσης αγοράς
*   Συνεχίστε στο [Deployment](start/start-deployment "Deployment") για να μεταβείτε σε τοπική ανάπτυξη, ή να ανεβάσετε την εφαρμογή σας στο Firebase ή σε έναν δικό σας διακομιστή

@reviewed 2022-05-21
