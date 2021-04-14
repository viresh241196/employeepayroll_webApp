window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
  });

const createInnerHtml = () =>{
    const headerHtml= "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
      <td>
        <img
          src="../assets/profile-images/Ellipse -3.png"
          class="profile"
          alt=""
        />
      </td>
      <td>Viresh Rawool</td>
      <td>M</td>
      <td>
        <div class="dept-label">Sales</div>
        <div class="dept-label">Finance</div>
        <div class="dept-label">HR</div>
      </td>
      <td>3000000</td>
      <td>1 Nov 2020</td>
      <td>
      <img src="../assets/icons/delete-black-18dp.svg" onclick="remove(this)" id="1" alt="delete">
      <img src="../assets/icons/create-black-18dp.svg" onclick="update(this)" id="1" alt="edit">
  </td>
    </tr>
    `;
    document.querySelector("#table-display").innerHTML=innerHtml;
  }