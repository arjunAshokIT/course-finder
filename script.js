const search = document.getElementById("search");
const courseForm = document.getElementById("course-form");
const random = document.getElementById("random");
const coursesList = document.getElementById("courses");
const resultHeading = document.getElementById("result-heading");
const singleCourse = document.getElementById("single-course");

function searchCourse(e) {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm.trim()) {
    fetch(`courses.json`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);

        if (jsonData == null || jsonData.length === 0) {
          resultHeading.innerHTML = `<p class="text-center m-2">There are no search results. Try again!</h2>`;
        } else if (jsonData && coursesList) {
          resultHeading.innerHTML = `<p class="text-center m-2">Below are the search results. Try again!</h2>`;
          coursesList.innerHTML = jsonData.map((course) => {
            return `
             <div class='course col-3'>
             <img src=${course.course_img} />
             <h5>${course.course_name}</h5>
             <h6>${course.course_id}</h6>


             </div>
            `;
          });
        }
      });
  } else {
    alert("Please enter a search value");
  }
}

courseForm.addEventListener("submit", searchCourse);
