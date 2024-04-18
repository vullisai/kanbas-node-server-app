import * as dao from "./dao.js";
import courseModel from "./model.js";

export default function CourseRoutes(app) {

  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  app.post("/api/courses", async (req, res) => {
    const { name, description, startDate, endDate, number } = req.body;
    const newCourse = new courseModel({ id: `RS ${Math.floor(100 + Math.random() * 900)}`, name, description, startDate, endDate, number });
    const course = await dao.createCourse(newCourse)
    res.send(course);
});

  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    await dao.deleteCourse(id);
    res.sendStatus(204);
  });

  app.put("/api/courses/:id", async(req, res) => {
    const { id } = req.params;
    const course = req.body;
    await dao.updateCourse(id,course);
    res.sendStatus(204);
  });

  app.get("/api/courses/:id", async (req, res) => {
    const id  = req.params.id;
    const course=await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });
}