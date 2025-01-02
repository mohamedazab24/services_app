document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container">
            <h1>نموذج طلب خدمات</h1>
            <form id="serviceForm">
                <div class="form-group">
                    <label for="serviceType">نوع الخدمة</label>
                    <select id="serviceType" name="serviceType">
                        <option value="شقق">تشطيب شقق</option>
                        <option value="فيلات">تشطيب فيلات</option>
                        <option value="مكاتب">تشطيب مكاتب</option>
                        <option value="محلات">تشطيب محلات</option>
                    </select>
                </div>
                <!-- أضف باقي الحقول هنا -->
                <button type="submit">إرسال</button>
            </form>
        </div>
    `;
});
emailjs.init("nlo_sRKwH3HdsasZz");

document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'alazab_services';
    const templateID = 'template_j8iwwhk';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('تم إرسال الطلب بنجاح!');
        }, (err) => {
            alert('فشل في إرسال الطلب. حاول مرة أخرى.');
        });
});
