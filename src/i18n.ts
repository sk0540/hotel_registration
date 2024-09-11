import { createI18n } from "vue-i18n";

const messages = {

    ja: {
        name: '名前',
        furigana: 'フリガナ',
        birthdate: '生年月日',
        email: 'メールアドレス',
        pass: 'パスワード',
        region: '在住地域',
        postcode: '郵便番号',
        city: '都道府県と市町村および区',
        address: '町丁と番地',
        registry: '建物名・部屋番号・会社名',
        phone: '電話番号（緊急連絡先）',
    },
    en: {
        name: 'Name',
        furigana: 'Furigana',
        birthdate: 'birth date',
        email: 'Email address',
        pass: 'Password',
        region: 'Region of residence',
        postcode: 'Japan postal code',
        city: 'Prefecture and municipality',
        address: 'District and Address number',
        registry: 'Building name, Room number, Company name',
        phone: 'Phone Number (for emergency)',
    },
};

const i18n = createI18n({
    locale: 'ja', // デフォルト言語
    messages,
});

export default i18n;