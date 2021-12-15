var express = require('express');
var router = express.Router();
const { createForum, updateForum, getSingleForum, deleteForum, getAllForums, createForumComments } = require('../controllers/ForumController')
const { protect } = require('../middleware/ProtectAuth')


router.route("/").post(protect, createForum)
router.get("/all", getAllForums)
router.route("/delete/:id").delete(protect, deleteForum)
router.route('/:id/comments').post(protect, createForumComments)
router.route('/:id').get(getSingleForum)
router.route('/edit/:id').put(protect, updateForum)



module.exports = router