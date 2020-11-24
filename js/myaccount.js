/*function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();*/

  
var currentYear = new Date().getFullYear();
var yearSelect = document.getElementById("dropdownYear");
for (var i = 0; i < 11; i++) {
  var isSelected = currentYear === currentYear - i;
  yearSelect.options[yearSelect.options.length] = new Option(
    currentYear - i,
    currentYear - i,
    isSelected,
    isSelected
  );
}