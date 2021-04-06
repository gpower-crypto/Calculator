const express= require("express")
const router= express.Router();

router
.route("/cars")
.get(function(req,res){res.send("hi get /things/cars");
})
.post(function(req,res){res.send("hi post /things/cars");
});

router
.route("/cars/:carid")
.get(function(req,res){res.send("hi get /things/cars" + req.params.carid);
console.log(req.params.carid);
})
.post(function(req,res){res.send("hi post /things/cars" + req.params.carid);
});

module.exports= router;
