const Comment = function() {
  this.comments = [];
};

Comment.prototype.getComments = function(formData) {
  let formDataObj = {};
  let splitedData = formData.split("&");
  formDataObj.date = new Date();
  formDataObj.name = splitedData[0].split("=")[1];
  formDataObj.comment = splitedData[1].split("=")[1];
  return formDataObj;
}

Comment.prototype.getContentTypes = function(fileName) {
  let extensionType = fileName.slice(fileName.lastIndexOf('.'))
  let type = {
    ".html": "text/html",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".js": "text/javascript",
    ".gif": "text/gif",
    ".pdf": "application/pdf",
    ".css": "text/css"
  }
  return type[extensionType];
}

Comment.prototype.generateTable = function(database) {
  let rows = database.map(function(element) {
    return `<tr><td>${element.date}<br/></td><td>${element.name}<br/></td><td>${element.comment}<br/></td></tr>`
  })
  return `<table>${rows.join("\n")}<table/>`
}

module.exports = Comment;
