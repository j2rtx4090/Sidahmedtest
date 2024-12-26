// الجافا سكربت لتبديل حالة القائمة الجانبية
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    // إذا كانت القائمة مخفية، إظهارها، وإذا كانت ظاهرة، إخفائها
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0'; // إخفاء القائمة
    } else {
        sidebar.style.width = '250px'; // إظهار القائمة
    }
}
