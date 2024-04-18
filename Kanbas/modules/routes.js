import * as dao from "./dao.js"
import modulesModel from "./module.js";
function ModuleRoutes(app) {

app.delete("/api/modules/:mid", async(req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid);
    res.sendStatus(200);
  });
    

app.post("/api/courses/:cid/modules", async (req, res) => {
  const { cid } = req.params;
  const { name, description } = req.body;
  const newModule = new modulesModel({
      id: 0,
      name: name,
      description: description,
      course: cid,
  });
  console.log("newModule")
  const module = await dao.createModule(newModule);
  res.send(module);
});

  app.get("/api/courses/:cid/modules", async(req, res) => {
    const { cid } = req.params;
    const modules=await dao.findModuleByCourseId(cid);
    console.log(modules);
    res.send(modules);
  });

  app.put("/api/modules/:mid", async(req, res) => {
    const { mid } = req.params;
    const modules = await dao.updateModule(mid, req.body);
    res.sendStatus(204);
  });

}
export default ModuleRoutes;