export default function getReservationData() {
    document.querySelector("#reservation-form").addEventListener("submit", function (e) {
      e.preventDefault();
      // console.log("Form submitted");
  
      const subject = "Reservatie Warmste Week";
  let timeslot = document.getElementById("reservationTime");
  timeslot = timeslot.options[timeslot.selectedIndex].text;
  let numberOfPeople = document.getElementById("numberOfPeople").value;
  let message = `Ik wil graag een reservatie maken voor ${numberOfPeople} personen om ${timeslot}u.`;
      const mailtoLink =
      "mailto:roniek@brouwerijwilderen.be?subject=" +
      encodeURI(subject) +
      "&body=" +
      encodeURIComponent(message);
    window.location.href = mailtoLink;
    // console.log("Email sent");
  });
  }