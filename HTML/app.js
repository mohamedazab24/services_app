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
