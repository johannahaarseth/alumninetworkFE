import styles from "./CalendarView.module.css";
import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import NavBar from "../../components/NavBar/NavBar.component";
import { useCallback, useState } from "react";
import { createEventId, INITIAL_EVENTS } from "../../services/event-utils";

// https://fullcalendar.io/docs/react and https://fullcalendar.io/docs
// https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/react-typescript
const CalendarView = () => {
  // get currentEvents from db
  // eslint-disable-next-line
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleEvents = useCallback(
    (events: EventApi[]) => setCurrentEvents(events),
    []
  );

  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    let title = prompt("Please enter the event title")?.trim();
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }, []);

  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    if (
      window.confirm(
        `Do you want to delete the event titled "${clickInfo.event.title}" ?`
      )
    ) {
      clickInfo.event.remove();
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.calendarContainer}>
          <div className={styles.leftColumn}></div>
          <div className={styles.middleColumn}>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              selectable={true}
              editable={true}
              initialEvents={INITIAL_EVENTS}
              locales={allLocales}
              locale="nb"
              eventsSet={handleEvents}
              select={handleDateSelect}
              eventClick={handleEventClick}
            />
          </div>
          <div className={styles.rightColumn}></div>
        </div>
      </div>
    </>
  );
};

export default CalendarView;
