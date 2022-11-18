var fs=require('fs');
var http=require('http');
var server=http.createServer(function (req,res) {
  if(req.url=="/"){
     let homePage= fs.readFileSync('home.html','utf8');
     res.end(homePage);
  }
  else if(req.url=="/About"){
      let aboutPage= fs.readFileSync('about.html','utf8');
      res.end(aboutPage);

  }
  else if(req.url=="/Docs"){

      let documentationPage= fs.readFileSync('docs.html','utf8');
      res.end(documentationPage);
  }

  else if(req.url=="/News"){
      let newsPage= fs.readFileSync('news.html','utf8');
      res.end(newsPage);
  }

});
server.listen(4040);
console.log("Server Run Success");
