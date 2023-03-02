import React from "react";
import styles from './Checkin.module.css'
const companies = [
  {
    name: "Escola Estadual",
    schedule: {
      "2023-02-23": ["10:00", "11:00", "14:00"],
      "2023-02-24": ["09:00", "13:00", "16:00"],
      "2023-02-25": ["11:00", "14:00", "15:00"],
      "2023-02-26": ["10:00", "11:00", "12:00"],
      "2023-02-27": ["13:00", "15:00", "16:00"],
      "2023-02-28": ["09:00", "10:00", "14:00"],
      "2023-03-01": ["11:00", "12:00", "16:00"],
    },
  },
  {
    name: "Escola Municipal",
    schedule: {
      "2023-02-23": ["09:00", "11:00", "14:00"],
      "2023-02-24": ["10:00", "13:00", "16:00"],
      "2023-02-25": ["09:00", "11:00", "14:00"],
      "2023-02-26": ["13:00", "14:00", "15:00"],
      "2023-02-27": ["09:00", "11:00", "14:00"],
      "2023-02-28": ["10:00", "11:00", "16:00"],
      "2023-03-01": ["09:00", "11:00", "14:00"],
    },
  },
];

class CheckinSystem extends React.Component {
  state = {
    selectedCompany: null,
    selectedDay: null,
    selectedTime: null,
  };

  handleCompanySelect = (event) => {
    const selectedCompany = companies.find(
      (company) => company.name === event.target.value
    );


    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Object.keys(selectedCompany.schedule);
    const availableDays = days.filter((day) => new Date(day) >= today);
    const firstAvailableDay =
      availableDays.length > 0 ? availableDays[0] : null;
    this.setState({
      selectedCompany,
      selectedDay: firstAvailableDay,
      selectedTime: null,
    });
  };

  handleDaySelect = (event) => {
    this.setState({
      selectedDay: event.target.value,
      selectedTime: null,
    });
  };

  handleTimeSelect = (event) => {
    this.setState({
      selectedTime: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { selectedCompany, selectedDay, selectedTime } = this.state;
    if (selectedCompany && selectedDay && selectedTime) {
      alert(
        `Sucesso ao fazer o check-in ${selectedCompany.name} no dia ${new Date(
          selectedDay
        ).toLocaleDateString()} as ${selectedTime}`
      );
      console.log(
        `Sucesso ao fazer o check-in ${selectedCompany.name} no dia ${new Date(
          selectedDay
        ).toLocaleDateString()} as ${selectedTime}`
      );
     
    } else {
      console.log("Por favor selecione a empresa, dia e horario");
    }
  };

  render() {
    const { selectedCompany, selectedDay, selectedTime } = this.state;
    const days = selectedCompany ? selectedCompany.schedule : {};
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.total}>
          <label  className={styles.label_check}>
          <p className={styles.label_p}> Unidade</p>
            <select className={styles.selectCheck}
              value={selectedCompany ? selectedCompany.name : ""}
              onChange={this.handleCompanySelect}
            >
              <option value="">Selecione a Unidade</option>
              {companies.map((company) => (
                <option key={company.name} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label className={styles.label_check}>
          <p className={styles.label_p}> Data</p>
            <select className={styles.selectCheck}
              value={selectedDay ? selectedDay : ""}
              onChange={this.handleDaySelect}
              disabled={!selectedCompany}
            >
              <option value="">Selecione o Dia</option>
              {Object.keys(days).map((day) => (
                <option key={day} value={day}>
                  {new Date(day).toLocaleDateString()}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label className={styles.label_check}>
           <p className={styles.label_p}> Horário</p>
            <select className={styles.selectCheck}
              value={selectedTime ? selectedTime : ""}
              onChange={this.handleTimeSelect}
              disabled={!selectedDay}
            >
              <option value="">Selecione o Horario</option>
              {selectedDay &&
                days[selectedDay].map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
            </select>
          </label>
          <br />
          <button type="submit" className={styles.btnCheck}>Confirmar</button>
        </form>
        <div>
        <ul className={styles.background}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      </div>
    );
  }
}

export default CheckinSystem;
