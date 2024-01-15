const weekdays = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

function Agenda(props) {
  weekdays.forEach((weekday) => {
    console.log(weekday);
  });

  const capitalizedWeekdays = weekdays.map((weekday) => {
    return weekday.toUpperCase();
  });

  return (
    <div>
      <ul>
        {capitalizedWeekdays.map((weekday) => {
          return (
            <li key={weekday} className={weekday == props.day ? "fw-bold" : ""}>
              {weekday}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Agenda;
