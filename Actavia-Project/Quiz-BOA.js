//PLAY QUIZ AND SCORE JS
// 1. DATABASE SOAL (Efisien)
const questionDatabase = [
    {
        id: "BOA.AE-E01",
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Jika Aset naik Rp10jt dan Liabilitas naik Rp3jt, berapa perubahan Ekuitas?",
        options: ["Naik Rp7jt", "Turun Rp7jt", "Naik Rp13jt", "Tetap", "Turun Rp3jt"],
        answer: 0,
        explanation: "Rumus Dasar: Aset = Liabilitas + Ekuitas. 10jt = 3jt + X. Maka X = 7jt (Naik)."
    },
    {
        id: "BOA.AE-E02",
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Manakah yang termasuk dalam kategori Aset Lancar?",
        options: ["Gedung", "Kas", "Utang Usaha", "Modal Saham", "Kendaraan"],
        answer: 1,
        explanation: "Kas adalah aset yang paling likuid dan termasuk dalam Aset Lancar."
    },
    {
        id: "BOA.AE-E03",
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Cocoa Co. has $4.000 Cash, $300 customer receivables, and $1.000 loan. Cocoa Co.'s equity is?",
        options: ["$3.300", "$1.000", "Cant be determined", "$4.300", "$1.300"],
        answer: 0,
        explanation: "Reminder that accounting equation is ASSET = LIABILITIES + EQUITY. Cash and Receivables are Asset because company has full controll it, while loan is Liabilities because it's a payable. So, $4.000 + $300 = $1.000 + Equity, means that Equity = $4.000 + $300 - $1.000 (Using algebric), and the result is $3.000"
    },
    {
        id: "BOA.AE-E04",
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Peralatan adalah akun yang termasuk?",
        options: ["Aset", "Liabilitas", "Ekuitas", "Pendapatan", "Beban"],
        answer: 0,
        explanation: "Peralatan masuk ke Aset karena pemilik bisa mengontrol penuh hal tersebut (disewakan, dijual, dirusak)"
    },
    {
        id: "BOA.AE-E05",
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Siapa nama bapak akuntansi dunia?",
        options: ["Luca Pacioli", "Alexander Graham Bell", "Albert Einstein", "Thomas A.E.", "Tidak ada jawaban yang benar"],
        answer: 0,
        explanation: "Luca Pacioli adalah bapak akuntansi dunia dengan bukunya yang berjudul Summa de Aritmetic geometric propotionni et proppotionalita."
    },
    {
        id: "BOA.AE-E06",
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: "Pak Erwin memulai usaha Toko Baju Erwin dengan menanamkan modal berupa kas sebesar Rp 1.500.000. Hal tersebut akan menyebabkan perubahan pada?",
        options: ["Aset dan Modal bertambah sebesar Rp 1.500.000", "Aset bertambah sebesar 1.500.000, modal berkurang sebesar Rp 1.500.000", "Aset bertambah sebesar 1.500.000, kewajiban berkurang sebesar Rp 1.500.000", "Kewajiban bertambah sebesar 1.500.000, modal berkurang sebesar Rp 1.500.000", "Modal bertambah sebesar 1.500.000"],
        answer: 0,
        explanation: "Kas adalah akun harta(aset), sehingga menanamkan modal berupa kas akan menyebabkan kenaikan Aset. Disisi lain modal bertambah karena Pak Erwin menanamkan modal kepada usahanya."
    },


// 2. DATABASE SOAL MEDIUM (Efisien)
    {
        id: "BOA.AE-M01",
        difficulty: "Easy",
        material: "Basics of Accounting",
        sub: "Accounting Equation",
        question: `Perhatikan data Usaha Laundry Kelv berikut:
            <table border="1" style="width:100%; margin-top:10px; border-collapse: collapse;">
                <tr style="background-color: #eee; text-align:center;">
                    <th>Akun</th>
                    <th>Saldo</th>
                </tr>
                <tr><td>Kas</td><td>Rp15.000.000</td></tr>
                <tr><td>Piutang</td><td>Rp5.000.000</td></tr>
                <tr><td>Utang</td><td>Rp7.000.000</td></tr>
            </table>
            <br>Berapakah total Aset perusahaan?`,
        options: ["Rp 20.000.000", "Rp 15.000.000", "Rp 27.000.000", "Rp 13.000.000", "Rp 8.000.000"],
        answer: 0,
        explanation: "Aset = Kas + Piutang = 15jt + 5jt = 20jt"
    },
];
