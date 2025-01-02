document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container">
            <h1>نموذج طلب خدمات</h1>
            <form id="serviceForm">
                <div class="step" id="step1">
                    <div class="form-group">
                        <label for="serviceType">نوع الخدمة</label>
                        <select id="serviceType" name="serviceType">
                            <option value="شقق">تشطيب شقق</option>
                            <option value="فيلات">تشطيب فيلات</option>
                            <option value="مكاتب">تشطيب مكاتب</option>
                            <option value="محلات">تشطيب محلات</option>
                        </select>
                    </div>
                    <button type="button" class="next">التالي</button>
                </div>
                <div class="step" id="step2" style="display: none;">
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
                    <button type="button" class="prev">السابق</button>
                    <button type="button" class="next">التالي</button>
                </div>
                <!-- أضف باقي الخطوات هنا -->
                <div class="step" id="step10" style="display: none;">
                    <div class="form-group">
                        <label for="email">البريد الإلكتروني</label>
                        <input type="email" id="email" name="email" placeholder="example@example.com">
                    </div>
                    <div class="form-group">
                        <label for="phone">رقم الهاتف</label>
                        <input type="tel" id="phone" name="phone" placeholder="05XXXXXXX">
                    </div>
                    <button type="button" class="prev">السابق</button>
                    <button type="submit">إرسال</button>
                </div>
            </form>
        </div>
    `;

    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((stepElement, index) => {
            stepElement.style.display = index === step ? 'block' : 'none';
        });
    }

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    showStep(currentStep);
});
