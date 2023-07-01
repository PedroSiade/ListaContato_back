import {Router} from "express";
import ContactsController from "./controller/ContactsController";
import contactsController from "./controller/ContactsController";

const route = Router()
route.post('/', contactsController.store)
route.get('/', contactsController.index)
route.get('/:id', contactsController.show)
route.delete('/:id', contactsController.destroy)
route.put('/:id', contactsController.update)


export default route;