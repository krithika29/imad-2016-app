var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var contents = 
contentOne : {
  date : "23 Sep",  
  heading:"Aricle One",
  body:`
  <p>This is my content for the article</p>
  <p>This is my content for article</p>
  <p>This is my content for the article</p>`
,
contentTwo : {
  date : "1 Sep",  
  heading:"Aricle Two",
  body:`
  <p>This is my content for 2nd article</p>
  <p>This is my content for article</p>
  <p>This is my content for the article</p>`},
contentThree : {
  date : "3 Sep",  
  heading:"Aricle Three",
  body:`
  <p>This is my content for article</p>
  <p>This is my content for the article</p>`
};

app.get('/:articleName',function(req,res){
    var articleName=req.param.articleName;
   res.send(createTemplate(contents[articleName]));
   
});


function createTemplate(content){
    
    var htmltemplate = `
    <html>
        <head>
            <title>${content.heading}</title>
        </head>
        <hr/>
        <body>
            <h1>
                <center>
                    <div id="date">${content.date}</div>
                </center>
            </h1>
            <hr/>
            <div id="content">${content.body}</div>
        </body>
    </html>
    `;
    return htmltemplate;
}
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
