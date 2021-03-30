import {Router} from 'express'
import {getAll} from '../controllers/servers.js'

const router = Router();

router.get('/api/server', (req,res)=>{
    res.json({name:"filin"});
});
router.get('/api/my-server', getAll);

export default router;
