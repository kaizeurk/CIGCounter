const Counter = require('../models/counter');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.createCounter = (req, res, next) => 
{
    var params = req.params;
    var resparam = req.body;
    const counter = new Counter(
    {
      name: req.body.name,
      countNumber : req.body.countnumber
    });
    console.log(counter);
    counter.save().then(
        () => res.status(201).json(
            { 
                message: 'Compteur '+ counter.name +' enregistré ! avec une valeur initiale de '+ counter.countNumber
            })
    ).catch(
        (error) => {
            res.status(400).json({ 
                error:error , counter :counter, bodyparam :params,resparam:resparam
            });
    });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllCounter =  (req, res, next) =>
{
    Counter.find().then(
        (counts) => {
            res.status(200).json(counts);
        }
    ).catch(
        (error) => {
            res.status(400).json({ 
                error:error 
            });
    });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getOneCounter = (req, res, next) =>
{
    
    Counter.findOne({ 
        name: req.params.name 
    })
    .then((counter) => {
        if(typeof counter != "undefined" && counter != null)
        {
            res.status(200).json(counter);

        }
        else
        {
            res.status(404).json({ error: "Aucun résultat trouvé." });

        }
    })
    .catch((error) => {
        res.status(404).json({ error:error });
    });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.increaseCounter = (req, res, next) => 
{

    var counter = null;   
    
    
    Counter.findOne({ 
        name: req.params.name 
    })
    .then((counter) => {
        if(typeof counter != "undefined" && counter != null)
        {

            counter.countNumber++;
            modifyCounter(counter, res);

        }
        else
        {
            res.status(404).json({ error: "Aucun résultat trouvé." });

        }
    })
    .catch((error) => {
        res.status(404).json({  error:error });
    });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.decreaseCounter = (req, res, next) => 
{

    var counter = null;   
    
    
    Counter.findOne({ 
        name: req.params.name 
    })
    .then((counter) => {
        if(typeof counter != "undefined" && counter != null)
        {

            counter.countNumber--;
            if(counter.countNumber == 0)
            {
                Counter.deleteOne({ _id: counter._id })
                    .then(() => {
                        res.status(200).json({ message: 'Compteur '+ counter.name +' a été supprimé !'});
                    })
                    .catch((error) => {
                        res.status(400).json({ error });
                    });
                  
            }else
            {
                modifyCounter(res,counter); 
            }
        }
        else
        {
            res.status(404).json({ error: "Aucun résultat trouvé." });

        }
    })
    .catch((error) => {
        res.status(404).json({ error });
    });
};

/**
 * 
 * @param {*} counter 
 * @param {*} res 
 */
function modifyCounter(counter, res) 
{
    Counter.updateOne(counter)
        .then(() => {
            res.status(200).json(
                { message: 'Compteur ' + counter.name + ' a mise à jour valeur = ' + counter.countNumber });
        })
        .catch((error) => {
            res.status(404).json({ error });
        });
}
