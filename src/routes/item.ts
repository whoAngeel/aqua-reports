import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";

const router = Router()

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', postItem)
router.patch('/:id', updateItem)
router.delete('/:id', deleteItem)


export default router