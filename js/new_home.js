let empPayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
  empPayrollList = getEmppayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml(empPayrollList);
  localStorage.removeItem("editEmp");
});

const getEmppayrollDataFromStorage = () => {
  return localStorage.getItem("EmployeePayrollList")
    ? JSON.parse(localStorage.getItem("EmployeePayrollList"))
    : [];
};

const createInnerHtml = () => {
  if (empPayrollList.length == 0) return;
  const headerHtml =
    "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
  let innerHtml = `${headerHtml}`;
  for (const empPayrollData of empPayrollList) {
    innerHtml = `${innerHtml}
    <tr>
      <td>
        <img
          src="${empPayrollData._profilePic}"
          class="profile"
          alt=""
        />
      </td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._gender}</td>
      <td>
        ${getDeptHtml(empPayrollData._department)}</td>
      <td>${empPayrollData._salary}</td>
      <td>${stringifyDate(empPayrollData._startDate)}</td>
      <td>
      <img id="${empPayrollData._id}" src="../assets/icons/delete-black-18dp.svg" onclick="remove(this)"  alt="delete">${empPayrollData._id}
      <img src="../assets/icons/create-black-18dp.svg" onclick="update(this)" id="${empPayrollData._id}" alt="edit">
        </td>
    </tr>
    `;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};

const getDeptHtml = (deptList) => {
  let deptHtml = "";
  for (const dept of deptList) {
    deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`;
  }
  return deptHtml;
};

const remove = (node) => {
    console.log(node)
  let empPayrollData = empPayrollList.find((empData) => empData._id == node.id);
  if (!empPayrollData) return;
  const index = empPayrollList
    .map((empData) => empData._id)
    .indexOf(empPayrollData._id);
  empPayrollList.splice(index, 1);
  localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
};
