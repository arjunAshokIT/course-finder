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

  if (searchTerm.trim()) {
    fetch(`courses.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resultHeading.innerHTML = `<h2>Search results for '${searchTerm}':</h2>`;

        const myCourse = data.find((course) => {
          return course.course_name == searchTerm;
        });

        if (myCourse == undefined) {
          resultHeading.innerHTML = `<p>There are no search results. Please try again</p>`;
          coursesList.innerHTML = "";
        } else {
          coursesList.innerHTML = `
          <hr/>
          <h2>${myCourse.course_name}</h2>
          <p>${myCourse.course_id}</p>
          <img src="${myCourse.course_img}"  height=200 width=200/> 
          `;
        }
      });

    // if (jsonData == null || jsonData.length === 0) {
    //   resultHeading.innerHTML = `<p class="text-center m-2">There are no search results. Try again!</h2>`;
    // } else if (jsonData && coursesList) {
    //   resultHeading.innerHTML = `<p class="text-center m-2">Below are the search results. Try again!</h2>`;
    //   coursesList.innerHTML = jsonData.map((course) => {
    //     return `
    //      <div class='course col-3'>
    //      <img src=${course.course_img} />
    //      <h5>${course.course_name}</h5>
    //      <h6>${course.course_id}</h6>

    //      </div>
    //     `;
    //   });
    // }
    // });
  } else {
    alert("Please enter a search value");
  }
}

courseForm.addEventListener("submit", searchCourse);
