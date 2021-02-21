let namaAnda = document.getElementById("namaAnda");
let role = document.getElementById("role");
let availability = document.getElementById("availability");
let usia = document.getElementById("usia");
let lokasi = document.getElementById("lokasi");
let yearsexperience = document.getElementById("yearsexperience");
let email = document.getElementById("email");

let nama = document.getElementById("nama");
let newRole = document.getElementById("newRole");
let newAvailability = document.getElementById("newAvailability");
let newUsia = document.getElementById("newUsia");
let newLokasi = document.getElementById("newLokasi");
let newPengalaman = document.getElementById("newPengalaman");
let newEmail = document.getElementById("newEmail");

let CustName = document.getElementById("CustName");
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
    nama.innerHTML = CustName.value;
    newRole.innerHTML = RoleName.value;
    newAvailability.innerHTML = AvailabilityStatus.value;
    newUsia.innerHTML = UsiaStatus.value;
    newLokasi.innerHTML = LokasiStatus.value;
    newPengalaman.innerHTML = YearStatus.value;
    newEmail.innerHTML = EmailStatus.value;
}