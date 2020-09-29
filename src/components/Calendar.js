import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
import "./CalendarStyles.css";

const styles = {
  left: {
    float: "left",
    width: "220px"
  },
  main: {
    marginLeft: "220px"
  }
};

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Create a new event:", "lesson 1").then(function(modal) {
          dp.clearSelection();
          if (!modal.result) { return; }
          dp.events.add(new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          }));
        });
      },
      eventDeleteHandling: "Update",
      onEventClick: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Update the next lesson:", args.e.text()).then(function(modal) {
          if (!modal.result) { return; }
          args.e.data.text = modal.result;
          dp.events.update(args.e);
        });
      },
    };
  }

  componentDidMount() {

    
    this.setState({
      startDate: "2020-09-15",
      events: [
        {
          id: 1,
          text: "JAVASCRIPT  </br>MR.Anthony Pascal",
          start: "2020-09-14T12:00:00",
          end: "2020-09-14T15:00:00"
        },
        {
          id: 2,
          text: "HARDWARE DESIGN  </br>MR.Ali Suleiman",
          start: "2020-09-16T10:18:00",
          end: "2020-09-16T12:00:00",
          backColor:"#b11226"
        },
        {
          id: 3,
          text: "GRAPHIC DESIGN  </br>MRS.Mabelean Jane",
          start: "2020-09-13T10:18:00",
          end: "2020-09-13T13:00:00",
          backColor:"#A0522D6"
        },
        
        {
          id: 4,
          text: "PYTHON  </br>MR.Mwai Jeff" ,
          start: "2020-09-17T12:00:00",
          end: "2020-09-17T14:00:00",
          backColor: "#FF1493"
        },
        {
          id: 5,
          text: "JAVA/KOTLIN </br>MR.George Kiara",
          start: "2020-09-15T09:00:00",
          end: "2020-09-15T11:00:00",
          backColor: "#38761d"
        },
        {
          id: 4,
          text: "HTML/CSS  </br>MR.Juma Abdalla",
          start: "2020-09-19T14:00:00",
          end: "2020-09-19T16:00:00",
          backColor: "#FF7F50",
          
        },
        {
          id: 4,
          text: "ENTREPRENUERSHIP  </br>MRS.Nelly Kiprotich",
          start: "2020-09-18T10:00:00",
          end: "2020-09-18T13:00:00",
          backColor: "#8B008B"
        }
      ]
    });
  }

  render() {
    var {...config} = this.state;
    return (
      <div>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={1}
            skipMonths={2}
            onTimeRangeSelected={ args => {
              this.setState({
                startDate: args.day
              });
            }}
          />
        </div>
        <div style={styles.main}>
        <DayPilotCalendar
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
        </div>
      </div>
    );
  }
}

export default Calendar;
