var express = require("express");
var Business = require("../../models/igap/Business");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let business = new Business.Business();
  business.id = body.data.id;
  business.name = body.data.name;
  business.mobileno = body.data.mobileno;
  business.email = body.data.email;
  business.cityid = body.data.cityid;
  business.pincode = body.data.pincode;
  business.password = body.data.password;
  business.title = body.data.title;
  business.description = body.data.description;
  business.status = body.data.status;
 
  
  business.save().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
       console.log(err);
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/list", async (req, res) => {
  let body = req.body;
  let business = new Business.Business();

  business.list().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      console.log(err);
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/delete", async (req, res) => {
  let body = req.body;
  let business = new Business.Business();
  business.id = body.data.id;
  business.delete().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      console.log(err);
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});


router.post("/changestatus", async (req, res) => {
  let body = req.body;
  let business = new Business.Business();
  business.id = body.data.id;
  business.status = body.data.status;
  business.changestatus().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      console.log(err);
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/get", async (req, res) => {
  let body = req.body;
  let business = new Business.Business();
  business.id = body.data.id;
  business.get().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      console.log(err);
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

module.exports = router;