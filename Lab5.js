export default function Lab5(app)
{
    const assignment = {
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      };
    
    const module={
        id: 1,
        name: "Rocket Science",
        description: "Understanding of rocket science",
        course: "Engineering"
    };

    const todos = [
        { id: 1, title: "Task 1", description: "Create a NodeJS server with ExpressJS",completed: false },
        { id: 2, title: "Task 2", description: "Create a NodeJS server with ExpressJS", completed: true },
        { id: 3, title: "Task 3", description: "Create a NodeJS server with ExpressJS", completed: false },
        { id: 4, title: "Task 4", description: "Create a NodeJS server with ExpressJS", completed: true },
      ];
    

    app.post("/a5/todos", (req, res) => {
        const newTodo = {
          ...req.body,
          id: new Date().getTime(),
        };
        todos.push(newTodo);
        res.json(newTodo);
      });
    app.get("/a5/todos/create", (req, res) => {
        const newTodo = {
          id: new Date().getTime(),
          title: "New Task", completed: false,
        };
        todos.push(newTodo);
        res.json(todos);
      });    
    app.get("/a5/todos/:id/completed/:status",(req,res)=>{
        const {id,status}=req.params;
        const todo=todos.find((t)=>t.id===parseInt(id));
        todo.completed=status;
        res.json(todos);
    });

    app.get("/a5/todos/:id/description/:newdescrption", (req,res)=>{
        const {id, newdescrption}=req.params;
        const todo=todos.find((t)=>t.id===parseInt(id));
        todo.description=newdescrption;
        res.json(todos);
    });

    app.get("/a5/todos/:id/title/:newTitle", (req,res)=>{
        const {id, newTitle}=req.params;
        const todo=todos.find((t)=>t.id===parseInt(id));
        todo.title=newTitle;
        res.json(todos);
    });

    app.delete("/a5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (!todo) {
            res.status(404)
              .json({ message: `Unable to delete Todo with ID ${id}` });
            return;
          }      
        todos.splice(todos.indexOf(todo), 1);
        res.sendStatus(200);
      });

    app.put("/a5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (!todo) {
            res.status(404)
              .json({ message: `Unable to update Todo with ID ${id}` });
            return;
          }      
        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.due = req.body.due;
        todo.completed = req.body.completed;
        res.sendStatus(200);
      });
    

    
    app.get("/a5/todos/create", (req, res) => {
        const newTodo = {
          id: new Date().getTime(),
          title: "New Task",
          completed: false,
        };
        todos.push(newTodo);
        res.json(todos);
      });
    
    app.get("/a5/todos/:id", (req, res)=>{
        const {id}=req.params;
        const todo=todos.find((t)=>t.id==parseInt(id));
        res.json(todo);
    });

    app.get("/a5/todos", (req,res)=>{
        const {completed}=req.query;
        if(completed!==undefined){
            const completeBool=completed==="true";
            const completedTodos=todos.filter((t)=>t.completed==completeBool);
            res.json(completedTodos);
            return;
        }
        res.json(todos);
    });

    app.get("/a5/module/description/:newDescription", (req, res)=>{
        const {newDescription}=req.params;
        module.description=newDescription;
        res.json(module);
    });

    app.get("/a5/assignment/completed/:status", (req,res)=>{
        const { status } = req.params;
        assignment.completed = (status === 'true');
        res.json(assignment);
    });

    app.get("/a5/assignment/score/:newScore", (req, res)=>{
        const {newScore}=req.params;
        assignment.score=newScore;
        res.json(assignment);
    })

    app.get("/a5/module/name/:newName", (req, res)=>{
        const {newName}=req.params;
        module.name=newName;
        res.json(module);
    });

    app.get("/a5/assignment/title/:newTitle", (req,res)=>{
        const {newTitle} = req.params;
        assignment.title=newTitle;
        res.json(assignment);
    });

    app.get("/a5/module/name", (req,res)=>{
        res.send(module.name)
    });

    app.get("/a5/module", (req, res)=>{
        res.json(module);
    })

    app.get('/a5/Welcome', (req,res)=>{
        res.send("Welcome to assignment 5")
    });

    app.get("/a5/add/:a/:b", (req,res)=>{
        const { a, b }=req.params;
        const sum=parseInt(a)+parseInt(b);
        res.send(sum.toString());
    });

    app.get("/a5/subtract/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
    });
      
    app.get("/a5/calculator", (req,res)=>{
        const {a,b,operator}=req.query;
        let result=0;
        switch(operator){
            case "add":
                result=parseInt(a)+parseInt(b);
                break;
            case "sub":
                result=parseInt(a)-parseInt(b);
                break;
            case "mul":
                result=parseInt(a)*parseInt(b);
                break;
            case "div":
                result=parseInt(a)/parseInt(b);
                break;
            default:
                result ="Invalid operator";
        }
        res.send(result.toString());
    });  

    app.get("/a5/assignment", (req,res)=>{
        res.json(assignment);
    });

    app.get("/a5/assignment/title", (req, res)=>{
        res.send(assignment.title);
    });

}