
class NewsController{
    index(req, res){
        res.json(req.body);
    }
}

module.exports = new NewsController