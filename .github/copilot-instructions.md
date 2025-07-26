<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# موقع الأفلام - تعليمات GitHub Copilot

## نظرة عامة على المشروع
هذا المشروع عبارة عن موقع أفلام مجاني احترافي مبني بـ HTML, CSS, و JavaScript يستخدم TMDb API لعرض الأفلام وتوفير روابط لمصادر المشاهدة المجانية والقانونية.

## الهيكل التقني
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: The Movie Database (TMDb) API
- **التصميم**: Responsive Design, Netflix-like UI
- **الميزات**: مشغل فيديو، نظام مفضلة، بحث متقدم، فلاتر

## إرشادات التطوير

### 1. متطلبات الكود
- استخدم JavaScript Vanilla (بدون مكتبات خارجية)
- تأكد من الاستجابة على جميع الشاشات
- اتبع مبادئ Progressive Enhancement
- استخدم CSS Grid و Flexbox للتخطيط

### 2. TMDb API
- استخدم المفتاح المحدد: `b009eaecd7a27750722cc9e29ac50caf`
- تأكد من معالجة الأخطاء بشكل صحيح
- استخدم اللغة العربية عند الإمكان: `language=ar`
- احترم حدود API rate limits

### 3. مصادر المشاهدة المجانية
- تأكد من أن جميع المصادر قانونية ومجانية
- لا تضيف روابط لمحتوى محمي بحقوق الطبع
- اختبر الروابط بانتظام للتأكد من عملها

### 4. إرشادات UI/UX
- اتبع تصميم مشابه لـ Netflix
- استخدم نظام ألوان متسق (أحمر #e50914 كلون رئيسي)
- تأكد من إمكانية الوصول (Accessibility)
- استخدم أيقونات Font Awesome

### 5. الميزات الرئيسية
- **البحث**: بحث فوري مع debouncing
- **الفلاتر**: تصنيف حسب النوع والشعبية
- **المفضلة**: نظام حفظ محلي باستخدام localStorage
- **المشغل**: عرض التريلرات من YouTube
- **التنقل**: pagination للنتائج الكثيرة

### 6. معالجة الأخطاء
- معالجة أخطاء API بشكل مناسب
- عرض رسائل خطأ واضحة للمستخدم
- توفير خيارات إعادة المحاولة
- تسجيل الأخطاء في console للتطوير

### 7. الأداء والتحسين
- استخدم lazy loading للصور
- تخزين مؤقت للبيانات عند الإمكان
- تحسين حجم الملفات والموارد
- استخدام debouncing للبحث

### 8. الأمان والقانونية
- تجنب تضمين محتوى محمي بحقوق الطبع
- تأكد من أن جميع المصادر آمنة وموثوقة
- حماية مفتاح API (على الرغم من أنه مجاني)
- احترام شروط استخدام TMDb

### 9. إرشادات الكود
```javascript
// استخدم const للثوابت
const API_KEY = 'your-api-key';

// استخدم async/await لـ API calls
async function fetchMovies() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// معالجة الأخطاء بشكل مناسب
function handleError(error) {
    showNotification('حدث خطأ، يرجى المحاولة مرة أخرى', 'error');
}
```

### 10. إرشادات CSS
```css
/* استخدم custom properties للألوان */
:root {
    --primary-color: #e50914;
    --bg-color: #1e1e1e;
    --text-color: #ffffff;
}

/* استخدم نمط BEM للتسمية */
.movie-card__title { }
.movie-card__poster { }
.movie-card--featured { }

/* تأكد من الاستجابة */
@media (max-width: 768px) {
    .movies-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}
```

## الملفات الرئيسية
- `index.html` - النسخة الأساسية من الموقع
- `enhanced-movie-site.html` - النسخة المحسّنة مع ميزات إضافية
- `README.md` - توثيق شامل للمشروع
- `package.json` - معلومات المشروع والسكريبتات

## تشغيل المشروع محلياً
```bash
# تثبيت المتطلبات
npm install

# تشغيل الخادم المحلي
npm start
# أو
npm run dev
```

## ميزات مخططة للمستقبل
- [ ] Progressive Web App (PWA)
- [ ] Service Worker للتخزين المؤقت
- [ ] نظام تقييمات المستخدمين
- [ ] توصيات ذكية
- [ ] دعم متعدد اللغات
- [ ] تكامل مع قواعد بيانات أفلام إضافية

عند إضافة ميزات جديدة، تأكد من:
1. اختبارها على جميع المتصفحات الرئيسية
2. التأكد من الاستجابة على الأجهزة المحمولة
3. إضافة التوثيق المناسب
4. اتباع إرشادات التصميم المحددة
5. معالجة الأخطاء بشكل صحيح
