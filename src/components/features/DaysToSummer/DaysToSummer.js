import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownDate() {
    const currentDate = new Date();
    let startSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 5));
    let endSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 6, 28));

    let daysToSummer = Math.round((startSummer.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

    if (currentDate < startSummer){

      if (daysToSummer === 1) {
        return `${daysToSummer} day to summer!`;
      } else return `${daysToSummer} days to summer!`;
    }

    else if (currentDate > endSummer) {
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

