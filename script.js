const search = document.getElementById("search");
const courseForm = document.getElementById("course-form");
const random = document.getElementById("random");
const coursesList = document.getElementById("courses");
const resultHeading = document.getElementById("result-heading");
const singleCourse = document.getElementById("single-course");

function searchCourse(e) {
  e.preventDefault();
  const searchTerm = search.value;


  if(searchTerm.trim()) {
    // do work
  } else {
    alert("Please enter a search value")
  }
}

courseForm.addEventListener("submit", searchCourse);
