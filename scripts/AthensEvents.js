const AthensEvents = [
    //Κινηματογράφος
    {
      title: 'Προβολή Κλασικών Ελληνικών Ταινιών',
      category: 'Κινηματογράφος',
      description: 'Ανακαλύψτε ξανά τις αξέχαστες ελληνικές κινηματογραφικές δημιουργίες σε μια σειρά προβολών υπό το φως της σελήνης.',
      date: new Date(2024, 4, 28),
      time: '19:00',
      remainingTickets: 200,
      image: 'https://drive.google.com/uc?export=view&id=1lUuI2aCkksOydWtA_BfZCQVWAaLuCreL',
      city: 'Αθήνα'
    },
    {
      title: 'Φεστιβάλ Ανεξάρτητου Κινηματογράφου',
      category: 'Κινηματογράφος',
      description: 'Εξερευνήστε τη μαγεία του ανεξάρτητου κινηματογράφου μέσα από μια ποικιλία ταινιών που αναδεικνύουν το ταλέντο ανερχόμενων δημιουργών.',
      date: new Date(2024, 5, 1),
      time: '18:00',
      remainingTickets: 250,
      image: 'https://drive.google.com/uc?export=view&id=1h2nDrZOHdHoectvQYmRYonXJparIs9eJ',
      city: 'Αθήνα'
    },
    
      {
        title: 'Προβολή "Μικρά Αγγλία"',
        category: 'Κινηματογράφος',
        description: 'Η πολυβραβευμένη ελληνική ταινία "Μικρά Αγγλία" της Παντελής Βούλγαρη προβάλλεται στο Θερινό Σινεμά Δεξαμενή στο Κολωνάκι, με εισαγωγή από τον ίδιο τον σκηνοθέτη.',
        date: new Date(2024, 5, 5),
        time: '21:00',
        remainingTickets: 150,
        image: 'https://drive.google.com/uc?export=view&id=1wgIgQq5Ps_J94qPXYzyp_yRcvkyHeQ8d',
        city: 'Αθήνα'
      },
      //Θέατρο
      {
        title: 'Θεατρική Παράσταση "Αντιγόνη"',
        category: 'Θέατρο',
        description: 'Η άθανατη τραγωδία του Σοφοκλή, "Αντιγόνη", παίζεται στο Αρχαίο Θέατρο της Επιδαύρου, με την Κατερίνα Λέχου στον τίτλο ρόλο και σκηνοθεσία από τον Δημήτρη Λιγνάδη.',
        date: new Date(2024, 5, 12),
        time: '21:00',
        remainingTickets: 220,
        image: 'https://drive.google.com/uc?export=view&id=14KrHB52Q2T9gNhV4zWx2RThIzp6aFmI5',
        city: 'Αθήνα'
      },
      {
        title: 'Παράσταση "Ο Τυχαίος Θάνατος ενός Αναρχικού"',
        category: 'Θέατρο',
        description: 'Μια δυναμική και σατιρική παράσταση βασισμένη στο έργο του Ντάριο Φο, "Ο Τυχαίος Θάνατος ενός Αναρχικού", παρουσιάζεται στο Θέατρο Τέχνης στο κέντρο της Αθήνας. Η παράσταση είναι μια κοφτερή κριτική στην κοινωνική και πολιτική κατάσταση, διανθισμένη με χιούμορ και ανατροπές. Πρωταγωνιστεί ο Πάνος Βλάχος',
        date: new Date(2024, 5, 15),
        time: '20:30',
        remainingTickets: 100,
        image: 'https://drive.google.com/uc?export=view&id=1PpOLRG4QvEYbhIBCHgWiIusB-8G0Rh97',
        city: 'Αθήνα'
      },
      {
        title: 'Αναβίωση "Ηλέκτρα" του Σοφοκλή',
        category: 'Θέατρο',
        description: 'Η έντονη τραγωδία του Σοφοκλή, "Ηλέκτρα", αναβιώνει στο Ηρώδειο υπό την Ακρόπολη. Μια παράσταση που εξερευνά τα θέματα της εκδίκησης, της πίστης και της οικογενειακής τιμής, με τη Μαρία Ναυπλιώτου στον ρόλο της Ηλέκτρας και σκηνοθεσία από τον Γιάννη Χουβαρδά.',
        date: new Date(2024, 5, 20),
        time: '21:00',
        remainingTickets: 120,
        image: 'https://drive.google.com/uc?export=view&id=1lx_5hV5yMDrQExU0XbvlUkNOD66feNDq',
        city: 'Αθήνα'
      },
      //Αθλητικά
      {
        title: 'Πρωτάθλημα Ποδοσφαίρου: ΑΕΚ vs Παναθηναϊκός',
        category: 'Αθλητικά',
        description: 'Η ΑΕΚ υποδέχεται τον Παναθηναϊκό σε έναν κρίσιμο αγώνα για την κατάκτηση του πρωταθλήματος στο ΟΑΚΑ. Μια αναμέτρηση γεμάτη ένταση και πάθος που κανένας φίλαθλος δεν πρέπει να χάσει.',
        date: new Date(2024, 5, 22),
        time: '19:00',
        remainingTickets: 500,
        image: 'https://betmasters.gr/wp-content/uploads/2022/03/panathinaikos-aek.jpg.webp',
        city: 'Αθήνα'
      },
      {
        title: 'Φιλικός Αγώνας Ποδοσφαίρου: Ολυμπιακός vs Ατρόμητος',
        category: 'Αθλητικά',
        description: 'Ο Ολυμπιακός αντιμετωπίζει τον Ατρόμητο σε έναν φιλικό αγώνα που θα διεξαχθεί στο Καραϊσκάκη. Ένας αγώνας που υπόσχεται συναρπαστικές στιγμές και θέαμα.',
        date: new Date(2024, 5, 25),
        time: '20:00',
        remainingTickets: 400,
        image: 'https://www.olympiacos.org/wp-content/uploads/2019/05/11/olyatro.jpg',
        city: 'Αθήνα'
      },
      {
        title: 'Τουρνουά Τένις ',
        category: 'Αθλητικά',
        description: 'Το Τουρνουά Τένις επιστρέφει στο Ολυμπιακό Κέντρο Τένις στην Αθήνα, φέρνοντας μαζί του τους κορυφαίους τενίστες από όλο τον κόσμο για μια αναμέτρηση στο υψηλότερο επίπεδο.',
        date: new Date(2024, 5, 28),
        time: '17:00',
        remainingTickets: 300,
        image: 'https://www.tanea.gr/wp-content/uploads/2021/11/1-tenis-1.jpg',
        city: 'Αθήνα'
      },
      {
        title: 'Euroleague Μπάσκετ: Παναθηναϊκός vs Ρεάλ Μαδρίτης',
        category: 'Αθλητικά',
        description: 'Ο Παναθηναϊκός αντιμετωπίζει τη Ρεάλ Μαδρίτης σε έναν αγώνα γεμάτο ένταση για την Euroleague στο ΟΑΚΑ. Μη χάσετε αυτή τη μοναδική αναμέτρηση που θα κρίνει πολλά για τις δύο ομάδες στην πορεία τους προς τον τίτλο.',
        date: new Date(2024, 4, 30), 
        time: '21:00',
        remainingTickets: 350,
        image: 'https://kingsport.gr/wp-content/uploads/2024/03/pao-niki-me-real-scaled-e1709244988611.jpg',
        city: 'Αθήνα'
      },
      {
        title: 'Euroleague Μπάσκετ: Ολυμπιακός vs Φενέρμπαχτσε',
        category: 'Αθλητικά',
        description: 'Σε έναν από τους πιο αναμενόμενους αγώνες της Euroleague, ο Ολυμπιακός υποδέχεται την Φενέρμπαχτσε στο Σ.Ε.Φ. Ένας αγώνας υψηλών προδιαγραφών που θα κρατήσει τους φιλάθλους σε αγωνία μέχρι την τελευταία στιγμή.',
        date: new Date(2024, 5, 4), 
        time: '20:00',
        remainingTickets: 320,
        image: 'https://photos.tostoixima.gr/w_800px/articles/202305/osfp_fener.webp',
        city: 'Αθήνα'
      },
      {
        title: 'Τουρνουά Βόλεϊ Ακρόπολης',
        category: 'Αθλητικά',
        description: 'Το ετήσιο Τουρνουά Βόλεϊ Ακρόπολης επιστρέφει, φέρνοντας μαζί του τις κορυφαίες ομάδες βόλεϊ σε έναν από τους πιο ιστορικούς χώρους της Αθήνας.',
        date: new Date(2024, 5, 8), 
        time: '17:00',
        remainingTickets: 200,
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Red_dragons_kwalificeren_zich_tegen_grieken_voor_ek.jpg', 
        city: 'Αθήνα'
      },
      //Μουσική
      {
        title: 'Ροκ Συναυλία στο Σύνταγμα',
        category: 'Μουσική',
        description: 'Ζήστε μια αξέχαστη βραδιά με δυνατή ροκ μουσική κάτω από τον αττικό ουρανό, με κορυφαίες ελληνικές και διεθνείς μπάντες.',
        date: new Date(2024, 4, 23),
        time: '21:00',
        remainingTickets: 100,
        image: 'https://www.enikos.gr/wp-content/uploads/2023/11/syntagma-dentro-1.jpg',
        city: 'Αθήνα'
      },
      {
        title: 'Βραδιά Τζαζ στον Κήπο του Ζαππείου',
        category: 'Μουσική',
        description: 'Ένας μαγευτικός χώρος φιλοξενεί μια ατμοσφαιρική βραδιά με τζαζ μουσική από τους καλύτερους μουσικούς της Ελλάδας.',
        date: new Date(2024, 4, 25),
        time: '20:00',
        remainingTickets: 150,
        image: 'https://www.thes.gr/wp-content/uploads/2023/09/2609-mazonakis-4.jpg',
        city: 'Αθήνα'
      },
      {
        title: 'Συναυλία Muse στην Πλατεία Νερού ',
        category: 'Μουσική',
        description: 'Οι Muse επιστρέφουν στην Αθήνα για μία ανεπανάληπτη συναυλία στην Πλατεία Νερού, παρουσιάζοντας το νέο τους άλμπουμ καθώς και τις κλασσικές τους επιτυχίες. Ένα μουσικό ταξίδι γεμάτο ενέργεια και φαντασία.',
        date: new Date(2024, 6, 10),
        time: '21:00',
        remainingTickets: 50000,
        image: 'https://www.news247.gr/wp-content/uploads/2022/06/muse-01-640x426.jpg',
        city: 'Αθήνα'
      },
      {
        title: 'Συναυλία Coldplay στο Ολυμπιακό Στάδιο',
        category: 'Μουσική',
        description: 'Η παγκοσμίου φήμης μπάντα Coldplay έρχεται στην Αθήνα για μία μοναδική συναυλία στο Ολυμπιακό Στάδιο. Προετοιμαστείτε για μία αξέχαστη βραδιά γεμάτη μελωδίες που έχουν σημαδέψει τη σύγχρονη μουσική σκηνή.',
        date: new Date(2024, 6, 15),
        time: '20:00',
        remainingTickets: 40000,
        image: 'https://www.nme.com/wp-content/uploads/2023/03/coldplay-poster-press-1-1392x884.jpg',
        city: 'Αθήνα'
      },
      {
        title: '50 Χρόνια Βασίλης Παπακωνσταντίνου',
        category: 'Μουσική',
        description: 'Ο θρυλικός Βασίλης Παπακωνσταντίνου επιστρέφει για μία αξέχαστη συναυλία στο Καλλιμάρμαρο Στάδιο, παρουσιάζοντας τα μεγαλύτερα τραγούδια της πολυετής καριέρας .',
        date: new Date(2024, 5, 3),
        time: '20:00',
        remainingTickets: 300,
        image: 'https://www.diesi.gr/static/80264758eace47df78a0e5abc263b04c/41040/64c3d7c276787.webp',
        city: 'Αθήνα'
      }];

module.exports = AthensEvents;
