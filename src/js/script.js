// Make Project superclass
// make projects array
// render
// use jQuery

///////////////////////////
//// MODEL ////
///////////////////////////
// Project Class
var Project = function (stringName, stringUrl){
  this.name = stringName;
  this.headerId = stringName + 'Header';
  this.countId = stringName + 'Counter';
  this.count = 0;
  this.imgId = stringName + 'Img';
  this.src = stringUrl;
};

var projects = [1,2,3,4,5];
  // Fill out array with the superclass
  projects[0] = new Project('Arcade Game', 'img/arcade-game-525x300.jpg');
  projects[1] = new Project();
  projects[2] = new Project('Pumpkin', 'http://s3.amazonaws.com/readers/2012/01/25/320pxredcat8727_1.jpg');
  projects[3] = new Project('Metoo', 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/snowshoe-cat3.jpg');
  projects[4] = new Project('Tootsie', 'http://4hdwallpapers.com/wp-content/uploads/2013/04/Funny-Little-Brown-Project-1024x768.jpg');

///////////////////////////
//// RENDER ////
///////////////////////////
// Declare for loop vars
var project, elem, list, header, img, counter;
// Loop over the numbers in projects array
for (var i = 0; i < projects.length; i++) {

    // This is the number we're on...
    project = projects[i];

    // We're creating a DOM element for the number
    // dataset.toggle/target
    elem = document.createElement('div');
      elem.id = project.name;
      elem.className = 'col-xs-4 project';
    img = document.createElement('img');
      img.src = project.src;
      img.alt = 'Arcade Game';
      img.className = 'img-responsive center-block img-rounded shadow modalImg';
      img.dataset.toggle = 'modal';
      img.dataset.target = '#arcadegame';
    header = document.createElement('h3');
      header.textContent = project.name;

    // When we click header, unhide project
    list.addEventListener('click', (function(projectCopy) {
        return function() {
          document.getElementById(projectCopy.name).classList.toggle('isHidden');
          document.getElementById(projectCopy.headerId).classList.toggle('isHidden');
          document.getElementById(projectCopy.countId).classList.toggle('isHidden');
          document.getElementById(projectCopy.imgId).classList.toggle('isHidden');
        };
    })(project));

    // ... and when we click img, add to count for this project
    img.addEventListener('click', (function(projectCopy) {
        return function() {
            projectCopy.count++;
            console.log(projectCopy.name + ': ' + projectCopy.count);
            document.getElementById(projectCopy.countId).textContent = projectCopy.count;
        };
    })(project));

    // Append all the projects
    document.getElementById('list').appendChild(list);
    document.getElementById('litterBox').appendChild(elem).classList.add('isHidden');
    document.getElementById(project.name).appendChild(header).classList.add('isHidden');
    document.getElementById(project.name).appendChild(counter).classList.add('isHidden');
    document.getElementById(project.name).appendChild(img).classList.add('isHidden');
}