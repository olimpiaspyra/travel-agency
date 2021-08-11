import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownDate() {
    let currentDate = new Date();
    let startSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    let endSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 23));
    let daysToSummer = Math.round((startSummer.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    let daysOfSummer = Math.round((endSummer.getTime() - startSummer.getTime()) / (1000 * 60 * 60 * 24));
    console.log (daysOfSummer);
    console.log (daysToSummer);

    if (daysToSummer > 0) {

      if (daysToSummer === 1) {
        return `${daysToSummer} day to summer!`;
      } else return `${daysToSummer} days to summer!`;
    }

    else if (daysOfSummer >= 0 && daysToSummer < daysOfSummer) {
      return `Summertime!`;
    }
    else if (currentDate > endSummer) {
      startSummer.setFullYear(startSummer.getFullYear() + 1);
      daysToSummer = Math.round((currentDate.getTime() + startSummer.getTime()) / (1000 * 60 * 60 * 24));

      return `${daysToSummer} days to summer!`;
    }
  }

  render() {
    const countDownDate = this.getCountdownDate();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{countDownDate}</h3>
      </div>
    );
  }
}

export default DaysToSummer;

