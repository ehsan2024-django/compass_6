// تابع تبدیل اعداد به فارسی
function convertToPersianNumbers(input) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return input.toString().replace(/[0-9]/g, function(w) {
        return persianNumbers[+w];
    });
}

// تابع دریافت نام ماه‌های جلالی
function getJalaliMonth(month) {
    const months = [
        'فروردین', 'اردیبهشت', 'خرداد',
        'تیر', 'مرداد', 'شهریور',
        'مهر', 'آبان', 'آذر',
        'دی', 'بهمن', 'اسفند'
    ];
    return months[month - 1];
}

// تابع محاسبه تاریخ جلالی از تاریخ میلادی
function gregorianToJalali(gYear, gMonth, gDay) {
    const d = new Date(gYear, gMonth - 1, gDay);
    let g_days_in_month = [31, (d.getFullYear() % 4 === 0 && (d.getFullYear() % 100 !== 0 || d.getFullYear() % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let g_day_no = d.getDate();
    let g_month_no = d.getMonth();
    let g_year = d.getFullYear();
    
    let jd = 0;
    for (let i = 0; i < g_month_no; i++) {
        jd += g_days_in_month[i];
    }
    jd += g_day_no;
    
    let j_day_no = jd - 79;
    let j_np = Math.floor(j_day_no / 12053);
    j_day_no %= 12053;
    let j_year = 979 + 33 * j_np + 4 * Math.floor(j_day_no / 1461);
    j_day_no %= 1461;
    
    let j_month_no = Math.floor(j_day_no / 31);
    j_day_no %= 31;
    
    return [j_year, j_month_no + 1, j_day_no + 1];
}

// تابع بروزرسانی تاریخ و ساعت
function updateDateTime() {
    const now = new Date();
    
    // ساعت
    let time = now.toLocaleTimeString('fa-IR').slice(0, 8);
    document.getElementById('current-time').textContent = `ساعت: ${convertToPersianNumbers(time)}`;
    
    // تاریخ
    const gYear = now.getFullYear();
    const gMonth = now.getMonth() + 1;
    const gDay = now.getDate();
    
    const [jYear, jMonth, jDay] = gregorianToJalali(gYear, gMonth, gDay);
    const jMonthName = getJalaliMonth(jMonth);
    const weekDay = now.toLocaleDateString('fa-IR', { weekday: 'long' });
    
    const persianDate = `${weekDay} ${convertToPersianNumbers(jDay)} ${jMonthName} ${convertToPersianNumbers(jYear)}`;
    document.getElementById('current-date').textContent = `تاریخ: ${persianDate}`;
}

// اجرای تابع وقتی صفحه لود می‌شود
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
