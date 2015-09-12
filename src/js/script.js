// Make Project superclass
// make projects array
// render
// use jQuery

///////////////////////////
//// MODEL ////
///////////////////////////
// Project Class
var Project = function (stringName, stringId, stringUrl){
  this.name = stringName;
  this.id = stringId;
  this.src = stringUrl;
};

var projects = [1,2,3,4,5,6,7,8];
  // Fill out array with the superclass
  projects[0] = new Project('Arcade Game', '#arcadeGame', 'img/arcade-game-525x300.jpg');
  projects[1] = new Project('Javascript Resume', '#jsResume', 'img/js-resume-525x300.jpg');
  projects[2] = new Project('Website Design Mockup', '#webDesign', 'img/website-mockup-1-525-300.jpg');
  projects[3] = new Project('Mobile App Wireframe', '#mobileWireframe', 'img/mobile-app-wireframe-1-525x300.jpg');
  projects[4] = new Project('Wordpress Sites', '#wordPress', 'img/wordpress-customization-525x300.jpg');
  projects[5] = new Project('Digital Designs', '#digitalDesign', 'img/design-logo-525x300.jpg');
  projects[6] = new Project('Infographics', '#infographics', 'img/db-infographic-525x300.jpg');
  projects[7] = new Project('Brand Development', '#brandDevelopment', 'img/Saddleback-Church-Ministry-Brand-525x300.jpg');

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
      elem.id = project.id;
      elem.className = 'col-xs-4 project';
    img = document.createElement('img');
      img.src = project.src;
      img.alt = project.name;
      img.className = 'img-responsive center-block img-rounded shadow modalImg';
      img.dataset.toggle = 'modal';
      img.dataset.target = project.id;
    header = document.createElement('h3');
      header.textContent = project.name;

    /* When we click, unhide project
    list.addEventListener('click', (function(projectCopy) {
        return function() {
          document.getElementById(projectCopy.name).classList.toggle('isHidden');
        };
    })(project));
    */

    // Append all the projects
    document.getElementById('featuredProjects').appendChild(elem);
    document.getElementById(project.id).appendChild(img);
    document.getElementById(project.id).appendChild(header);
}