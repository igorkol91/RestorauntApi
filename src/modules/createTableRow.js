const createTableRow = (type, val1, val2, val3) => {
  const tr = document.createElement('tr');
  let td1;
  let td2;
  let td3;
  if (type === 'headerRow') {
    td1 = document.createElement('th');
    td1.className = 'th1';
    td2 = document.createElement('th');
    td2.className = 'th2';
    td3 = document.createElement('th');
    td3.className = 'th3';
    tr.className = 'table-header';
  } else {
    td1 = document.createElement('td');
    td1.className = 'td1';
    td2 = document.createElement('td');
    td2.className = 'td2';
    td3 = document.createElement('td');
    td3.className = 'td3';
    tr.className = 'table-row';
  }
  td1.textContent = val1;
  td2.textContent = val2;
  td3.textContent = val3;
  tr.append(td1, td2, td3);
  return tr;
};

export default createTableRow;