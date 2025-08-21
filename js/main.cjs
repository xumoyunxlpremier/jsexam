const students = require("./1-task.cjs")
const students2 = require("./2-task.cjs");
const students3 = require("./3-task.cjs");
const students4 = require("./4-task.cjs");


//5-MASALA

// 4 ta masala uchun sharh yozasiz.
//  Har bir qator kod uchun izoh yozasiz.
//  Bu narsa kodni siz yozganizi bilish uchun muhim.
//  Agar menda zarracha siz gptdan foydalanganiz haqida shubha tug'ilsa live coding qildiraman.
//  O'shanda kodni yozib bera olmasangiz so'zsiz imtihondan yiqilasiz.
//  Shuning uchun gptdan foydalanmang. 
// Sizga yordam berishi mumkin bo'lgan eng katta narsa bu sizning miyyangiz.

// -------------------
// Misol:

// --- 1-masala:
// 1-qator: functioin ochilgandan song faqat "female" va bahosi "A" bolgan students return qilinyapti yani faqat ular tanlanishi lozim bolyapti
// 2-qator: .map metodi bilan ...(student haqida barcha malumot copy qilinib olib kelinyapti) va student.age(return qilingan studentlarning yoshiga 3 qoshilyapti)
// 3-qator: .sort metodi bilan tanlangan 3ta female Alifbo boyicha arrayga otyapti yani a<b bolsa ism orqaga otyapti aksi bolsa oldinga 
// 4-qator: shu function resultga teng qilinib(const result = task(students) consolga chiqarilyapti

// --- 2-masala:
// 1-qator: function ochilgandan song faqat "female" lar tanlab olinyapti filter metodi bn
// 2-qator: sort metodi bilan ular oqidigon fan alifvo boyicha tartiblanyaoti, localCompare> 2ta stringni alifbo tartibida solishtiradi bu yangi metod ekan:)
// 3-qator: shartga kora 1- va ohrgi qiz berilyapti va farqni find qilish uchun Math kutubxonasidan Math.abs zor ishleydi yani farqni topgani mos 
// 4-qator: 1-qizni uzunligidan ohirgniki - bolyapt va return qilinib consolga result bop chiqyapti

// --- 3-masala:
// 1-qator: 3ta parametri bor task functioni bor, map masivda elementlardi birma bir ayalanadi
// 2-qator: if (el.id === id)> id teng bo‘lsa, yangi obyektni qaytaradi
// 3-qator: else(return el) > una bomasa eski elementni qaytaradi
// 4-qator: bular hanmasi resultga teng bolib consolga result chiqyapti

// --- 4-masala:
// 1-qator: function ochilib, 2ta const ochdim eng yoshi kotta ayol va eng yoshi kichin erkakni aniqlash uchun
// 2-qator: Math.max, Math.min bn topish osonro boldi, ...qilib arraydagi data lar copy qilinib olib kelinyapti 
// 3-qator: filter qilinib ayol va erkak find qiliinyapti kegn sort bn yoshiga qarab find qilinyapti
// 4-qator: return ga ularni farqi topilyapti (minMale - maxFemale) kegn consolga result kelib tugadi
