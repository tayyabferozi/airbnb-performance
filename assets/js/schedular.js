document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    initialDate: "2022-07-07",
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
        name: "Gennady",
        amount: "620.80",
        start: "2022-07-03",
        end: "2022-07-05",
      },
      {
        img: "dummy-user-2.png",
        name: "Thomas",
        amount: "2,539.07",
        start: "2022-07-06",
        end: "2022-07-10",
      },
      {
        img: "dummy-user.png",
        name: "Daniel",
        amount: "123.00",
        start: "2022-07-11",
      },
      {
        img: "dummy-user-2.png",
        name: "John",
        amount: "123.00",
        start: "2022-07-12",
      },
      {
        img: "dummy-user.png",
        name: "Kingsley",
        amount: "1,050.70",
        start: "2022-07-13",
        end: "2022-07-16",
      },
      {
        img: "dummy-user-2.png",
        name: "Don",
        amount: "1,393.70",
        start: "2022-07-17",
        end: "2022-07-20",
      },
      {
        img: "dummy-user.png",
        name: "Olivier",
        amount: "3,010.10",
        start: "2022-07-24",
        end: "2022-07-31",
      },
    ],
    eventContent: function (arg, createElement) {
      const { img, name, amount } = arg.event.extendedProps;

      var innerText;

      innerText = `
            <div class='event-box'>
            <img src='./assets/imgs/${img}' alt='user' />
              <div class='text'>${name} · $${amount} · Past guest</div>
            </div>
            `;

      return { html: innerText };
    },
  });

  calendar.render();
});
