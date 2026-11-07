export const DOCUMENTS = {
  label: {
    kind: { en: 'Medication or package', ar: 'دواء أو عبوة' },
    name: { en: 'Medication Label', ar: 'ملصق دواء' },
    noun: { en: 'label', ar: 'الملصق' },
    lines: [
      { t: { en: 'CARDIOLIN 10 mg tablets (Prescription)', ar: 'كارديولين 10 ملغ أقراص (بوصفة طبية)' } },
      { t: { en: 'Directions: Take 1 tablet twice a day with food.', ar: 'الجرعة: قرص واحد مرتين يوميًا مع الطعام.' } },
      { t: { en: 'Warning: Do not take with grapefruit juice.', ar: 'تحذير: لا تتناوله مع عصير الجريب فروت.' } },
      { t: { en: 'Expires: 08/2027 • Rx Lot 4471-B', ar: 'ينتهي في: 08/2027 • رقم التشغيلة 4471-B' } },
    ],
  },
  note: {
    kind: { en: 'Handwriting', ar: 'خط يد' },
    name: { en: 'Handwritten Note', ar: 'ملاحظة بخط اليد' },
    noun: { en: 'note', ar: 'الملاحظة' },
    lines: [
      { t: { en: 'Pick up dry cleaning on Thursday afternoon', ar: 'استلام الملابس من المغسلة يوم الخميس بعد الظهر' } },
      { t: { en: 'Call Dr. Hale’s office before noon', ar: 'الاتصال بعيادة د. هيل قبل الظهر' } },
      { unsure: true,
        t: { en: '“Bring the blue ... ?” (one word unclear)', ar: '«أحضر ... الأزرق؟» (كلمة واحدة غير واضحة)' },
        fixed: { en: 'Bring the blue folder with the lease papers', ar: 'أحضر الملف الأزرق الذي فيه أوراق الإيجار' },
        blur: { en: 'Bring the blue f... ?', ar: 'أحضر الـ... الأزرق؟' } },
      { t: { en: 'Dinner with Sam, 7:00 PM at Bistro', ar: 'العشاء مع سام الساعة 7:00 مساءً في المطعم' } },
    ],
  },
};

export const DOCUMENT_TYPES = [
  { key: 'medication', doc: 'label' },
  { key: 'letter', doc: 'label' },
  { key: 'form', doc: 'label' },
  { key: 'handwriting', doc: 'note' },
  { key: 'food', doc: 'label' },
  { key: 'other', doc: 'label' },
];

export const READ_LATER_RESULT = {
  en: [
    'Dear Tenant: Your lease renewal notice for 2027.',
    'Page 1: The monthly rent adjustment takes effect on Jan 1.',
    'Page 2: Building utilities and trash policy updates.',
    'Page 3: Please sign and return the addendum by Dec 10.',
  ],
  ar: [
    'عزيزي المستأجر: إشعار تجديد عقد الإيجار لعام 2027.',
    'الصفحة 1: يبدأ تعديل الإيجار الشهري في 1 يناير.',
    'الصفحة 2: تحديثات خدمات المبنى وسياسة القمامة.',
    'الصفحة 3: يرجى توقيع الملحق وإعادته قبل 10 ديسمبر.',
  ],
};
