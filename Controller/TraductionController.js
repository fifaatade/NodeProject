var tableau= require ('../import/tableau')

const index = (req, res) => {
    res.send("Bienvenue sur ma page de conjugaison ! ");
};
tableau.dictionnaireTable
const store = (req, res) => {
    tableau.store(req, res);    
}

module.exports = {index, store}

