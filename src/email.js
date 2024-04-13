export default function getEmailData() {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted");

    const subject = document.getElementById("interest").value;
    const message = document.getElementById("message").value;
    const mailtoLink =
      "mailto:olivier@brouwerijwilderen.be?subject=" +
      encodeURI(subject) +
      "&body=" +
      encodeURIComponent(message);
    window.location.href = mailtoLink;
    console.log("Email sent");
  });
}
