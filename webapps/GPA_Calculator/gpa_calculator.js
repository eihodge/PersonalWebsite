let courses = [];
      
function addCourse() {
  let name = document.getElementById('course-title').value;
  let credits = parseInt(document.getElementById('course-credits').value);

  if (!isNaN(credits)) {
    courses.push({
      name: name,
      grade: document.getElementById('grade-select').value,
      credits: credits,
    });
    renderCoursesList();
  } else {
    alert("Invalid input. Credits must be an integer.");
  }
}

function renderCoursesList() {
  document.getElementById('courses-list').innerHTML = '';
  courses.forEach(function(course) {
    const element = document.createElement('div');
    element.innerText = course.name + ' - Grade: ' + course.grade + ', Credits: ' + course.credits;
    const courseList = document.getElementById('courses-list');
    courseList.appendChild(element);
  });
}

function calculateGPA() {
  if (courses.length > 0) {
    let totalCredits = 0.0;
    let totalCreditHours = 0.0;
    for (const element of courses) {
      totalCredits += (parseFloat(element.grade) * parseFloat(element.credits));
      totalCreditHours += parseFloat(element.credits);
    }
    let gpa = (totalCredits/totalCreditHours).toFixed(2);
    document.getElementById('display-gpa').value = gpa;
  }
}