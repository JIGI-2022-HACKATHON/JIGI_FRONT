const getWeekNumber = (dateFrom = new Date()): number => {
    const currentDate = dateFrom.getDate();

    // 이번 달 1일로 지정
    const startOfMonth = new Date(dateFrom.setDate(1));

    // 이번 달 1일이 무슨 요일인지 확인
    const weekDay = startOfMonth.getDay(); // 0: Sun ~ 6: Sat

    // ((요일 - 1) + 해당 날짜) / 7일로 나누기 = N 주차
    const number = ((weekDay - 1) + currentDate) / 7 + 1;
    return Math.floor(number);
}

export default getWeekNumber