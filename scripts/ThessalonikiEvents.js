const ThessalonikiEvents = [
    //Μουσική
    {
        title: 'Συναυλία της Μαρίζας Ρίζου στο Θέατρο Γης',
        category: 'Μουσική',
        description: 'Η Μαρίζα Ρίζου παρουσιάζει μια μοναδική βραδιά γεμάτη μουσική και συναίσθημα στο Θέατρο Γης, με τις μελωδίες της να αντηχούν στην καρδιά της Θεσσαλονίκης.',
        date: new Date(2024, 4, 23),
        time: '20:00',
        remainingTickets: 300,
        image: 'hhttps://www.mileikanea.gr/images/mileikanea/mariza-rizou-serifos-2022.jpg',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Live Ορφέας Περίδης στο Μύλος Club',
        category: 'Μουσική',
        description: 'Απολαύστε μια ζεστή βραδιά με τον Ορφέα Περίδη στον χώρο του Μύλος Club, με τραγούδια που αγγίζουν την ψυχή.',
        date: new Date(2024, 4, 30),
        time: '21:00',
        remainingTickets: 250,
        image: 'https://assets.voria.gr/cdn/ff/ETa2qhGDC9AfAPwKfctNmFcGBfWbkRmXMHmPynkT7ms/1710572440/public/2024-03/orfeas.jpg',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Συναυλία Σακίρα στη Θεσσαλονίκη',
        category: 'Μουσική',
        description: 'Η διεθνούς φήμης σταρ Σακίρα έρχεται στη Θεσσαλονίκη για μια μοναδική συναυλία που θα πραγματοποιηθεί στο Κλειστό Γυμναστήριο Παύλος Μελάς, φέρνοντας τους ρυθμούς της Λατινικής Αμερικής στην καρδιά της πόλης.',
        date: new Date(2024, 4, 28),
        time: '21:00',
        remainingTickets: 10000,
        image: 'https://www.iefimerida.gr/sites/default/files/styles/big_article_image/public/2023-02/shakira-mpez-steno-forema-mini.jpg.webp?itok=cMYJC534',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Συναυλία Ελεωνόρας Ζουγανέλη στη Θεσσαλονίκη',
        category: 'Μουσική',
        description: 'Η Ελεωνόρα Ζουγανέλη επιστρέφει στη Θεσσαλονίκη για μία ανεπανάληπτη συναυλιακή εμπειρία στο Θέατρο Γης, με τον μοναδικό της ερμηνευτικό πάθος και εκφραστικότητα.',
        date: new Date(2024, 4, 30),
        time: '20:30',
        remainingTickets: 5000,
        image: 'https://www.okmag.gr/image/s1250x703/webp/fill/file/wp-content/uploads/2022/09/zouganeliken.jpg',
        city: 'Θεσσαλονίκη'
      },
      //Θέατρο
      {
        title: 'Θεατρική Παράσταση "Μήδεια"',
        category: 'Θέατρο',
        description: 'Η αιώνια τραγωδία της "Μήδειας" ανεβαίνει στο Κρατικό Θέατρο Βορείου Ελλάδος, σε μια παράσταση που υπόσχεται να συγκλονίσει με την ένταση και το πάθος της.',
        date: new Date(2024, 5, 5),
        time: '19:00',
        remainingTickets: 200,
        image: 'https://zerotoeighteen.gr/wp-content/uploads/2023/08/%CE%BC%CE%AE%CE%B4%CE%B5%CE%B9%CE%B1.jpg',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Θεατρική Παράσταση "Λυσιστράτη"',
        category: 'Θέατρο',
        description: 'Το αριστούργημα του Αριστοφάνη, "Λυσιστράτη", παρουσιάζεται στο Κρατικό Θέατρο Βορείου Ελλάδος, σε μια παράσταση που συνδυάζει την αρχαία κωμωδία με σύγχρονες ερμηνείες και σκηνοθεσία.',
        date: new Date(2024, 5, 5),
        time: '19:30',
        remainingTickets: 800,
        image: 'https://www.n-t.gr/pictures/original/b_28513_or__elg5547.jpg',
        city: 'Θεσσαλονίκη'
      },
      //Αθλητικά
      {
        title: 'Αγώνας Μπάσκετ ΠΑΟΚ vs Άρης',
        category: 'Αθλητικά',
        description: 'Ο μεγάλος αγώνας της Θεσσαλονίκης μεταξύ ΠΑΟΚ και Άρη στο Παλατάκι. Ένας αγώνας που καθορίζει την κυριαρχία στο μπάσκετ της πόλης.',
        date: new Date(2024, 5, 10),
        time: '18:00',
        remainingTickets: 5000,
        image: 'https://cdn.bbmd.gr/media/news/2024/02/11/1520731/main/4140217.jpg',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Διεθνές Τουρνουά Βόλεϊ Γυναικών',
        category: 'Αθλητικά',
        description: 'Η Θεσσαλονίκη φιλοξενεί το Διεθνές Τουρνουά Βόλεϊ Γυναικών στο Αλεξάνδρειο Μέλαθρον. Απολαύστε τοπ επίπεδο αθλητισμού και υποστηρίξτε τις αθλήτριες σε έναν αγώνα που υπόσχεται ένταση και συγκινήσεις.',
        date: new Date(2024, 5, 15),
        time: '17:00',
        remainingTickets: 4000,
        image: 'https://www.agriniopress.gr/wp-content/uploads/2022/06/vollei-korasides.jpg',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Ημιμαραθώνιος Θεσσαλονίκης',
        category: 'Αθλητικά',
        description: 'Ο Ημιμαραθώνιος της Θεσσαλονίκης επιστρέφει, προσκαλώντας δρομείς από όλο τον κόσμο να ανταγωνιστούν στις όμορφες ακτές της πόλης. Ένας αγώνας για επαγγελματίες και ερασιτέχνες δρομείς με σκοπό την προώθηση της υγείας και του αθλητισμού.',
        date: new Date(2024, 5, 20),
        time: '09:00',
        remainingTickets: 10000,
        image: 'https://opolitis.gr/wp-content/uploads/2023/10/c3380e83ec9095387ef7264b7db8e557_L.jpg',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Ποδοσφαιρικός Αγώνας ΠΑΟΚ vs Άρης',
        category: 'Αθλητικά',
        description: 'Η μεγάλη αντιπαλότητα της Θεσσαλονίκης εκδηλώνεται για ακόμη μια φορά στο γήπεδο της Τούμπας, όπου ο ΠΑΟΚ αντιμετωπίζει τον Άρη σε έναν αγώνα που υπόσχεται ένταση, πάθος και απρόβλεπτες στιγμές.',
        date: new Date(2024, 5, 12),
        time: '19:00',
        remainingTickets: 28730,
        image: 'https://www.to10.gr/wp-content/uploads/2018/05/4457377.jpg',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Ποδοσφαιρικός Αγώνας Ηρακλής vs Παναθηναϊκός',
        category: 'Αθλητικά',
        description: 'Ο Ηρακλής υποδέχεται τον Παναθηναϊκό σε έναν αγώνα που κρύβει πολλές εκπλήξεις. Ένα παιχνίδι που θα κρίνει πολλά για τις φιλοδοξίες των δύο ομάδων στο πρωτάθλημα.',
        date: new Date(2024, 5, 20),
        time: '21:00',
        remainingTickets: 15500,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDsv88sK6Jnm5VIW3IkBcYu2hyphenhyphenpKzKQeCIT0q4Crf07BGGRsig0evMQZ5ZXDOyZi5pLoobwelvvXRe-3bL-Dj-2duXy2FAd6Ct3slo_Evg_ij3ptQLt7_2ElfHFvP9P96ueIt_3rKAZ7qt/s1600/wpid-Panathinaikos-vs-Iraklis.jpg',
        city: 'Θεσσαλονίκη'
      },
      //Κινηματογράφος
      {
        title: 'Φεστιβάλ Ντοκιμαντέρ Θεσσαλονίκης',
        category: 'Κινηματογράφος',
        description: 'Το διεθνούς φήμης Φεστιβάλ Ντοκιμαντέρ Θεσσαλονίκης επιστρέφει, φέρνοντας μαζί ένα πλούσιο πρόγραμμα προβολών, συζητήσεων και σεμιναρίων αφιερωμένο στην τέχνη του ντοκιμαντέρ.',
        date: new Date(2024, 4, 25),
        time: '18:00',
        remainingTickets: 1000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Thessaloniki_Documentary_Festival.jpg',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Πρεμιέρα "Poor Things"',
        category: 'Κινηματογράφος',
        description: 'Η ταινία "Poor Things", μια κωμωδία επιστημονικής φαντασίας από τον Γιώργο Λάνθιμο, κάνει πρεμιέρα στο Κινηματογράφο Ολύμπιον. Η ταινία αφηγείται την ιστορία της Bella Baxter, μιας νεαρής γυναίκας που ανασταίνεται από τον νεκρό από τον εκκεντρικό επιστήμονα Dr. Godwin Baxter. Η Bella, με τον εγκέφαλο ενός μωρού και το σώμα μιας ενήλικης, ξεκινά ένα ταξίδι αυτοανακάλυψης και κοινωνικής αφύπνισης.',
        date: new Date(2024, 4, 25), // Year, Month (0-indexed), Day
        time: '20:00',
        remainingTickets: 300,
        image: 'https://www.pantheon-patra.gr/wp-content/uploads/2023/12/Poor-Things.png',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Dune: Μέρος Δεύτερο (Dune: Part Two)',
        category: 'Κινηματογράφος',
        description: 'Η συνέχεια της ιστορίας του Πολ Ατρείδη καθώς συναντά το πεπρωμένο του, στον απόηχο της βίαιης γενοκτονίας της φυλής του, του Οίκου των Ατρειδών. (The continuation of Paul Atreides\' story as he faces his destiny, following the violent genocide of his house.)',
        date: new Date(2024, 5, 1),
        time: '18:00',
        remainingTickets: 800,
        image: 'https://deadline.com/wp-content/uploads/2024/01/MCDDUPA_WB041-e1708041579639.jpg?w=681&h=383&crop=1',
        city: 'Θεσσαλονίκη'
      },
      {
        title: 'Μαραθώνιος: Ο Άρχοντας των Δαχτυλιδιών (The Lord of the Rings Marathon)',
        category: 'Κινηματογράφος',
        description: 'Ετοιμαστείτε για ένα επικό ταξίδι στη Μέση-γη! Βάλτε άνετα ρούχα, ετοιμάστε τα αγαπημένα σας σνακ και αφεθείτε στην ιστορία του Φρόδο και της Συντροφιάς του Δαχτυλιδιού. (Prepare for an epic journey to Middle-earth! Get comfy, prepare your favorite snacks, and lose yourself in the story of Frodo and the Fellowship of the Ring.)',
        date: new Date(2024, 5, 15),
        time: '21:00',
        remainingTickets: 500,
        image: 'https://static.wikia.nocookie.net/lotr/images/8/87/Ringstrilogyposter.jpg/revision/latest/scale-to-width-down/1000?cb=20210720095933',
        city: 'Θεσσαλονίκη'
      }]
module.exports = ThessalonikiEvents;
