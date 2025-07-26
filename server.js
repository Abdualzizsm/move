const express = require('express');
const path = require('path');
const app = express();

// تحديد المنفذ من متغير البيئة أو استخدام 3000 كافتراضي
const PORT = process.env.PORT || 3000;

// تقديم الملفات الثابتة
app.use(express.static('.'));

// الصفحة الرئيسية الأصلية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// صفحة Cinema Hub الجديدة
app.get('/cinema-hub', (req, res) => {
    res.sendFile(path.join(__dirname, 'cinema-hub.html'));
});

// رابط مختصر للصفحة الجديدة
app.get('/hub', (req, res) => {
    res.sendFile(path.join(__dirname, 'cinema-hub.html'));
});

// توجيه بقية الطلبات إلى الصفحة الأصلية
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`🎬 خادم Cinema Hub يعمل على المنفذ ${PORT}`);
    console.log(`📱 الموقع الأصلي: http://localhost:${PORT}/`);
    console.log(`� Cinema Hub الجديد: http://localhost:${PORT}/cinema-hub`);
    console.log(`⚡ رابط مختصر: http://localhost:${PORT}/hub`);
});
