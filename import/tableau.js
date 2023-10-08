const dictionnaireTable = [
    {
      'id': 1,
      'français': "manger",
      'anglais': "to eat",
    },
    {
        'id': 2,
        'français': "rire",
        'anglais': "smile",
    },  
    {
        'id': 3,
        'français': "ordinateur",
        'anglais': "computer",
      },
    ];

    const store = (req, res) => {
        const frenchWord = req.body.word;
        const direction = req.body.direction; // "fr-en" ou "en-fr"
      
        let translation;
      
        if (direction === "fr-en") {
          translation = dictionnaireTable.find(entry => entry.français === frenchWord);
        } else if (direction === "en-fr") {
          translation = dictionnaireTable.find(entry => entry.anglais === frenchWord);
        } else {
          res.status(400).json({ error: 'Direction de traduction non valide' });
          return;
        }
      
        if (translation) {
          const translatedWord = direction === "fr-en" ? translation.anglais : translation.français;
          res.setHeader('Content-Type', 'application/json');
          res.json({ word: frenchWord, translation: translatedWord });
        } else {
          res.status(404).json({ error: 'Mot introuvable dans le dictionnaire' });
        }
      };
      
      module.exports={dictionnaireTable,store}