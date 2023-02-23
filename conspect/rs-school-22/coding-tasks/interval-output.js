// https://javascript.info/settimeout-setinterval

// periodOutput(period) method should output in the console once per every period
// how much time has passed since the first function call.
// Example: periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms), ...

const periodOutput = (period, stop) => {
    // const startDate = new Date();
    // const unixTimestamp = startDate.getTime();
    // const delta = unixTimestamp - startDate.getTime();
    let count = 0;
    let res = setInterval(() => console.log(`${count += period}(after ${period} ms)`), period);

    setTimeout(() => { clearInterval(res); alert('stop'); }, stop);
}
periodOutput(100, 3000);


//===============================================
// extendedPeriodOutput(period) method should output in the console once per period how mach
// time has passed since the first function call and then increase the period.
// Example: // extendedPeriodOutput(100) -> 100(after 100 ms), 200(after 200 ms), 300(after 300 ms)

const extendedPeriodOutput = (period, stop) => {
    let dinamicPeriod = period;
    let res = setInterval(() => {
        console.log(`${dinamicPeriod}(after ${dinamicPeriod} ms)`);
        dinamicPeriod += period;
    }, dinamicPeriod);

    setTimeout(() => { clearInterval(res); alert('stop'); }, stop);
}
extendedPeriodOutput(100, 2000);



