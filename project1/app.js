document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    let currentStep = 1;

    const renderForm = (step) => {
        switch(step) {
            case 1:
                return `
                    <div class="container">
                        <h1>نموذج طلب خدمات</h1>
                        <div id="progress-bar"><div style="width: 10%;"></div></div>
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
                            <button type="button" id="nextButton">التالي</button>
                        </form>
                    </div>
                `;
            case 2:
                return `
                    <div class="container">
                        <h1>نموذج طلب خدمات</h1>
                        <div id="progress-bar"><div style="width: 20%;"></div></div>
                        <form id="serviceForm">
                            <div class="form-group">
                                <label for="size">حجم المكان (بالمتر)</label>
                                <select id="size" name="size">
                                    <option value="50">50</option>
                                    <option value="80">80</option>
                                    <option value="100">100</option>
                                    <option value="120">120</option>
                                    <option value="150">150</option>
                                    <option value="180">180</option>
                                    <option value="200">200</option>
                                    <option value="300">300</option>
                                    <option value="500+">500+</option>
                                </select>
                            </div>
                            <button type="button" id="nextButton">التالي</button>
                        </form>
                    </div>
                `;
            // أضف باقي الخطوات هنا بطريقة مشابهة
            case 9:
                return `
                    <div class="container">
                        <h1>نموذج طلب خدمات</h1>
                        <div id="progress-bar"><div style="width: 90%;"></div></div>
                        <form id="serviceForm">
                            <div class="form-group">
                                <label for="email">البريد الإلكتروني</label>
                                <input type="email" id="email" name="email" placeholder="example@example.com">
                            </div>
                            <div class="form-group">
                                <label for="phone">رقم الهاتف</label>
                                <input type="tel" id="phone" name="phone" placeholder="05XXXXXXX">
                            </div>
                            <button type="button" id="nextButton">التالي</button>
                        </form>
                    </div>
                `;
            case 10:
                return `
                    <div class="container">
                        <h1>ملخص الطلب</h1>
                        <div id="progress-bar"><div style="width: 100%;"></div></div>
                        <div id="summary">
                            <h2>ملخص الطلب</h2>
                            <p id="summaryContent"></p>
                            <button type="button" id="backButton">العودة</button>
                            <button type="button" id="submitButton">إرسال</button>
                        </div>
                    </div>
                `;
            case 11:
                return `
                    <div class="container">
                        <h1>شكراً لطلبك</h1>
                        <p>سيتم التواصل معك قريباً</p>
                        <a href="/">العودة إلى الصفحة الرئيسية</a>
                    </div>
                `;
            default:
                return '';
        }
    };

    const updateForm = () => {
    app.innerHTML = renderForm(currentStep);
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');
    const submitButton = document.getElementById('submitButton');
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentStep++;
            updateForm();
        });
    }

    if (backButton) {
        backButton.addEventListener('click', () => {
            currentStep--;
            updateForm();
        });
    }

    if (submitButton) {
        submitButton.addEventListener('click', () => {
            // جمع البيانات هنا
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            // أضف باقي الحقول هنا

            // استخدام EmailJS لإرسال البيانات
            emailjs.init('nlo_sRKwH3HdsasZz');
            emailjs.send('alazab_services', 'template_j8iwwhk', {
                // هنا تضع البيانات التي تريد إرسالها
                email: email,
                phone: phone,
                // أضف الحقول الأخرى هنا
            }).then(() => {
                currentStep = 11; // الانتقال إلى صفحة الشكر بعد الإرسال الناجح
                updateForm();
            }).catch((error) => {
                console.error('خطأ في إرسال البريد الإلكتروني:', error);
            });
        });
    }
};

updateForm();
