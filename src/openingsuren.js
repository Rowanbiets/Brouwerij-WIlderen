export default function fetchOpeningsuren() {
  return fetch("data/openingHours.json")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      renderTables(data);
      //   console.error("OPENINGSUREN")
    });
}

function renderTables(data) {
//   const table1 = document.getElementById("table1");
//   const table2 = document.getElementById("table2");
//   const table3 = document.getElementById("table3");
  const table4 = document.getElementById("table4");
  const table5 = document.getElementById("table5");
  const table6 = document.getElementById("table6");

//   table1.innerHTML = "";
//   table2.innerHTML = "";
//   table3.innerHTML = "";
  table4.innerHTML = "";
  table5.innerHTML = "";
  table6.innerHTML = "";

  //---April/September---

//   table1.innerHTML = `
//         <th data-i18n="tableDateSpan.0" colspan="2">${data.headers[0]}</th>

//         <tr>
        
//         <td data-i18n="table.0.table1.row1.0" >${data.table1.row1[0]}</td>
//         <td data-i18n="table.0.table1.row1.1"" >${data.table1.row1[1]}</td>
//     </tr>
//     <tr>
    
//         <td data-i18n="table.0.table1.row2.0">${data.table1.row2[0]}</td>
//         <td data-i18n="table.0.table1.row2.1">${data.table1.row2[1]}</td>
//     </tr>
//     <tr>
    

//         <td data-i18n="table.0.table1.row3.0">${data.table1.row3[0]}</td>
//         <td data-i18n="table.0.table1.row3.1">${data.table1.row3[1]}</td>
//     </tr>
//     <tr>
    

//         <td data-i18n="table.0.table1.row4.0">${data.table1.row4[0]}</td>
//         <td data-i18n="table.0.table1.row4.1">${data.table1.row4[1]}</td>
//     </tr>
//     <tr>
    

//         <td data-i18n="table.0.table1.row5.0">${data.table1.row5[0]}</td>
//         <td data-i18n="table.0.table1.row5.1">${data.table1.row5[1]}</td>
//     </tr>
//     <tr>
    

//         <td data-i18n="table.0.table1.row6.0">${data.table1.row6[0]}</td>
//         <td data-i18n="table.0.table1.row6.1">${data.table1.row6[1]}</td>
//     </tr>
//     <tr>
    

//         <td data-i18n="table.0.table1.row7.0">${data.table1.row7[0]}</td>
//         <td data-i18n="table.0.table1.row7.1">${data.table1.row7[1]}</td>
//     </tr>
//     `;

//   //---Oktober/Maart---

//   table2.innerHTML = `
    
//             <th data-i18n="tableDateSpan.1" colspan="2">${data.headers[1]}</th>
//             <tr>
//             <td data-i18n="table.0.table2.row1.0">${data.table2.row1[0]}</td>
//             <td data-i18n="table.0.table2.row1.1">${data.table2.row1[1]}</td>
//         </tr>
//         <tr>
//             <td data-i18n="table.0.table2.row2.0">${data.table2.row2[0]}</td>
//             <td data-i18n="table.0.table2.row2.1">${data.table2.row2[1]}</td>
//         </tr>
//         <tr>
    
//             <td data-i18n="table.0.table2.row3.0">${data.table2.row3[0]}</td>
//             <td data-i18n="table.0.table2.row3.1">${data.table2.row3[1]}</td>
//             <tr>
//             <td class="empty"></td>
//             <td class="empty"></td>
//           </tr>
//           <tr>
//             <td class="empty"></td>
//             <td class="empty"></td>
//           </tr>
//           <tr>
//             <td class="empty"></td>
//             <td class="empty"></td>
//           </tr>
//           <tr>
//             <td class="empty"></td>
//             <td class="empty"></td>
//           </tr>


//         `;

  //---Feestdagen---
//   table3.innerHTML = `
            
//     <th data-i18n="tableDateSpan.2" colspan="3">${data.headers[2]}</th>

//         <tr>
//                     <td data-i18n="table.0.table3.row1.0">${data.table3.row1[0]}</td>
//                     <td data-i18n="table.0.table3.row1.1">${data.table3.row1[1]}</td>
//                     <td data-i18n="table.0.table3.row1.2">${data.table3.row1[2]}</td>
                    
//                 </tr>
//                 <tr>
           
            
//                     <td data-i18n="table.0.table3.row2.0">${data.table3.row2[0]}</td>
//                     <td data-i18n="table.0.table3.row2.1">${data.table3.row2[1]}</td>
//                     <td data-i18n="table.0.table3.row2.2">${data.table3.row2[2]}</td>
                    


//                 </tr>
//                 <tr>
//                     <td data-i18n="table.0.table3.row3.0">${data.table3.row3[0]}</td>
//                     <td data-i18n="table.0.table3.row3.1">${data.table3.row3[1]}</td>
//                     <td data-i18n="table.0.table3.row3.2">${data.table3.row3[2]}</td>
                    
//                 </tr>
//                 <tr>

//                     <td data-i18n="table.0.table3.row4.0">${data.table3.row4[0]}</td>
//                     <td data-i18n="table.0.table3.row4.1">${data.table3.row4[1]}</td>
//                     <td data-i18n="table.0.table3.row4.2">${data.table3.row4[2]}</td>
                    
//                 </tr>
//                 <tr>
//                     <td data-i18n="table.0.table3.row5.0">${data.table3.row5[0]}</td>
//                     <td data-i18n="table.0.table3.row5.1">${data.table3.row5[1]}</td>
//                     <td data-i18n="table.0.table3.row5.2">${data.table3.row5[2]}</td>
                    
//                 </tr>
//                 <tr>
//                     <td data-i18n="table.0.table3.row6.0">${data.table3.row6[0]}</td>
//                     <td data-i18n="table.0.table3.row6.1">${data.table3.row6[1]}</td>
//                     <td data-i18n="table.0.table3.row6.2">${data.table3.row6[2]}</td>
                    
//                 </tr>
//                 <tr>
//                     <td data-i18n="table.0.table3.row7.0">${data.table3.row7[0]}</td>
//                     <td data-i18n="table.0.table3.row7.1">${data.table3.row7[1]}</td>
//                     <td data-i18n="table.0.table3.row7.2">${data.table3.row7[2]}</td>
                    
//                 </tr>
//                 <tr>
//                     <td data-i18n="table.0.table3.row8.0">${data.table3.row8[0]}</td>
//                     <td data-i18n="table.0.table3.row8.1">${data.table3.row8[1]}</td>
//                     <td data-i18n="table.0.table3.row8.2">${data.table3.row8[2]}</td>
                    
//                 </tr>
//                 <tr>
//                     <td data-i18n="table.0.table3.row9.0">${data.table3.row9[0]}</td>
//                     <td data-i18n="table.0.table3.row9.1">${data.table3.row9[1]}</td>
//                     <td data-i18n="table.0.table3.row9.2">${data.table3.row9[2]}</td>
                    
//                 </tr>
//                 <tr>
//                     <td data-i18n="table.0.table3.row10.0">${data.table3.row10[0]}</td>
//                     <td data-i18n="table.0.table3.row10.1">${data.table3.row10[1]}</td>
//                     <td data-i18n="table.0.table3.row10.2">${data.table3.row10[2]}</td>
                    
//                 </tr>
//                 <tr>
//                     <td data-i18n="table.0.table3.row11.0">${data.table3.row11[0]}</td>
//                     <td data-i18n="table.0.table3.row11.1">${data.table3.row11[1]}</td>
//                     <td data-i18n="table.0.table3.row11.2">${data.table3.row11[2]}</td>
                    
//                 </tr>
//                 <tr>
//                     <td data-i18n="table.0.table3.row12.0">${data.table3.row12[0]}</td>
//                     <td data-i18n="table.0.table3.row12.1">${data.table3.row12[1]}</td>
//                     <td data-i18n="table.0.table3.row12.2">${data.table3.row12[2]}</td>
                    

//                 </tr>
                
//                 <tr>
//                     <td data-i18n="table.0.table3.row13.0">${data.table3.row13[0]}</td>
//                     <td data-i18n="table.0.table3.row13.1">${data.table3.row13[1]}</td>
//                     <td data-i18n="table.0.table3.row13.2">${data.table3.row13[2]}</td>
//                     </td>
//                      <tr>
//                     <td data-i18n="table.0.table3.row14.0">${data.table3.row14[0]}</td>
//                     <td data-i18n="table.0.table3.row14.1">${data.table3.row14[1]}</td>
//                     <td data-i18n="table.0.table3.row14.2">${data.table3.row14[2]}</td>
//                     </td> <tr>
//                     <td data-i18n="table.0.table3.row15.0">${data.table3.row15[0]}</td>
//                     <td data-i18n="table.0.table3.row15.1">${data.table3.row15[1]}</td>
//                     <td data-i18n="table.0.table3.row15.2">${data.table3.row15[2]}</td>
//                     </td> <tr>
//                     <td data-i18n="table.0.table3.row16.0">${data.table3.row16[0]}</td>
//                     <td data-i18n="table.0.table3.row16.1">${data.table3.row16[1]}</td>
//                     <td data-i18n="table.0.table3.row16.2">${data.table3.row16[2]}</td>
//                     </td> <tr>
//                     <td data-i18n="table.0.table3.row17.0">${data.table3.row17[0]}</td>
//                     <td data-i18n="table.0.table3.row17.1">${data.table3.row17[1]}</td>
//                     <td data-i18n="table.0.table3.row17.2">${data.table3.row17[2]}</td>
//                     </td>
//                     `;

  table4.innerHTML = `
                    <th data-i18n="tableDateSpan.0" colspan="2">${data.headers[0]}</th>
            
                    <tr>
                    
                    <td data-i18n="table.0.table1.row1.0" >${data.table1.row1[0]}</td>
                    <td data-i18n="table.0.table1.row1.1"" >${data.table1.row1[1]}</td>
                </tr>
                <tr>
                
                    <td data-i18n="table.0.table1.row2.0">${data.table1.row2[0]}</td>
                    <td data-i18n="table.0.table1.row2.1">${data.table1.row2[1]}</td>
                </tr>
                <tr>
                
            
                    <td data-i18n="table.0.table1.row3.0">${data.table1.row3[0]}</td>
                    <td data-i18n="table.0.table1.row3.1">${data.table1.row3[1]}</td>
                </tr>
                <tr>
                
            
                    <td data-i18n="table.0.table1.row4.0">${data.table1.row4[0]}</td>
                    <td data-i18n="table.0.table1.row4.1">${data.table1.row4[1]}</td>
                </tr>
                <tr>
                
            
                    <td data-i18n="table.0.table1.row5.0">${data.table1.row5[0]}</td>
                    <td data-i18n="table.0.table1.row5.1">${data.table1.row5[1]}</td>
                </tr>
                <tr>
                
            
                    <td data-i18n="table.0.table1.row6.0">${data.table1.row6[0]}</td>
                    <td data-i18n="table.0.table1.row6.1">${data.table1.row6[1]}</td>
                </tr>
                <tr>
                
            
                    <td data-i18n="table.0.table1.row7.0">${data.table1.row7[0]}</td>
                    <td data-i18n="table.0.table1.row7.1">${data.table1.row7[1]}</td>
                </tr>
                `;

  //---Oktober/Maart---

  table5.innerHTML = `
                
                        <th data-i18n="tableDateSpan.1" colspan="2">${data.headers[1]}</th>
                        <tr>
                        <td data-i18n="table.0.table2.row1.0">${data.table2.row1[0]}</td>
                        <td data-i18n="table.0.table2.row1.1">${data.table2.row1[1]}</td>
                    </tr>
                    <tr>
                        <td data-i18n="table.0.table2.row2.0">${data.table2.row2[0]}</td>
                        <td data-i18n="table.0.table2.row2.1">${data.table2.row2[1]}</td>
                    </tr>
                    <tr>
                
                        <td data-i18n="table.0.table2.row3.0">${data.table2.row3[0]}</td>
                        <td data-i18n="table.0.table2.row3.1">${data.table2.row3[1]}</td>
                        <tr>
                        <td class="empty"></td>
                        <td class="empty"></td>
                      </tr>
                      <tr>
                        <td class="empty"></td>
                        <td class="empty"></td>
                      </tr>
                      <tr>
                        <td class="empty"></td>
                        <td class="empty"></td>
                      </tr>
                      <tr>
                        <td class="empty"></td>
                        <td class="empty"></td>
                      </tr>
            
            
                    `;

  //---Feestdagen---
  table6.innerHTML = `
                        
                <th data-i18n="tableDateSpan.3" colspan="3">Vakanties</th>
            
                    <tr>
                                <td data-i18n="table.0.table6.row1.0">${data.table6.row1[0]}</td>
                                <td data-i18n="table.0.table6.row1.1">${data.table6.row1[1]}</td>
                                <td data-i18n="table.0.table6.row1.2">${data.table6.row1[2]}</td>
                                
                            </tr>
                            <tr>
                       
                        
                                <td data-i18n="table.0.table6.row2.0">${data.table6.row2[0]}</td>
                                <td data-i18n="table.0.table6.row2.1">${data.table6.row2[1]}</td>
                                <td data-i18n="table.0.table6.row2.2">${data.table6.row2[2]}</td>
                                
            
            
                            </tr>
                            <tr>
                                <td data-i18n="table.0.table6.row3.0">${data.table6.row3[0]}</td>
                                <td data-i18n="table.0.table6.row3.1">${data.table6.row3[1]}</td>
                                <td data-i18n="table.0.table6.row3.2">${data.table6.row3[2]}</td>
                                
                            </tr>
                            <tr>
            
                                <td data-i18n="table.0.table6.row4.0">${data.table6.row4[0]}</td>
                                <td data-i18n="table.0.table6.row4.1">${data.table6.row4[1]}</td>
                                <td data-i18n="table.0.table6.row4.2">${data.table6.row4[2]}</td>
                                
                            </tr>
                            <tr>
                                <td data-i18n="table.0.table6.row5.0">${data.table6.row5[0]}</td>
                                <td data-i18n="table.0.table6.row5.1">${data.table6.row5[1]}</td>
                                <td data-i18n="table.0.table6.row5.2">${data.table6.row5[2]}</td>
                                
                            </tr>
                            <tr>
                                <td data-i18n="table.0.table6.row6.0">${data.table6.row6[0]}</td>
                                <td data-i18n="table.0.table6.row6.1">${data.table6.row6[1]}</td>
                                <td data-i18n="table.0.table6.row6.2">${data.table6.row6[2]}</td>
                                
                            </tr>
                            <tr>
                                <td data-i18n="table.0.table6.row7.0">${data.table6.row7[0]}</td>
                                <td data-i18n="table.0.table6.row7.1">${data.table6.row7[1]}</td>
                                <td data-i18n="table.0.table6.row7.2">${data.table6.row7[2]}</td>
                                
                            </tr>
                            <tr>
                                <td data-i18n="table.0.table6.row8.0">${data.table6.row8[0]}</td>
                                <td data-i18n="table.0.table6.row8.1">${data.table6.row8[1]}</td>
                                <td data-i18n="table.0.table6.row8.2">${data.table6.row8[2]}</td>
                                
                            </tr>
                            <tr>
                                <td data-i18n="table.0.table6.row9.0">${data.table6.row9[0]}</td>
                                <td data-i18n="table.0.table6.row9.1">${data.table6.row9[1]}</td>
                                <td data-i18n="table.0.table6.row9.2">${data.table6.row9[2]}</td>
                                
                            </tr>
                            <tr>
                                <td data-i18n="table.0.table6.row10.0">${data.table6.row10[0]}</td>
                                <td data-i18n="table.0.table6.row10.1">${data.table6.row10[1]}</td>
                                <td data-i18n="table.0.table6.row10.2">${data.table6.row10[2]}</td>
                                
                            </tr>`;
}

// fetchOpeningsuren();
