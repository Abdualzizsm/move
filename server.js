const express = require('express');
const path = require('path');
const app = express();

// تحديد المنفذ من متغير البيئة أو استخدام 3000 كافتراضي
const PORT = process.env.PORT || 3000;

// تقديم الملفات الثابتة
app.use(express.static('.'));

// توجيه جميع الطلبات إلى index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`🎬 موقع الأفلام يعمل على المنفذ ${PORT}`);
    console.log(`🌐 الرابط: http://localhost:${PORT}`);
});
