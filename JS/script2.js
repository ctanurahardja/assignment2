let namaAnda = document.getElementById("namaAnda");
let role = document.getElementById("role");
let availability = document.getElementById("availability");
let usia = document.getElementById("usia");
let lokasi = document.getElementById("lokasi");
let yearsexperience = document.getElementById("yearsexperience");
let email = document.getElementById("email");

let custName = document.getElementById("custName");
let RoleName = document.getElementById("RoleName");
let AvailabilityStatus = document.getElementById("AvailabilityStatus");
let UsiaStatus = document.getElementById("UsiaStatus");
let LokasiStatus = document.getElementById("LokasiStatus");
let YearStatus = document.getElementById("YearStatus");
let EmailStatus = document.getElementById("EmailStatus");


let showForm = () => {
    namaAnda.style.display = "block";
    role.style.display= "block";
    availability.style.display = "block";
    usia.style.display = "block";
    lokasi.style.display = "block";
    yearsexperience.style.display = "block";
    email.style.display = "block";
}

let hideForm = () => {
    namaAnda.style.display = "none";
    role.style.display= "none";
    availability.style.display = "none";
    usia.style.display = "none";
    lokasi.style.display = "none";
    yearsexperience.style.display = "none";
    email.style.display = "none";
}

function saveMessage() {
    nama.innerHTML = custName.inputvalue;
    newRole.innerHTML = RoleName.inputvalue;
    newAvailability.innerHTML = AvailabilityStatus.inputvalue;
    newUsia.innerHTML = UsiaStatus.inputvalue;
    newLokasi.innerHTML = LokasiStatus.inputvalue;
    newPengalaman.innerHTML = YearStatus.inputvalue;
    newEmail.innerHTML = EmailStatus.inputvalue;
}