

module.exports ={

    getInventory: (req,res) => {
        const db = req.app.get('db');
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        }).catch( err => console.log("OOPS! I Did It Again!", err));
    },


    updateProducts: (req, res) => {
        const db = req.app.get('db');
        const {product_id} = req.params;
        db.update_products( product_id).then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => console.log("OOPS! I Dit It Again!", err));
    },

    createProducts: (req, res) => {
        const db = req.app.get('db');
        const {name, price, img_url} = req.body;

        db.create_product([name, price, img_url]).then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => console.log("OOPS! I Dit It Again!", err))
    },

    deleteProducts: (req, res) => {
        const db = req.app.get('db');
        const {product_id} = req.params;
        db.delete_products(product_id).then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => console.log("OOPS! I Dit It Again!", err));
    }
}
