let cal;

function renderCalendar() {
  if (cal) {
    cal.destroy();
  }
  var calendarEl = document.getElementById("calendar");

  cal = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    initialDate: "2022-08-07",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    eventBackgroundColor: "#00000000",
    eventBorderColor: "#00000000",
    events: [
      {
        img: "dummy-user.png",
        name: "Brandyn",
        amount: "1,152.36",
        start: "2022-08-01",
        end: "2022-08-04",
      },
      {
        img: "dummy-user-2.png",
        name: "Rudy",
        amount: "1,109.68",
        start: "2022-08-13",
      },
      {
        img: "dummy-user.png",
        name: "Shaan",
        amount: "1,109.68",
        start: "2022-08-14",
        end: "2022-08-16",
      },
      {
        img: "dummy-user.png",
        name: "Jowell",
        amount: "1,424.74",
        start: "2022-08-16",
        end: "2022-08-19",
      },
      {
        img: "dummy-user-2.png",
        name: "Lawrence",
        amount: "2,085.89",
        start: "2022-08-22",
        end: "2022-08-26",
        future: true,
      },
      {
        img: "dummy-user.png",
        name: "Albert",
        amount: "1,993.54",
        start: "2022-08-26",
        end: "2022-08-28",
        future: true,
      },
    ],
    eventContent: function (arg, createElement) {
      const { img, name, amount, future } = arg.event.extendedProps;

      var innerText;

      innerText = `
            <div class='event-box ${future ? "future" : ""}'>
            <img src='./assets/imgs/${img}' alt='user' />
              <div class='text'>${name} · $${amount} · Past guest</div>
            </div>
            `;

      return { html: innerText };
    },
  });

  cal.render();
}

document.addEventListener("DOMContentLoaded", renderCalendar);

$(".menu.left-menu-toggle").click(function () {
  setTimeout(function () {
    renderCalendar();
  }, 500);
});
