const CorfuEvents = [
    // Μουσική
    {
      title: 'Συναυλία με τον Γιώργο Νταλάρα', 
      category: 'Μουσική',
      description: 'Ο σπουδαίος Γιώργος Νταλάρας μαγεύει την Κέρκυρα με μια βραδιά γεμάτη αγαπημένα τραγούδια στο παλαιό φρούριο.',
      date: new Date(2024, 4, 27), 
      time: '21:00',
      remainingTickets: 200,
      image: 'https://www.in.gr/wp-content/uploads/2022/09/dalaras.jpg',
      city: 'Κέρκυρα'
    },
    {
      title: 'Η Νύχτα των DJ στη Σπιανάδα', 
      category: 'Μουσική',
      description: 'Ένα ξέφρενο party με τους καλύτερους DJs σας περιμένει στην κεντρική πλατεία της Κέρκυρας, την Σπιανάδα.',
      date: new Date(2024, 5, 4), 
      time: '22:00',
      remainingTickets: 20,
      image: 'https://atcorfu.com/wp-content/uploads/2015/04/corfu-pasxa-at-spianada-square.jpg',
      city: 'Κέρκυρα'
    },
    //Κινηματογράφος
    {
        title: 'Προβολή της ταινίας "Unforgiven"', 
        category: 'Κινηματογράφος',
        description: 'Ταξιδέψτε στον κόσμο του western με την προβολή της κλασσικής ταινίας "Unforgiven".',
        date: new Date(2024, 4, 24), 
        time: '21:00',
        remainingTickets: 120,
        image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/unforgiven-clint-eastwood.jpeg?q=50&fit=contain&w=1140&h=&dpr=1.5',
        city: 'Κέρκυρα'
    },
    {
        title: 'Νύχτα animation: Ταξίδι στον κόσμο του Studio Ghibli', 
        category: 'Κινηματογράφος',
        description: 'Μια βραδιά αφιερωμένη στις μαγευτικές ταινίες animation του Studio Ghibli.',
        date: new Date(2024, 5, 1), 
        time: '18:00',
        remainingTickets: 180,
        image: 'https://ew.com/thmb/ZSe8Oo9bjy1YC5LDMYzwXHJHOdg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Hayao-Miyazaki-536c715b822a4098aba516e979e404e6.jpg',
        city: 'Κέρκυρα'
    },
    {
        title: 'Προβολή της ταινίας "The The Shawshank Redemption", The moonlight cinema caravan ', 
        category: 'Κινηματογράφος',
        description: 'Το μοναδικό The Moonlight Cinema Caravan σας δίνει την ευκαιρία να παρακολουθήσετε την κλασσική αυτή ταινία στην παραλία του Κοντογυαλού".',
        date: new Date(2024, 5, 8), 
        time: '20:00',
        remainingTickets: 250,
        image: 'https://librodoro.gr/wp-content/uploads/2015/06/6492a6886f3606.75767415.jpeg',
        city: 'Κέρκυρα'
    },
    //Θέατρο
    {
        title: 'Θεατρική παράσταση: "Άνθρωποι και Ποντίκια"', 
        category: 'Θέατρο',
        description: 'Μια κλασική παράσταση του έργου "Άνθρωποι και Ποντίκια" ανεβαίνει στο θέατρο της Κέρκυρας.',
        date: new Date(2024, 4, 25), 
        time: '21:00',
        remainingTickets: 150,
        image: 'https://www.athinorama.gr/Content/ImagesDatabase/p/750x422/pad/both/lmnts/articles/2545251/cartel1.jpg?quality=81&404=default&v=4',
        city: 'Κέρκυρα'
      },
      {
        title: 'Παιδική παράσταση: "Η Πεντάμορφη και το Τέρας"', 
        category: 'Θέατρο',
        description: 'Μια μαγευτική παράσταση για μικρούς και μεγάλους, βασισμένη στο αγαπημένο παραμύθι "Η Πεντάμορφη και το Τέρας".',
        date: new Date(2024, 5, 3), 
        time: '18:00',
        remainingTickets: 80,
        image: 'https://i0.wp.com/eviathema.gr/wp-content/uploads/2022/05/pentamorfi.jpg?fit=758%2C442&ssl=1',
        city: 'Κέρκυρα'
      },
    //Αθλητικά
    {
        title: 'Ιστιοπλοϊκός αγώνας: Διαπλέοντας το Ιόνιο', 
        category: 'Αθλητικά',
        description: 'Ένας συναρπαστικός ιστιοπλοϊκός αγώνας με διαδρομή μέσα στο Ιόνιο πέλαγος.',
        date: new Date(2024, 5, 11), 
        time: '12:00',
        remainingTickets: 20,
        image: 'https://ydra.gov.gr/IMAGES/istio/1.jpg',
        city: 'Κέρκυρα'
    },
    {
        title: 'Ποδηλατικός Γύρος της Κέρκυρας', 
        category: 'Αθλητικά',
        description: 'Διασχίστε την πανέμορφη Κέρκυρα συμμετέχοντας στον Ποδηλατικό Γύρο της Κέρκυρας!',
        date: new Date(2024, 5, 12), 
        time: '09:00',
        remainingTickets: 45,
        image: 'https://www.womenscycling.gr/wp-content/uploads/2011/10/IMG_0360.jpg',
        city: 'Κέρκυρα'
      }];
module.exports = CorfuEvents;
