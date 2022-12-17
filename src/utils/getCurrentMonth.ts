const getTimeRange = () => {
    const thisMonthDateInstance = new Date();
    const n = new Date().setMonth(thisMonthDateInstance.getMonth() - 1);
    const lastMonthDateInstance = new Date(n);

    const lastMonthDate = lastMonthDateInstance.getDate();
    const lastMonthNumber = lastMonthDateInstance.getMonth() + 1;
    const lastMonthYear = lastMonthDateInstance.getFullYear();

    const thisMonthDate = thisMonthDateInstance.getDate();
    const thisMonthNumber = thisMonthDateInstance.getMonth() + 1;
    const thisMonthYear = thisMonthDateInstance.getFullYear();

    const lastMonth = `${lastMonthYear}-${lastMonthNumber}-${lastMonthDate}`;
    const thisMonth = `${thisMonthYear}-${thisMonthNumber}-${thisMonthDate}`;

    return { thisMonth, lastMonth }; // returns format 👉🏻 YYYY-MM-DD
};

export default getTimeRange;
