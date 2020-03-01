function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) {
    let monthCount = 0;
    let saveMoney = 0;
    let lossIncreases = 0;
    percentLossByMonth = ((100 - percentLossByMonth) / 100);

    if (startPriceOld >= startPriceNew) {
        return [0, startPriceOld - startPriceNew];
    }

    while (true) {
        startPriceOld *= percentLossByMonth - lossIncreases;
        startPriceNew *= percentLossByMonth - lossIncreases;
        if (monthCount % 2 == 0) {
            lossIncreases += 0.005;
        }
        saveMoney += savingPerMonth;
        monthCount++;
        if (startPriceNew < saveMoney + startPriceOld) {
            saveMoney = saveMoney + startPriceOld - startPriceNew;
            break;
        }
    }

    return [monthCount, Math.round(saveMoney)];
}


console.log(nbMonths(2000, 8000, 1000, 1.5));