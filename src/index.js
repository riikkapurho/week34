import "./styles.css";

async function getData1() {
  const tbody = document.getElementById("tb");

  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const municipalityPromise = await fetch(url);
  const municipalityJSON = await municipalityPromise.json();

  const url2 =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const employmentPromise = await fetch(url2);
  const employmentJSON = await employmentPromise.json();

  var index = 0;
  for (var key in municipalityJSON.dataset.dimension.Alue.category.label) {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let tr = document.createElement("tr");

    if (
      municipalityJSON.dataset.dimension.Alue.category.label.hasOwnProperty(key)
    ) {
      td1.innerText =
        municipalityJSON.dataset.dimension.Alue.category.label[key];
    }

    td2.innerText = municipalityJSON.dataset.value[index];
    td3.innerText = employmentJSON.dataset.value[index];
    /*calculation*/

    var col2 = parseInt(municipalityJSON.dataset.value[index], 10);

    var col3 = parseInt(employmentJSON.dataset.value[index], 10);
    var result = Math.round((col3 / col2) * 100);
    /*console.log(result);*/
    //const text = toString(result);
    const text = `${result}%`;
    td4.innerText = text;
    /*console.log(text);*/

    index = index + 1;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    tbody.appendChild(tr);
  }
}

/*async function getData2() {
  console.log("in f2!");
  const url =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const employmentPromise = await fetch(url);
  const employmentJSON = await employmentPromise.json();
  console.log(employmentJSON.dataset.value);
}*/

getData1();
