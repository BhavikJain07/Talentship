import { Request, Response, Router } from "express";
import {
  handleGetAllUsers,
  handleGetSingleUser,
  handleCreateNewUser,
  handleDeleteUser,
  handleUpdateUser,
} from "../../utils/prisma.utils";
const router: Router = Router();

//Get all users
router.get("/", async (req: Request, res: Response) => {
  const data = await handleGetAllUsers();
  if (data.status === 1) {
    res.status(200).json(data);
  } else {
    res.status(500).json(data);
  }
});

//Get a single user
router.get("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const data = await handleGetSingleUser(id);
  if (data.status === 1) {
    res.status(200).json(data);
  } else {
    res.status(500).json(data);
  }
});

//Create a new user
router.post("/", async (req: Request, res: Response) => {
  const name: string = req.body.name;
  const data = await handleCreateNewUser(name);
  if (data.status === 1) {
    res.status(200).json(data);
  } else {
    res.status(500).json(data);
  }
});

//Update a user
router.patch("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const name: string = req.body.name;
  const data = await handleUpdateUser(id, name);
  if (data.status === 1) {
    res.status(200).json(data);
  } else {
    res.status(500).json(data);
  }
});

//Delete a user
router.delete("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const data = await handleDeleteUser(id);
  if (data.status === 1) {
    res.status(200).json(data);
  } else {
    res.status(500).json(data);
  }
});

export default router;
