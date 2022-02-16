# Χρήση φορμών για εισαγωγή δεδομένων

Αυτός ο οδηγός βασίζεται στο βήμα [Διαχείριση δεδομένων](start/start-data "Try it: Managing Data") του σεμιναρίου Πως να ξεκινήσετε, [Ξεκινήστε με μια βασική εφαρμογή Angular](start "Get started with a basic Angular app").

Αυτή η ενότητα σάς καθοδηγεί στην προσθήκη μιας λειτουργίας ολοκλήρωσης αγοράς χρησιμοποιώντας μια φόρμα για τη συλλογή πληροφοριών από τον χρήστη ως μέρος της ολοκλήρωσης αγοράς.

## Καθορίστε το μοντέλο της φόρμας ολοκλήρωσης αγοράς

Αυτό το βήμα σάς δείχνει πώς να ρυθμίσετε το μοντέλο φόρμας της ολοκλήρωσης αγοράς στο component class.
Το μοντέλο της φόρμας καθορίζει την κατάσταση της φόρμας.

1. Ανοίχτε το `cart.component.ts`.

1. Κάντε import το service `FormBuilder` από το πακέτο `@angular/forms`.
  Αυτό το service παρέχει βολικές μεθόδους για τη δημιουργία controls.

  <code-example header="src/app/cart/cart.component.ts" path="getting-started/src/app/cart/cart.component.ts" region="imports">
  </code-example>

1. Εισάγετε το service `FormBuilder` στον `constructor()` του `CartComponent`.
  Αυτό το service είναι μέρος του module `ReactiveFormsModule`, που έχετε κάνει ήδη import.

  <code-example header="src/app/cart/cart.component.ts" path="getting-started/src/app/cart/cart.component.ts" region="inject-form-builder">
  </code-example>

1. Για να συλλέξετε το όνομα και τη διεύθυνση του χρήστη, χρησιμοποιήστε τη μέθοδο `group()` του `FormBuilder` για να ορίσετε την ιδιότητα `checkoutForm` σε ένα μοντέλο της φόρμας που περιέχει τα πεδία `name` και `address`.

  <code-example header="src/app/cart/cart.component.ts" path="getting-started/src/app/cart/cart.component.ts" region="checkout-form-group"></code-example>

1. Καθορίστε μια μέθοδο `onSubmit()` για την επεξεργασία της φόρμας.
  Αυτή η μέθοδος επιτρέπει στους χρήστες να υποβάλουν το όνομα και τη διεύθυνσή τους.
  Επιπλέον, αυτή η μέθοδος χρησιμοποιεί τη μέθοδο `clearCart()` του `CartService` για να επαναφέρει τη φόρμα στην αρχική της μορφή και να καθαρίσει το καλάθι.

  Το component class του καλαθιού που προκύπτει έχει ως εξής:

  <code-example header="src/app/cart/cart.component.ts" path="getting-started/src/app/cart/cart.component.ts">
  </code-example>

## Δημιουργήστε τη φόρμα ολοκλήρωσης αγοράς

Ακολουθήστε τα παρακάτω βήματα για να προσθέσετε μια φόρμα ολοκλήρωσης αγοράς στο κάτω μέρος της προβολής του καλαθιού.

1. Στο κάτω μέρος του `cart.component.html`, προσθέστε ένα στοιχείο HTML `<form>` και ένα κουμπί **Purchase**.

1. Χρησιμοποιήστε property binding στο `formGroup` για να συνδέσετε το `checkoutForm` με το HTML `<form>`.

  <code-example header="src/app/cart/cart.component.html" path="getting-started/src/app/cart/cart.component.3.html" region="checkout-form">
  </code-example>

1. Στο στοιχείο HTML `form`, χρησιμοποιήστε ένα event binding `ngSubmit` για να ειδοποιηθείτε κατά την υποβολή της φόρμας και καλέστε την μέθοδο `onSubmit()` με την τιμή `checkoutForm`.

  <code-example path="getting-started/src/app/cart/cart.component.html" header="src/app/cart/cart.component.html (cart component template detail)" region="checkout-form-1">
  </code-example>

1. Προσθέστε πεδία `<input>` για το `name` και το `address`, το καθένα με ένα attribute `formControlName` που συνδέει τα controls της φόρμας `checkoutForm` με το `name` και το `address` στα πεδία `<input>`.
  Το τελικό component έχει ως εξής:

  <code-example path="getting-started/src/app/cart/cart.component.html" header="src/app/cart/cart.component.html" region="checkout-form-2">
  </code-example>

Αφού βάλουν μερικά προϊόντα στο καλάθι, οι χρήστες μπορούν να ελέγξουν τα προϊόντα τους, να εισαγάγουν το όνομα και τη διεύθυνσή τους και να υποβάλουν την αγορά τους.

<div class="lightbox">
  <img src='generated/images/guide/start/cart-with-items-and-form.png' alt="Cart view with checkout form">
</div>

Για να επιβεβαιώσετε την υποβολή, ανοίξτε την κονσόλα και θα δείτε ένα αντικείμενο που περιέχει το όνομα και τη διεύθυνση που υποβάλατε.

## Στην συνέχεια

Έχετε μια πλήρη εφαρμογή ηλεκτρονικού καταστήματος με έναν κατάλογο προϊόντων, ένα καλάθι αγορών και μια λειτουργία ολοκλήρωσης αγοράς.

[Συνεχίστε στην ενότητα "Deployment"](start/start-deployment "Try it: Deployment") για να μεταβείτε σε τοπική ανάπτυξη, ή να ανεβάσετε την εφαρμογή σας στο Firebase ή στον δικό σας διακομιστή.

@reviewed 2021-09-15
