var expanded = false;

function showCheckBoxes() {
  var checkBoxes = document.getElementById("checkBoxes");
  if (!expanded) {
    checkBoxes.style.display = "flex";
    expanded = true;
  } else {
    checkBoxes.style.display = "none";
    expanded = false;
  }
}

var expanded = false;

function showCheckBoxesYear() {
  var checkBoxesYear = document.getElementById("checkBoxesYear");
  if (!expanded) {
    checkBoxesYear.style.display = "flex";
    expanded = true;
  } else {
    checkBoxesYear.style.display = "none";
    expanded = false;
  }
}