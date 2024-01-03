/* Class for creating a string of text from a string of time 
* Input = '01:00'
* Output = 'one am'
*/
class TimeToWord {
    
    constructor(time) {
        this.hours = time.slice(0, 2);
        this.minutes = time.slice(3);
        this.timePeriod = this.hours <= '11' ? 'am' : 'pm';
    }

    //finds the word for the hour of the day
    findHoursWord() {
        const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six',
            'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

        const hourToWord = hours[this.hours % 12];

        return hourToWord;
    }


    /*
    * Finds words for minutes - cases below
    * We have two zeros meaning its the hour with no minutes
    * we have a first place of zero and a number in the second place resulting in a single digit minute
    * we have a first place of a number with another value after that this is for the teens. 
    * we have a round double digit number like 10, 20, 30
    * we have a double digit (non rounded) number like 22
    */
    findMinutesWords() {
        const minutes = ['oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
            'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
            'thirty', 'forty', 'fifty']
        let minuteToWord;

        if (this.minutes === '00') {
            minuteToWord = '';
        } else if (this.minutes < '10') {
            minuteToWord = 'oh ' + minutes[this.minutes % 12];
        } else if (this.minutes < '12') {
            minuteToWord = minutes[this.minutes % 12];
        } else if (this.minutes < '20') {
            minuteToWord = minutes[this.minutes % 12 + 12];
        } else if (this.minutes[0] !== '0' && this.minutes[1] === '0') {
            minuteToWord = minutes[this.minutes[0] % 12 + 18]
        } else {
            minuteToWord = minutes[this.minutes[0] % 12 + 18] + ' ' + minutes[this.minutes[1] % 12];
        }
        return minuteToWord;
    }

    // returns entire string of integer time to words time
    timeToText(hours, minutes) {
        if (minutes === '') {
            return `${hours} ${this.timePeriod}`;
        }
        return `${hours} ${minutes} ${this.timePeriod}`;
    }
}


module.exports = TimeToWord;






// const time = '12:00'

// function strip(time) {
//     const hours = time.slice(0, 2);
//     const minutes = time.slice(3);
//     const timePeriod = hours <= '11' ? 'am' : 'pm';
//     return { hours, minutes, timePeriod };
// }

// const strippedTime = strip(time);


// function findHoursWord(strippedTime) {
//     const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six',
//         'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

//     const hourStringInt = strippedTime.hours;
//     const hourToWord = hours[hourStringInt % 12];

//     return hourToWord;
// }


/*
* We have cases here
* We have two zeros meaning its the hour with no minutes
* we have a first place of zero and a number in the second place resulting in a single digit minute
* we have a first place of a number with another value after that this is for the teens.
* we have a round double digit number like 10, 20, 30
* we have a double digit (non rounded) number like 22
*/
// function findMinutesWords(strippedTime) {
//     const minutes = ['oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
//         'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//         'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
//         'thirty', 'forty', 'fifty']
//     const minuteStringInt = strippedTime.minutes;
//     let minuteToWord;

//     if (minuteStringInt === '00') {
//         minuteToWord = '';
//     } else if (minuteStringInt < '10') {
//         minuteToWord = 'oh ' + minutes[minuteStringInt % 12];
//     } else if (minuteStringInt < '12') {
//         minuteToWord = minutes[minuteStringInt % 12];
//     } else if (minuteStringInt < '20') {
//         minuteToWord = minutes[minuteStringInt % 12 + 12];
//     } else if (minuteStringInt[0] !== '0' && minuteStringInt[1] === '0') {
//         minuteToWord = minutes[minuteStringInt[0] % 12 + 18]
//     } else {
//         minuteToWord = minutes[minuteStringInt[0] % 12 + 18] + ' ' + minutes[minuteStringInt[1] % 12];
//     }
//     return minuteToWord;
// }


// findHoursWord(strippedTime);