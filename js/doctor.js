
const doctors = [
  {
    name: "Dr. Juan Pérez",
    specialty: "Cardiología",
    experience: 15,
    description:
      "Con más de 15 años de experiencia en el campo de la cardiología.",
    photo: "img/doc-1.webp",
  },
  {
    name: "Dra. María Lorca",
    specialty: "Pediatría",
    experience: 12,
    description: "Experta en el cuidado y tratamiento de niños y adolescentes.",
    photo: "img/doc-2.webp",
  },
  {
    name: "Dr. Carlos López",
    specialty: "Neurología",
    experience: 10,
    description:
      "Años de experiencia en el diagnóstico y tratamiento de trastornos neurológicos.",
    photo: "img/doc-3.webp",
  },
  {
    name: "Dra. Sofía Fernández",
    specialty: "Rehabilitación Física",
    experience: 8,
    description:
      "Especialista en rehabilitación física con un enfoque en lesiones musculares.",
    photo: "img/doc-4.webp",
  },
  {
    name: "Dr. Alejandro García",
    specialty: "Odontología",
    experience: 12,
    description: "Experto en tratamientos estéticos y restauraciones dentales.",
    photo: "img/doc-5.webp",
  },
];


const clonedDoctors = [...doctors];
clonedDoctors[0].name = "Dr. Clonado Pérez";
console.log("Doctores Originales:", doctors[0].name); // Dr. Juan Pérez
console.log("Doctores Clonados:", clonedDoctors[0].name); // Dr. Clonado Pérez


const additionalData = [
  { services: ["Cardiología", "Electrocardiograma"] },
  { services: ["Pediatría", "Vacunación"] },
  { services: ["Neurología", "Electroencefalograma"] },
  { services: ["Rehabilitación Física", "Terapias Físicas"] },
  { services: ["Odontología", "Limpieza Dental"] },
];

const mergedDoctors = doctors.map((doctor, index) => ({
  ...doctor,
  ...additionalData[index % additionalData.length],
}));
console.log("Doctores Fusionados con Servicios:", mergedDoctors);
console.log(
  "Doctores en formato String:",
  JSON.stringify(mergedDoctors, null, 2)
);


function sortDoctorsByExperience() {
  doctors.sort((a, b) => b.experience - a.experience);
  console.log("Doctores ordenados por experiencia:", doctors);
}

function sortDoctorsByName() {
  doctors.sort((a, b) => a.name.localeCompare(b.name));
  console.log("Doctores ordenados alfabéticamente por nombre:", doctors);
}


function binarySearchDoctorByName(name) {
  sortDoctorsByName(); 
  let left = 0;
  let right = doctors.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currentName = doctors[mid].name;

    if (currentName === name) {
      console.log("Doctor encontrado:", doctors[mid]);
      return doctors[mid];
    }

    if (currentName < name) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log("Doctor no encontrado.");
  return null;
}


function addDoctor(newDoctor) {
  doctors.push(newDoctor);
  console.log("Doctor agregado:", newDoctor);
}

function removeDoctorByName(name) {
  const index = doctors.findIndex((doctor) => doctor.name === name);
  if (index !== -1) {
    const removed = doctors.splice(index, 1);
    console.log("Doctor eliminado:", removed[0]);
  } else {
    console.log("Doctor no encontrado.");
  }
}

function findDoctorByName(name) {
  const doctor = doctors.find((doctor) => doctor.name === name);
  console.log("Doctor encontrado:", doctor || "No encontrado");
  return doctor;
}


function renderDoctors() {
  const container = document.getElementById("doctor-info");
  container.innerHTML = doctors
    .map(
      (doctor) => `
        <div class="doctor-card">
          <img src="${doctor.photo}" alt="${doctor.name}" class="doctor-card__photo" />
          <h3 class="doctor-card__name">${doctor.name}</h3>
          <p class="doctor-card__specialty"><strong>${doctor.specialty}</strong></p>
          <p class="doctor-card__description">${doctor.description}</p>
          <button class="doctor-card__button" onclick="openModal('${doctor.name}')">
            Solicitar Hora
          </button>
        </div>
      `
    )
    .join("");
}


const appointmentStack = [];


function addAppointment(patientName, doctorName) {
  if (!patientName || !doctorName) {
    console.error("Paciente o Doctor no especificado.");
    return;
  }
  appointmentStack.push({ patientName, doctorName });
  console.log("Cita agregada:", { patientName, doctorName });
}


function processAppointment() {
  if (appointmentStack.length > 0) {
    const appointment = appointmentStack.pop();
    console.log("Cita procesada:", appointment);
  } else {
    console.log("No hay citas pendientes.");
  }
}


function openModal(doctorName) {
  const modal = document.getElementById("modalReservarCita");
  const doctorField = document.getElementById("doctorName");
  if (modal && doctorField) {
    doctorField.value = doctorName; 
    modal.style.display = "flex"; 
  } else {
    console.error("No se encontró el modal o el campo doctorName en el DOM.");
  }
}


function closeModal() {
  const modal = document.getElementById("modalReservarCita");
  if (modal) {
    modal.style.display = "none"; 
  } else {
    console.error("No se encontró el modal en el DOM.");
  }
}


const reservationForm = document.getElementById("reservationForm");
if (reservationForm) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const confirmacionModal = document.getElementById("modalConfirmacion");
    if (confirmacionModal) {
      confirmacionModal.style.display = "flex"; 

      
      setTimeout(() => {
        confirmacionModal.style.display = "none";
      }, 3000);
    } else {
      console.error("No se encontró el modal de confirmación en el DOM.");
    }
  });
} else {
  console.error("No se encontró el formulario de reserva en el DOM.");
}


const closeConfirmacionButton = document.getElementById("closeConfirmacion");
if (closeConfirmacionButton) {
  closeConfirmacionButton.addEventListener("click", () => {
    const confirmacionModal = document.getElementById("modalConfirmacion");
    if (confirmacionModal) {
      confirmacionModal.style.display = "none"; 
    } else {
      console.error("No se encontró el modal de confirmación en el DOM.");
    }
  });
} else {
  console.error("No se encontró el botón de cierre del modal de confirmación en el DOM.");
}



document.addEventListener("DOMContentLoaded", () => {
  renderDoctors();
  sortDoctorsByExperience();
  binarySearchDoctorByName("Dra. María Lorca");
});

window.addAppointment = addAppointment;
window.processAppointment = processAppointment;
