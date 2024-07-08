const { Router } = require('express');
const { getDream, saveDreams, deleteDream, editDream } = require('./DreamController')

const router = Router();

router.get('/', getDream);
router.post('/saveDreams', saveDreams);
router.post('/deleteDream', deleteDream);
router.post('/editDream', editDream)






module.exports = router;