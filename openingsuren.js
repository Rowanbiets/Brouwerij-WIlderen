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


  //---April/September---

  table1.innerHTML = `
  <th colspan="1"></th>

        <th colspan="2">${data.headers[0]}</th>
        <tr>
        <td></td>
        <td>${data.table1.row1[0]}</td>
        <td>${data.table1.row1[1]}</td>
    </tr>
    <tr>
    <td></td>
        <td>${data.table1.row2[0]}</td>
        <td>${data.table1.row2[1]}</td>
    </tr>
    <tr>
    <td></td>

        <td>${data.table1.row3[0]}</td>
        <td>${data.table1.row3[1]}</td>
    </tr>
    <tr>
    <td></td>

        <td>${data.table1.row4[0]}</td>
        <td>${data.table1.row4[1]}</td>
    </tr>
    <tr>
    <td></td>

        <td>${data.table1.row5[0]}</td>
        <td>${data.table1.row5[1]}</td>
    </tr>
    <tr>
    <td></td>

        <td>${data.table1.row6[0]}</td>
        <td>${data.table1.row6[1]}</td>
    </tr>
    <tr>
    <td></td>

        <td>${data.table1.row7[0]}</td>
        <td>${data.table1.row7[1]}</td>
    </tr>
    `;

  //---Oktober/Maart---

  table2.innerHTML = `
    
            <th colspan="2">${data.headers[1]}</th>
            <tr>
            <td>${data.table2.row1[0]}</td>
            <td>${data.table2.row1[1]}</td>
        </tr>
        <tr>
            <td>${data.table2.row2[0]}</td>
            <td>${data.table2.row2[1]}</td>
        </tr>
        <tr>
    
            <td>${data.table2.row3[0]}</td>
            <td>${data.table2.row3[1]}</td>
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
                    <td>${data.table3.row1[0]}</td>
                    <td>${data.table3.row1[1]}</td>
                    <td>${data.table3.row1[2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3.row2[0]}</td>
                    <td>${data.table3.row2[1]}</td>
                    <td>${data.table3.row2[2]}</td>

                    <td></td>

                </tr>
                <tr>
           
            
                    <td>${data.table3.row2[0]}</td>
                    <td>${data.table3.row2[1]}</td>
                    <td>${data.table3.row2[2]}</td>
                    <td></td>


                </tr>
                <tr>
                    <td>${data.table3.row3[0]}</td>
                    <td>${data.table3.row3[1]}</td>
                    <td>${data.table3.row3[2]}</td>
                    <td></td>
                </tr>
                <tr>

                    <td>${data.table3.row4[0]}</td>
                    <td>${data.table3.row4[1]}</td>
                    <td>${data.table3.row4[2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3.row5[0]}</td>
                    <td>${data.table3.row5[1]}</td>
                    <td>${data.table3.row5[2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3.row6[0]}</td>
                    <td>${data.table3.row6[1]}</td>
                    <td>${data.table3.row6[2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3.row7[0]}</td>
                    <td>${data.table3.row7[1]}</td>
                    <td>${data.table3.row7[2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3.row8[0]}</td>
                    <td>${data.table3.row8[1]}</td>
                    <td>${data.table3.row8[2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3.row9[0]}</td>
                    <td>${data.table3.row9[1]}</td>
                    <td>${data.table3.row9[2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3.row10[0]}</td>
                    <td>${data.table3.row10[1]}</td>
                    <td>${data.table3.row10[2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3.row11[0]}</td>
                    <td>${data.table3.row11[1]}</td>
                    <td>${data.table3.row11[2]}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>${data.table3.row12[0]}</td>
                    <td>${data.table3.row12[1]}</td>
                    <td>${data.table3.row12[2]}</td>
                    <td></td>

                </tr>`;
}

fetchOpeningsuren();