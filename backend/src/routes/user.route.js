import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { 
    getAllMessages,
    getAllUsers,

} from "../controller/user.controller.js";

const router = Router();


router.get('/', protectRoute, getAllUsers);
router.get('/messages/:userId', protectRoute, getAllMessages)



export default router;