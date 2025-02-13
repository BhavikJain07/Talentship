import express from 'express';
import { createNewProject, getAllProjects, getProject, updateProject, deleteProject } from './utils/prisma_utils.js';
const app = express();
app.use(express.json());

//Get all projects
app.get("/projects", async (req, res) => {
    const projects = await getAllProjects();
    return res.json(projects);
});

//Get individual project
app.get("/projects/:id", async (req, res) => {
    const {id} = req.params;
    const project = await getProject(id);
    return res.json(project);
});

//Create new project
app.post("/projects", async (req, res) => {
    const { name, description } = req.body;
    const project = await createNewProject({name, description});
    return res.json(project);
});

//Update description of one project
app.patch("/projects/:id", async (req, res) => {
    const {id} = req.params;
    const {description} = req.body;
    const project = await updateProject(id, {description});
    return res.json(project);
});

//Delete a project
app.delete("/projects/:id", async (req, res) => {
    const {id} = req.params;
    const project = await deleteProject(id);
    return res.json(project);
});

app.listen(3000, () => console.log("Server ready on port 3000"));