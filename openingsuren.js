function fetchOpeningsuren() {
  fetch("data/openingHours.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderTables(data);
    });
}

function renderTables(data) {
  const table1 = document.getElementById("table1");
  const table2 = document.getElementById("table2");
  const table3 = document.getElementById("table3");

  table1.innerHTML = "";
  table2.innerHTML = "";
  table3.innerHTML = "";

  //   data.forEach((elem) => {
  // const tr = document.createElement("tr");
  console.log(data);

  //---April/September---

  table1.innerHTML = `
  <th colspan="1"></th>

        <th colspan="2">${data.headers[0]}</th>
        <tr>
        <td></td>
        <td>${data.table1[0][0]}</td>
        <td>${data.table1[0][1]}</td>
    </tr>
    <tr>
    <td></td>
        <td>${data.table1[1][0]}</td>
        <td>${data.table1[1][1]}</td>
    </tr>
    <tr>
    <td></td>

        <td>${data.table1[2][0]}</td>
        <td>${data.table1[2][1]}</td>
    </tr>
    <tr>
    <td></td>

        <td>${data.table1[3][0]}</td>
        <td>${data.table1[3][1]}</td>
    </tr>
    <tr>
    <td></td>

        <td>${data.table1[4][0]}</td>
        <td>${data.table1[4][1]}</td>
    </tr>
    <tr>
    <td></td>

        <td>${data.table1[5][0]}</td>
        <td>${data.table1[5][1]}</td>
    </tr>
    <tr>
    <td></td>

        <td>${data.table1[6][0]}</td>
        <td>${data.table1[6][1]}</td>
    </tr>
    `;

  //---Oktober/Maart---

  table2.innerHTML = `
    
            <th colspan="2">${data.headers[1]}</th>
            <tr>
            <td>${data.table2[0][0]}</td>
            <td>${data.table2[0][1]}</td>
        </tr>
        <tr>
            <td>${data.table2[1][0]}</td>
            <td>${data.table2[1][1]}</td>
        </tr>
        <tr>
    
            <td>${data.table2[2][0]}</td>
            <td>${data.table2[2][1]}</td>
            <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>


        `;

  //---Feestdagen---
  table3.innerHTML = `
            
    <th colspan="3">${data.headers[2]}</th>
        <th colspan="1"></th>

                    <tr>
                    <td>${data.table3[0][0]}</td>
                    <td>${data.table3[0][1]}</td>
                    <td>${data.table3[0][2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3[1][0]}</td>
                    <td>${data.table3[1][1]}</td>
                    <td>${data.table3[1][2]}</td>

                    <td></td>

                </tr>
                <tr>
           
            
                    <td>${data.table3[2][0]}</td>
                    <td>${data.table3[2][1]}</td>
                    <td>${data.table3[2][2]}</td>
                    <td></td>


                </tr>
                <tr>
                    <td>${data.table3[3][0]}</td>
                    <td>${data.table3[3][1]}</td>
                    <td>${data.table3[2][2]}</td>
                    <td></td>
                </tr>
                <tr>

                    <td>${data.table3[4][0]}</td>
                    <td>${data.table3[4][1]}</td>
                    <td>${data.table3[4][2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3[5][0]}</td>
                    <td>${data.table3[5][1]}</td>
                    <td>${data.table3[5][2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3[6][0]}</td>
                    <td>${data.table3[6][1]}</td>
                    <td>${data.table3[6][2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3[7][0]}</td>
                    <td>${data.table3[7][1]}</td>
                    <td>${data.table3[7][2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3[8][0]}</td>
                    <td>${data.table3[8][1]}</td>
                    <td>${data.table3[8][2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3[9][0]}</td>
                    <td>${data.table3[9][1]}</td>
                    <td>${data.table3[9][2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3[10][0]}</td>
                    <td>${data.table3[10][1]}</td>
                    <td>${data.table3[10][2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3[11][0]}</td>
                    <td>${data.table3[11][1]}</td>
                    <td>${data.table3[11][2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3[12][0]}</td>
                    <td>${data.table3[12][1]}</td>
                    <td>${data.table3[12][2]}</td>
                    <td></td>

                </tr>`;
}

fetchOpeningsuren();
