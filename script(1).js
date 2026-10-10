// Intel Sustainability Summit — Event Check-In
// Beginner-friendly JavaScript: no arrow functions, template literals for strings.

// Keep track of the total number of attendees and the max goal.
let attendeeCount = 0;
const maxAttendees = 50;

// Keep track of how many people have checked in for each team.
let waterCount = 0;
let zeroCount = 0;
let powerCount = 0;

// Grab the elements we will need to read from and update.
const checkInForm = document.getElementById("checkInForm");
const attendeeNameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

const attendeeCountSpan = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

const waterCountSpan = document.getElementById("waterCount");
const zeroCountSpan = document.getElementById("zeroCount");
const powerCountSpan = document.getElementById("powerCount");

// Listen for the form being submitted (the Check In button).
checkInForm.addEventListener("submit", function (event) {
  // Stop the page from reloading, which is the default form behavior.
  event.preventDefault();

  // Get the values the attendee typed/selected.
  const attendeeName = attendeeNameInput.value;
  const selectedTeam = teamSelect.value;

  // Increase the total attendee count by 1.
  attendeeCount = attendeeCount + 1;

  // Figure out which team was picked, update that team's count,
  // and build a full team name for the greeting message.
  let teamLabel = "";

  if (selectedTeam === "water") {
    waterCount = waterCount + 1;
    waterCountSpan.textContent = waterCount;
    teamLabel = "Team Water Wise";
  } else if (selectedTeam === "zero") {
    zeroCount = zeroCount + 1;
    zeroCountSpan.textContent = zeroCount;
    teamLabel = "Team Net Zero";
  } else if (selectedTeam === "power") {
    powerCount = powerCount + 1;
    powerCountSpan.textContent = powerCount;
    teamLabel = "Team Renewables";
  }

  // Show the updated total count on the page.
  attendeeCountSpan.textContent = attendeeCount;

  // Calculate what percent of the goal has been reached, and
  // update the width of the progress bar to match.
  const percentComplete = (attendeeCount / maxAttendees) * 100;
  progressBar.style.width = `${percentComplete}%`;

  // Build and show a personalized welcome message.
  greeting.textContent = `🎉 Welcome, ${attendeeName} from ${teamLabel}!`;
  greeting.classList.add("success-message");
  greeting.style.display = "block";

  // Clear the form so it's ready for the next attendee.
  checkInForm.reset();
});
