const inputs = {
    monument: [
        {"Ονομασία": true},
        {"Είδος": true},
        {"Υποείδος": false},
        {"Σύντομη Περιγραφή": true},
        {radio: ["Δημοσιευμένο","Αδημοσίευτο"]}, // <-- Προσθήκη/Αφαίρεση επιλογών
        {"Περιοχή": true},
        {"Θέση": true},
        {"Πρόσβαση": true},
        {"Συντεταγμένες": true},
        {"Υψόμετρο": true},
        {"Διασύνδεση με χάρτες": true},
    ],
    dating: [
        {"Περίοδος" : 
            {
                required: true,
                from: '',
                until: ''
            },
        },
        {"Υποπερίοδος" : 
            {
                required: true,
                from: '',
                until: ''
            },    
        },
        {"Χρονολογία": 
            {
                data: ''
            }
        },
        {radio: ["Βεβαιη","Πιθανολογούμενη","Άγνωστη"]}  // <-- Προσθήκη/Αφαίρεση επιλογών                  
    ],
    functionalityUsage: 
        {
            "functionality": ["Αμυντική","Λατρευτική","Ταφική","Οικιστική","Επαγγελματική"], // <-- Προσθήκη/Αφαίρεση επιλογών   
            "usage": ["Βέβαιη","Πιθανολογούμενη","Άγνωστη"] // <-- Προσθήκη/Αφαίρεση επιλογών   
        }
    ,
    detailsOfConstruction: {
        "Αρχιτεκτονικός τύπος": ["value1","value2","value3"], // <-- Προσθήκη/Αφαίρεση επιλογών
        "Κάτοψη": ["value1","value2","value3"], // <-- Προσθήκη/Αφαίρεση επιλογών
        "Στέγαση": ["value1","value2","value3"], // <-- Προσθήκη/Αφαίρεση επιλογών
        "Τοιχοποιία": ["value1","value2","value3"], // <-- Προσθήκη/Αφαίρεση επιλογών
        "Διαστάσεις": true,
        "Παρατηρήσεις": false,        
    },
    decorations: {
        detailsOfDecoration: {
            data: ["Ζωγραφική","Γλυπτή","Εγχάρακτη","Ψηφιδωτή"],
            "Παρατηρήσεις": '',
        },
        
        otherDetails: {
            data: ["Οικόσημα","Επιγραφές"],
            "Παρατηρήσεις": '',        
        },
        preservationStatus: ["value1","value2"],
        "Επεμβάσεις συντήρησης": ''
    },
    thesmikoPlaisio: {
        kiriksi: {
            data: [],
            required: true
        },
        foreasProstasias: {
            data: ["value1","value2","value3"] // <-- Προσθήκη/Αφαίρεση επιλογών
        }, 
        idioktisiakoKathestws: {
            data:  ["value1","value2","value3"]  // <-- Προσθήκη/Αφαίρεση επιλογών
        },
        stoixeiaIdiokthsias: {
            required: true
        },
        comments: '',
        organized: 
            {
                radio: ["Nαι","Oχι"]
            }
        ,
        visitable:
            {
                radio: ["Nαι","Oχι"]
            }        
    },
    files: [
        "Φωτογραφική τεκμηρίωση:",
        "Σχεδιαστική τεκμηρίωση",
        "Βίντεο"
    ],
    relationships: [
        "Κινητά μνημεία-ευρήματα",
        "Βιβλιογραφία"
    ]
}

export default inputs;