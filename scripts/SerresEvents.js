const SerresEvents = [
    // Κινηματογράφος
    {
        title: 'Προβολή της ταινίας "Σμύρνη μου αγαπημένη"',
        category: 'Κινηματογράφος',
        description: 'Ταξιδέψτε πίσω στο χρόνο με την προβολή της ταινίας "Σμύρνη μου αγαπημένη" στον υπαίθριο κινηματογράφο Σινέ Κήπος.',
        date: new Date(2024, 4, 22),
        time: '21:00',
        remainingTickets: 180,
        image: 'https://www.in.gr/wp-content/uploads/2023/04/smirni-e1682675641775.jpg',
        city: 'Σέρρες'
    },
    {
        title: 'Φεστιβάλ ντοκιμαντέρ Σερρών',
        category: 'Κινηματογράφος',
        description: 'Το Σινέ Φιλίππου παρουσιάζει το Φεστιβάλ Ντοκιμαντέρ Σερρών, μια γιορτή του ανεξάρτητου κινηματογράφου.',
        date: new Date(2024, 4, 29),
        time: '19:00',
        remainingTickets: 200,
        image: 'https://www.kathimerini.gr/wp-content/uploads/2023/03/festival.jpg?v=1677686447',
        city: 'Σέρρες'
    },
    {
        title: 'Προβολή της ταινίας "Ο άνθρωπος του θεού"',
        category: 'Κινηματογράφος',
        description: 'Μια συγκλονιστική ιστορία πίστης και ανδρείας ζωντανεύει στην οθόνη του Σινέ Κήπος με την προβολή της ταινίας "Ο άνθρωπος του θεού".',
        date: new Date(2024, 5, 6),
        time: '21:00',
        remainingTickets: 150,
        image: 'https://www.megaratv.gr/wp-content/uploads/2022/12/o-anthrwpos-tou-theou.png',
        city: 'Σέρρες'
    },
    {
        title: 'Αφιέρωμα στον ελληνικό κινηματογράφο',
        category: 'Κινηματογράφος',
        description: 'Το Σινέ Φιλίππου σας ταξιδεύει στον χρόνο με ένα αφιέρωμα στον κλασσικό ελληνικό κινηματογράφο.',
        date: new Date(2024, 5, 13),
        time: '18:00',
        remainingTickets: 230,
        image: 'https://kyritsis-education.gr/wp-content/uploads/2017/11/3.jpg',
        city: 'Σέρρες'
    },
    // Θέατρο
    {
        title: 'Θεατρική παράσταση "Ηλέκτρα" του Σοφοκλή',
        category: 'Θέατρο',
        description: 'Βιώστε την τραγωδία της Ηλέκτρας στο αρχαίο θέατρο των Σερρών.',
        date: new Date(2024, 4, 29),
        time: '21:00',
        remainingTickets: 120,
        image: 'https://www.mytheatro.gr/wp-content/uploads/2023/07/dsc04406-1.jpg',
        city: 'Σέρρες'
    },
    {
        title: 'Παιδική θεατρική παράσταση "Ο Μικρός Πρίγκιπας"',
        category: 'Θέατρο',
        description: 'Μια παράσταση για μικρούς και μεγάλους, βασισμένη στο αγαπημένο βιβλίο "Ο Μικρός Πρίγκιπας", ανεβαίνει στο θέατρο "Απόλλων".',
        date: new Date(2024, 5, 13),
        time: '17:00',
        remainingTickets: 100,
        image: 'https://www.lifo.gr/sites/default/files/styles/max_1920x1920/public/articles/2021-06-07/%CE%A6%CF%89%CF%84%CE%BF%CE%B3%CF%81%CE%B1%CF%86%CE%AF%CE%B1%20%CE%A0%CE%B1%CF%81%CE%AC%CF%83%CF%84%CE%B1%CF%83%CE%B7%CF%82.jpg?itok=wqPCjk8k',
        city: 'Σέρρες'
    },
    // Αθλητικά
    {
        title: 'Αγώνας ποδοσφαίρου: Πανσερραϊκός vs. ΑΕΚ',
        category: 'Αθλητικά',
        description: 'Ο Πανσερραϊκός υποδέχεται την ΑΕΚ στο γήπεδο των Σερρών για ένα συναρπαστικό αγώνα ποδοσφαίρου.',
        date: new Date(2024, 4, 29),
        time: '18:00',
        remainingTickets: 300,
        image: 'https://www.filathlos.gr/sites/default/files/styles/large/public/2023-01/panserraikos-aek-live-streaming.jpg?itok=StEvyGyY',
        city: 'Σέρρες'
    },
    
      // Μουσική
    {
        title: 'Συναυλία με τον Θοδωρή Κοτονιά & τους Μπλε',
        category: 'Μουσική',
        description: 'Ο Θοδωρής Κοτονιάς και οι Μπλε ξεσηκώνουν τις Σέρρες με μια μοναδική συναυλία στο θέατρο "Απόλλων".',
        date: new Date(2024, 4, 22),
        time: '22:00',
        remainingTickets: 100,
        image: 'https://www.tharrosnews.gr/wp-content/uploads/2022/07/mple-e1658809839316.jpg',
        city: 'Σέρρες'
    },
    {
        title: 'Φεστιβάλ μουσικής "Rockwave"',
        category: 'Μουσική',
        description: 'Το μεγαλύτερο μουσικό φεστιβάλ της χρονιάς έρχεται στις Σέρρες! Στο πάρκο ΟΜΟΝΟΙΑΣ θα βρεθούν διάσημοι καλλιτέχνες για τρεις ημέρες γεμάτες μουσική.',
        date: new Date(2024, 5, 6),
        time: '18:00',
        remainingTickets: 500,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Rockwave2009.jpg',
        city: 'Σέρρες'
    }];
module.exports = SerresEvents;
