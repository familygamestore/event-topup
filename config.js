// ==========================================
// CONFIGURATION FILE - EVENT TOP UP KUMULATIF
// ==========================================

// ========== 1. SHEETDB API URL ==========
// GANTI DENGAN API KEY DARI SHEETDB ANDA!
const SHEETDB_API_REKAP = 'https://sheetdb.io/api/v1/0l49sfo2dgped';
const SHEETDB_API_SECRET = 'https://sheetdb.io/api/v1/rttvafremapqf';

// ========== 2. DATA HADIAH ==========
const HADIAH_MAP = {
    '100000': { kode: 'A', hadiah: '10 Diamond', diamond: '10', harga: 2904 },
    '200000': { kode: 'B', hadiah: '20 Diamond', diamond: '20', harga: 5809 },
    '300000': { kode: 'C', hadiah: '30 Diamond', diamond: '30', harga: 8300 },
    '400000': { kode: 'D', hadiah: '40 Diamond', diamond: '40', harga: 11129 },
    '500000': { kode: 'E', hadiah: '50 Diamond', diamond: '50', harga: 13766 },
    '1000000': { kode: 'F', hadiah: '100 Diamond', diamond: '100', harga: 26615 },
    '2000000': { kode: 'G', hadiah: '200 Diamond', diamond: '200', harga: 55327 },
    '5000000': { kode: 'H', hadiah: '500 Diamond', diamond: '500', harga: 77936 },
    '10000000': { kode: 'I', hadiah: 'Twilight Pass + 1000 Diamond', diamond: '1000', harga: 304072 }
};

// ========== 3. FUNGSI FORMATTER ==========
function formatRupiah(angka) {
    if (!angka && angka !== 0) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
}

function getCurrentDate() { return new Date().toISOString().split('T')[0]; }

function getKodeFromTotal(total) {
    const map = { 100000:'A',200000:'B',300000:'C',400000:'D',500000:'E',1000000:'F',2000000:'G',5000000:'H',10000000:'I' };
    return map[total] || '-';
}
