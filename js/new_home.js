window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml =
    "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
  let innerHtml = `${headerHtml}`;
  let empPayrollList = createEmployeePayrollJSON();
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
      <td>${empPayrollData._startDate}</td>
      <td>
      <img src="../assets/icons/delete-black-18dp.svg" onclick="remove(this)" id="${
        empPayrollData._id
      }" alt="delete">
      <img src="../assets/icons/create-black-18dp.svg" onclick="update(this)" id="${
        empPayrollData._id
      } " alt="edit">
        </td>
    </tr>
    `;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};

const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
    {
      _name: "Viresh Rawool",
      _gender: "M",
      _department: ["Engineering", "Finance"],
      _salary: "500000",
      _startDate: "29 Oct 2019",
      _note: "",
      _id: new Date().getTime(),
      _profilePic: "assetsprofile-imagesEllipse -3.png",
    },
    {
      _name: "Pooja Gangan",
      _gender: "F",
      _department: ["Engineering", "Finance"],
      _salary: "900000",
      _startDate: "29 Oct 2019",
      _note: "",
      _id: new Date().getTime() + 1,
      _profilePic: "assetsprofile-imagesEllipse -1.png",
    },
  ];
  return empPayrollListLocal;
};

const getDeptHtml = (deptList) => {
  let deptHtml = "";
  for (const dept of deptList) {
    deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`;
  }
  return deptHtml;
};
