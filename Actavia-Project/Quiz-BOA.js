//PLAY QUIZ AND SCORE JS
// 1. DATABASE SOAL (Efisien)
const questionDatabase = [
    {
        id: 1,
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Jika Aset naik Rp10jt dan Liabilitas naik Rp3jt, berapa perubahan Ekuitas?",
        options: ["Naik Rp7jt", "Turun Rp7jt", "Naik Rp13jt", "Tetap", "Turun Rp3jt"],
        answer: 0,
        explanation: "Rumus Dasar: Aset = Liabilitas + Ekuitas. 10jt = 3jt + X. Maka X = 7jt (Naik)."
    },
    {
        id: 2,
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Manakah yang termasuk dalam kategori Aset Lancar?",
        options: ["Gedung", "Kas", "Utang Usaha", "Modal Saham", "Kendaraan"],
        answer: 1,
        explanation: "Kas adalah aset yang paling likuid dan termasuk dalam Aset Lancar."
    },
    {
        id: 3,
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Cocoa Co. has $4.000 Cash, $300 customer receivables, and $1.000 loan. Cocoa Co.'s equity is?",
        options: ["$3.300", "$1.000", "Cant be determined", "$4.300", "$1.300"],
        answer: 0,
        explanation: "Reminder that accounting equation is ASSET = LIABILITIES + EQUITY. Cash and Receivables are Asset because company has full controll it, while loan is Liabilities because it's a payable. So, $4.000 + $300 = $1.000 + Equity, means that Equity = $4.000 + $300 - $1.000 (Using algebric), and the result is $3.000"
    },
    {
        id: 4,
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Peralatan adalah akun yang termasuk?",
        options: ["Aset", "Liabilitas", "Ekuitas", "Pendapatan", "Beban"],
        answer: 0,
        explanation: "Peralatan masuk ke Aset karena pemilik bisa mengontrol penuh hal tersebut (disewakan, dijual, dirusak)"
    },
    {
        id: 5,
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Siapa nama bapak akuntansi dunia?",
        options: ["Luca Pacioli", "Alexander Graham Bell", "Albert Einstein", "Thomas A.E.", "Tidak ada jawaban yang benar"],
        answer: 0,
        explanation: "Luca Pacioli adalah bapak akuntansi dunia dengan bukunya yang berjudul Summa de Aritmetic geometric propotionni et proppotionalita."
    },
    // Tambahkan ribuan soal lagi di sini dengan format yang sama
];

