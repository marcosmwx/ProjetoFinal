import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Checkin.module.css";
const companies = [
  {
    name: "Company A",
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
    name: "Company B",
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

    // find the first available day from today
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
      // You can add your logic here to send the check-in data to your backend or database
    } else {
      console.log("Por favor selecione a empresa, dia e horario");
    }
  };

  render() {
    const { selectedCompany, selectedDay, selectedTime } = this.state;
    const days = selectedCompany ? selectedCompany.schedule : {};
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit} className={styles.total}>
          <label>
            Empresa:
            <select
              value={selectedCompany ? selectedCompany.name : ""}
              onChange={this.handleCompanySelect}
            >
              <option value="">Selecione a Empresa</option>
              {companies.map((company) => (
                <option key={company.name} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Dia:
            <select
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
          <label>
            Horario:
            <select
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
          <button type="submit">Confirmar</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default CheckinSystem;
