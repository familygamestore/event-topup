// ==========================================
// CONFIGURATION FILE - EVENT TOP UP KUMULATIF
// ==========================================

// ========== 1. SHEETDB API URL ==========
// GANTI DENGAN API KEY DARI SHEETDB ANDA!
const SHEETDB_API_REKAP = 'https://sheetdb.io/api/v1/0l49sfo2dgped';
const SHEETDB_API_SECRET = 'https://sheetdb.io/api/v1/rttvafremapqf';

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

/**
 * Format angka ke format Rupiah
 * @param {number} angka - Angka yang akan diformat
 * @returns {string} Format Rupiah (contoh: Rp 10.000)
 */
function formatRupiah(angka) {
    if (!angka && angka !== 0) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(angka);
}

/**
 * Format angka ke format ribuan (tanpa Rp)
 * @param {number} angka - Angka yang akan diformat
 * @returns {string} Format ribuan (contoh: 10.000)
 */
function formatNumber(angka) {
    if (!angka) return '0';
    return new Intl.NumberFormat('id-ID').format(angka);
}

/**
 * Mendapatkan tanggal hari ini dalam format YYYY-MM-DD
 * @returns {string} Tanggal hari ini
 */
function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
}

/**
 * Mendapatkan kode event dari total topup
 * @param {number} total - Total topup dalam Rupiah
 * @returns {string} Kode event (A, B, C, dst)
 */
function getKodeFromTotal(total) {
    const map = {
        100000: 'A', 200000: 'B', 300000: 'C', 400000: 'D',
        500000: 'E', 1000000: 'F', 2000000: 'G', 5000000: 'H', 10000000: 'I'
    };
    return map[total] || '-';
}

/**
 * Validasi User ID (hanya angka)
 * @param {string} userId - User ID yang akan divalidasi
 * @returns {boolean} True jika valid
 */
function validateUserId(userId) {
    return /^\d+$/.test(userId);
}

/**
 * Validasi Server ID (hanya angka)
 * @param {string} serverId - Server ID yang akan divalidasi
 * @returns {boolean} True jika valid
 */
function validateServerId(serverId) {
    return /^\d+$/.test(serverId);
}

/**
 * Mendapatkan nama hadiah dari jumlah diamond
 * @param {string|number} diamond - Jumlah diamond
 * @returns {string} Nama hadiah
 */
function getHadiahFromDiamond(diamond) {
    const map = {
        '10': '10 Diamond',
        '20': '20 Diamond',
        '30': '30 Diamond',
        '40': '40 Diamond',
        '50': '50 Diamond',
        '100': '100 Diamond',
        '200': '200 Diamond',
        '500': '500 Diamond',
        '1000': 'Twilight Pass + 1000 Diamond'
    };
    return map[diamond] || diamond + ' Diamond';
}

// ========== 4. EKSPOR MODULE (UNTUK NODE.JS) ==========
// Jika digunakan dengan module system (bisa dihapus jika tidak perlu)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SHEETDB_API_REKAP,
        SHEETDB_API_SECRET,
        HADIAH_MAP,
        formatRupiah,
        formatNumber,
        getCurrentDate,
        getKodeFromTotal,
        validateUserId,
        validateServerId,
        getHadiahFromDiamond
    };
}

// ========== 5. CONSOLE LOG (UNTUK DEBUG) ==========
console.log('✅ config.js loaded successfully');
console.log('📊 Event: Top Up Kumulatif');
console.log('📅 Periode: 28 April - 30 Juni 2026');
console.log('🔗 API REKAP:', SHEETDB_API_REKAP);
console.log('🔗 API SECRET:', SHEETDB_API_SECRET);
