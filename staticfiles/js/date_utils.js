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

// تابع بروزرسانی تاریخ و ساعت
function updateDateTime() {
    const now = moment();
    
    // ساعت
    const time = now.format('HH:mm:ss');
    document.getElementById('current-time').textContent = `ساعت: ${convertToPersianNumbers(time)}`;
    
    // تاریخ
    const date = now.format('jYYYY/jMM/jDD');
    const weekDay = now.locale('fa').format('dddd');
    
    const jMonth = getJalaliMonth(parseInt(now.format('jMM')));
    const jalaliDate = date.split('/');
    const persianDate = `${weekDay} ${convertToPersianNumbers(jalaliDate[2])} ${jMonth} ${convertToPersianNumbers(jalaliDate[0])}`;
    document.getElementById('current-date').textContent = `تاریخ: ${persianDate}`;
}

// اجرای تابع وقتی صفحه لود می‌شود
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});