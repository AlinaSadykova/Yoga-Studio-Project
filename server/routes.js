const api = require("./controllers")
const bp = require("body-parser")


function router(app)
{
    app.use(bp.json())
    app.get("/api/users/:id", api.readOne);
    app.delete("/api/users/:id", api.deleteOne);
    app.patch("/api/users/:id", api.updateOne);
    app.post("/api/users", api.createOne);
}

module.exports = router;