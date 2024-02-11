let votingData = [["Antonio", true, 5], ["Marija", false], ["Darko", true, 3]];
let enterName = prompt('Enter a name');

function findName(name, array){
  let lowerCaseName = name.toLowerCase();

  for(let i = 0; i < array.length; i++){
    let innerArray = array[i];
    let lowerCaseEntry = innerArray[0].toLowerCase();

    if (lowerCaseEntry === lowerCaseName){
      return innerArray;
    }
  }
  return [];
}

let result = findName(enterName, votingData);

if (result.length > 0){
  let table = document.createElement('table');
  let tableBody = document.createElement('tbody');
  let row = document.createElement('tr');

  for (let j = 0; j < result.length; j++){
    let cell = document.createElement('td');

    if (j === 1){
      if (result[j] === true){
        cell.textContent = 'Voted!';
      } else if (result[j] === false){
        cell.textContent = "Didn't vote";
      }
    } else {
      cell.textContent = result[j];
    }

    cell.style.border = '1px solid black';
    cell.style.padding = '5px 200px 5px 4px';
    row.appendChild(cell);
  }

  tableBody.appendChild(row);
  table.appendChild(tableBody);
  table.style.borderCollapse = 'collapse';
  table.style.border = '1px solid black';
  document.body.appendChild(table);
} else {
  document.body.innerHTML = '<p>The name was not found!</p>';
}

