const express = require('express');
const postsController = require('../controllers/post.controller');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post("/",checkAuth.checkAuth, postsController.save);
router.get("/:id",checkAuth.checkAuth, postsController.show);
router.get("/",checkAuth.checkAuth, postsController.index);
router.put("/:id", checkAuth.checkAuth,postsController.update);
router.delete("/:id", checkAuth.checkAuth, postsController.destroy);

module.exports = router;
