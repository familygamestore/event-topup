// ==========================================
// CONFIGURATION FILE - EVENT TOP UP KUMULATIF
// ==========================================
// Last Update: 30 April 2026

// ========== 1. GOOGLE APPS SCRIPT URL ==========
// URL sudah diisi dengan deployment Anda
const API_URL = 'https://script.google.com/macros/s/AKfycbzSROS9lCXmyp2V0couotPpLmJIhTCVirZv7zYjMyjXYJMnkYAV6nFim-QpGJB7x4grEw/exec';

// ========== 2. GOOGLE SHEETS CONFIGURATION ==========
const SHEETS_CONFIG = {
    spreadsheetId: '1h00WylehM60GELOKRGMjU9RPQchrrg2Ak3hPOyrNCps',
    sheetName: 'REKAP',
    columns: {
        no: 1,
        tanggalClaim: 2,
        userId: 3,
        serverId: 4,
        nickname: 5,
        totalTopup: 6,
        hadiahEvent: 7,
        diamond: 8,
        pengeluaran: 9
    },
    headers: [
        'NO',
        'TANGGAL_CLAIM',
        'USER_ID',
        'SERVER_ID',
        'NICKNAME',
        'TOTAL_TOPUP_RP',
        'HADIAH_EVENT',
        'DIAMOND',
        'PENGELUARAN_RP'
    ]
};

// ========== 3. DATA HADIAH (SESUAI KATALOG) ==========
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

// ========== 4. DAFTAR KODE EVENT ==========
const KODE_EVENT_LIST = [
    { kode: 'A', nominal: 100000, hadiah: '10 Diamond', harga: 2904, keterangan: 'Top Up 100K → 10 Diamond' },
    { kode: 'B', nominal: 200000, hadiah: '20 Diamond', harga: 5809, keterangan: 'Top Up 200K → 20 Diamond' },
    { kode: 'C', nominal: 300000, hadiah: '30 Diamond', harga: 8300, keterangan: 'Top Up 300K → 30 Diamond' },
    { kode: 'D', nominal: 400000, hadiah: '40 Diamond', harga: 11129, keterangan: 'Top Up 400K → 40 Diamond' },
    { kode: 'E', nominal: 500000, hadiah: '50 Diamond', harga: 13766, keterangan: 'Top Up 500K → 50 Diamond' },
    { kode: 'F', nominal: 1000000, hadiah: '100 Diamond', harga: 26615, keterangan: 'Top Up 1JT → 100 Diamond' },
    { kode: 'G', nominal: 2000000, hadiah: '200 Diamond', harga: 55327, keterangan: 'Top Up 2JT → 200 Diamond' },
    { kode: 'H', nominal: 5000000, hadiah: '500 Diamond', harga: 77936, keterangan: 'Top Up 5JT → 500 Diamond' },
    { kode: 'I', nominal: 10000000, hadiah: 'Twilight Pass + 1000 Diamond', harga: 304072, keterangan: 'Top Up 10JT → TP + 1000 Diamond' }
];

// ========== 5. INFORMASI EVENT ==========
const EVENT_INFO = {
    name: 'Event Top Up Kumulatif',
    startDate: '2026-04-28',
    endDate: '2026-06-30',
    periode: '28 April - 30 Juni 2026',
    description: 'Semakin banyak top up, semakin besar hadiahmu!',
    claimVia: 'WhatsApp Official',
    isLimited: true
};

// ========== 6. KONFIGURASI APLIKASI ==========
const APP_CONFIG = {
    appName: 'Admin Rekap Event Top Up',
    version: '2.0.0',
    autoRefreshInterval: 300000,
    autoSyncInterval: 300000,
    offlineMode: true,
    debugMode: false,
    locale: 'id'
};

// ========== 7. FORMATTER FUNCTIONS ==========
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

function formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
}

function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
}

// ========== 8. HELPER FUNCTIONS ==========
function getHadiahByKode(kode) {
    const event = KODE_EVENT_LIST.find(e => e.kode === kode);
    return event ? event.hadiah : '-';
}

function getHargaByKode(kode) {
    const event = KODE_EVENT_LIST.find(e => e.kode === kode);
    return event ? formatRupiah(event.harga) : '-';
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

// ========== 9. PESAN ==========
const MESSAGES = {
    SUCCESS_SAVE: '✅ Data berhasil disimpan!',
    SUCCESS_DELETE: '✅ Data berhasil dihapus!',
    SUCCESS_RESET: '✅ Form telah direset',
    SUCCESS_EXPORT: '✅ Data berhasil diekspor!',
    SUCCESS_SYNC: '✅ Data berhasil disinkronkan!',
    ERROR_REQUIRED_USER_ID: '❌ User ID harus diisi!',
    ERROR_INVALID_USER_ID: '❌ User ID harus berupa angka!',
    ERROR_REQUIRED_SERVER_ID: '❌ Server ID harus diisi!',
    ERROR_INVALID_SERVER_ID: '❌ Server ID harus berupa angka!',
    ERROR_REQUIRED_NICKNAME: '❌ Nickname harus diisi!',
    ERROR_REQUIRED_TOTAL: '❌ Pilih Total Top Up terlebih dahulu!',
    ERROR_NO_DATA: '❌ Tidak ada data untuk diekspor',
    ERROR_NO_LOCAL_DATA: '❌ Tidak ada data lokal untuk disinkronkan',
    ERROR_SYNC_FAILED: '❌ Gagal menyinkronkan data, periksa koneksi',
    ERROR_CONNECTION: '⚠️ Koneksi terputus. Data disimpan lokal.',
    WARNING_OFFLINE: '📱 Tersimpan ke lokal (offline). Akan sync otomatis.',
    WARNING_DELETE: '⚠️ Tindakan ini tidak dapat dibatalkan!',
    INFO_NO_DATA: '📭 Belum ada data',
    INFO_NO_RESULT: '🔍 Tidak ada data yang ditemukan'
};

// ========== 10. EKSPOR (UNTUK NODE.JS) ==========
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        API_URL,
        SHEETS_CONFIG,
        HADIAH_MAP,
        KODE_EVENT_LIST,
        EVENT_INFO,
        APP_CONFIG,
        formatRupiah,
        formatNumber,
        formatDate,
        getCurrentDate,
        getHadiahByKode,
        getHargaByKode,
        getKodeFromTotal,
        validateUserId,
        validateServerId,
        MESSAGES
    };
}

// ========== 11. CONSOLE LOG ==========
if (APP_CONFIG.debugMode) {
    console.log('🔧 Config loaded successfully');
    console.log('📊 Event:', EVENT_INFO.name);
    console.log('📅 Periode:', EVENT_INFO.periode);
    console.log('🔗 API URL:', API_URL);
}
