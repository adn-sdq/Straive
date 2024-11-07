import json2html from "./json2html.js";

export default function json2html(data) {
  const columns = ["Name", "Age", "Gender"];
  
  // Start with the table and add data-user attribute
  let html = `<table data-user="adnansmemail@gmail.com">`;
  
  // Generate the table header
  html += "<thead><tr>";
  columns.forEach(column => {
    html += `<th>${column}</th>`;
  });
  html += "</tr></thead><tbody>";
  
  // Generate the table rows
  data.forEach(row => {
    html += "<tr>";
    columns.forEach(column => {
      html += `<td>${row[column] || ""}</td>`;
    });
    html += "</tr>";
  });
  
  html += "</tbody></table>";
  return html;
}
