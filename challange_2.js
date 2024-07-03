const nama = prompt("Masukan Nama");
const nim = prompt("Masukan NIM");
const namaCell = document.getElementById("nama");
const nimCell = document.getElementById("nim");
namaCell.innerHTML = nama
nimCell.innerHTML = nim


function insertData() {
  const much = prompt("Berapa banyak yang ingin kamu masukan?");
  for (let index = 0; index < much; index++) {
    let no = index + 1;
    var nameMatkul = prompt("Masukan nama Mata Kuliah");
    let finalValue = prompt("Masukan Nilai Akhir");
    checkGrade({ finalValue, nameMatkul, no });
  }
}

function checkGrade(props) {
  const newRow = document.createElement("tr");
  const noCell = document.createElement("td");
  const namaCell = document.createElement("td");
  const nilaiCell = document.createElement("td");
  const gradeCell = document.createElement("td");

  noCell.textContent = props.no;
  namaCell.textContent = props.nameMatkul;
  nilaiCell.textContent = props.finalValue;
  if (props.finalValue >= 85) {
    gradeCell.textContent = "A";
  } else if (props.finalValue >= 80 && props.finalValue < 85) {
    gradeCell.textContent = "A-";
  } else if (props.finalValue >= 75 && props.finalValue < 80) {
    gradeCell.textContent = "B+";
  } else if (props.finalValue >= 70 && props.finalValue < 75) {
    gradeCell.textContent = "B";
  } else if (props.finalValue >= 65 && props.finalValue < 70) {
    gradeCell.textContent = "B-";
  } else if (props.finalValue >= 60 && props.finalValue < 65) {
    gradeCell.textContent = "C+";
  } else if (props.finalValue >= 55 && props.finalValue < 60) {
    gradeCell.textContent = "C";
  } else if (props.finalValue >= 50 && props.finalValue < 55) {
    gradeCell.textContent = "D";
  }
  newRow.appendChild(noCell);
  newRow.appendChild(namaCell);
  newRow.appendChild(nilaiCell);
  newRow.appendChild(gradeCell);
  document.getElementById("tableBody").appendChild(newRow);
}
