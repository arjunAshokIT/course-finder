const search = document.getElementById("search");
const courseForm = document.getElementById("course-form");
const random = document.getElementById("random");
const coursesList = document.getElementById("courses");
const resultHeading = document.getElementById("result-heading");
const singleCourse = document.getElementById("single-course");

function searchCourse(e) {
  // e -> submit event
  // send the form to the backend
  // we dont want to submit to the backend | default behavior

  e.preventDefault();
  const searchTerm = search.value;
  console.log(`searchTerm: ${searchTerm}`);
  if (searchTerm.trim()) {
    fetch(`courses.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resultHeading.innerHTML = `<h2>Search results for '${searchTerm}':</h2>`;

        const myCourses = data.filter((course) => {
          return course.course_name.includes(searchTerm);
        });

        if (myCourses == undefined) {
          resultHeading.innerHTML = `<p>There are no search results. Please try again</p>`;
          coursesList.innerHTML = "";
        } else {
          coursesList.innerHTML = myCourses.map((course) => {
            return `
            <div class="course"> 
              <img src="${course.course_img}" alt="${course.course_name}" height="200" width="200">
              <div class="course-info">
                <h3>${course.course_name}</h3>
              </div>
            </div>            
            `;
          }).join('')

          console.log(`coursesList.innerHTML`, coursesList.innerHTML);
        }
      });
  } else {
    alert("Please enter a search value");
  }
}

courseForm.addEventListener("submit", searchCourse);
