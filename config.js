// ==========================================
// CONFIGURATION FILE - EVENT TOP UP KUMULATIF
// MENGGUNAKAN SHEETDB (NO CORS ISSUE)
// ==========================================

// ========== 1. SHEETDB API URL ==========
// DAFTAR GRATIS DI https://sheetdb.io
// GANTI DENGAN URL DARI SHEETDB ANDA!
const SHEETDB_API = 'https://sheetdb.io/api/v1/0l49sfo2dgped';

// Nama sheet yang digunakan
const SHEET_NAME = 'REKAP';

// ========== 2. DATA HADIAH (SESUAI KATALOG) ==========
const HADIAH_MAP = {
    '100000': { 
        kode: 'A', 
        hadiah: '10 Diamond', 
        diamond: '10', 
        harga: 2904,
        displayTotal: 'Rp 100.000'
    },
    '200000': { 
        kode: 'B', 
        hadiah: '20 Diamond', 
        diamond: '20', 
        harga: 5809,
        displayTotal: 'Rp 200.000'
    },
    '300000': { 
        kode: 'C', 
        hadiah: '30 Diamond', 
        diamond: '30', 
        harga: 8300,
        displayTotal: 'Rp 300.000'
    },
    '400000': { 
        kode: 'D', 
        hadiah: '40 Diamond', 
        diamond: '40', 
        harga: 11129,
        displayTotal: 'Rp 400.000'
    },
    '500000': { 
        kode: 'E', 
        hadiah: '50 Diamond', 
        diamond: '50', 
        harga: 13766,
        displayTotal: 'Rp 500.000'
    },
    '1000000': { 
        kode: 'F', 
        hadiah: '100 Diamond', 
        diamond: '100', 
        harga: 26615,
        displayTotal: 'Rp 1.000.000'
    },
    '2000000': { 
        kode: 'G', 
        hadiah: '200 Diamond', 
        diamond: '200', 
        harga: 55327,
        displayTotal: 'Rp 2.000.000'
    },
    '5000000': { 
        kode: 'H', 
        hadiah: '500 Diamond', 
        diamond: '500', 
        harga: 77936,
        displayTotal: 'Rp 5.000.000'
    },
    '10000000': { 
        kode: 'I', 
        hadiah: 'Twilight Pass + 1000 Diamond', 
        diamond: '1000', 
        harga: 304072,
        displayTotal: 'Rp 10.000.000'
    }
};

// ========== 3. FUNGSI FORMATTER ==========
function formatRupiah(angka) {
    if (!angka && angka !== 0) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(angka);
}

function formatNumber(angka) {
    if (!angka) return '0';
    return new Intl.NumberFormat('id-ID').format(angka);
}

function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
}

function getKodeFromTotal(total) {
    const map = {
        100000: 'A', 200000: 'B', 300000: 'C', 400000: 'D',
        500000: 'E', 1000000: 'F', 2000000: 'G', 5000000: 'H', 10000000: 'I'
    };
    return map[total] || '-';
}

function validateUserId(userId) {
    return /^\d+$/.test(userId);
}

function validateServerId(serverId) {
    return /^\d+$/.test(serverId);
}

// ========== 4. EKSPOR ==========
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SHEETDB_API,
        SHEET_NAME,
        HADIAH_MAP,
        formatRupiah,
        formatNumber,
        getCurrentDate,
        getKodeFromTotal,
        validateUserId,
        validateServerId
    };
}
