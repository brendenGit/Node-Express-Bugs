const TimeToWord = require('./timeWord');

describe('#timeword', () => {
  test('Returns twelve am', () => {
    const time = new TimeToWord('00:00');
    const hours = time.findHoursWord();
    const minutes = time.findMinutesWords();
    const text = time.timeToText(hours, minutes);
    expect(text).toEqual('twelve am');
  });

  test('Returns twelve pm', () => {
    const time = new TimeToWord('12:00');
    const hours = time.findHoursWord();
    const minutes = time.findMinutesWords();
    const text = time.timeToText(hours, minutes);
    expect(text).toEqual('twelve pm');
  });

  test('Returns nine fifty nine am', () => {
    const time = new TimeToWord('09:59');
    const hours = time.findHoursWord();
    const minutes = time.findMinutesWords();
    const text = time.timeToText(hours, minutes);
    expect(text).toEqual('nine fifty nine am');
  });

  test('Returns proper time period', () => {
    const time = new TimeToWord('00:00');
    expect(time.timePeriod).toEqual('am');
  })

  test('Returns proper hour word', () => {
    const time = new TimeToWord('01:00');
    const hours = time.findHoursWord();
    expect(hours).toEqual('one');
  })

  test('Returns proper minute words', () => {
    const time = new TimeToWord('01:22');
    const minutes = time.findMinutesWords();
    expect(minutes).toEqual('twenty two');
  })
});