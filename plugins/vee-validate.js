import Vue from 'vue'
import VeeValidate from 'vee-validate';
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required, alpha, min, max, email, regex } from "vee-validate/dist/rules";
import { localize } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);

localize({
    id: {
        messages: {
            required: 'Kolom Harus Diisi',
            regex: 'Format Salah',
            alpha: 'Kolom ini hanya boleh mengandung karakter alfabet',
            password: 'Konfirmasi kata sandi tidak cocok',
            min: 'Kolom ini minimal harus 6 karakter',
            max: 'Kolom ini tidak boleh lebih dari 10 karakter',
            email: 'Format Email Salah',
            currency: 'Masukan harga asli',
            numeric: 'Kolom ini hanya boleh mengandung angka',
        }
    },
    en: {
        messages: {
            required: 'Kolom Harus Diisi',
            regex: 'Format Salah',
            alpha: 'Kolom ini hanya boleh mengandung karakter alfabet',
            password: 'Konfirmasi kata sandi tidak cocok',
            min: 'Kolom ini minimal harus 6 karakter',
            max: 'Kolom ini tidak boleh lebih dari 10 karakter',
            email: 'Format Email Salah',
            currency: 'Masukan harga asli',
            numeric: 'Kolom ini hanya boleh mengandung angka',
        }
    }
});

extend("required", {
    ...required
});

extend("regex", {
    ...regex
});

extend("alpha", {
    ...alpha
});

extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    }
});

extend("min", {
    ...min
});

extend("max", {
    ...max
});

extend("email", email);

extend("currency", {
    validate: value => {
        if (value.toString().length > 2) {
            let currArr = value.toString().split("");
            if (currArr[currArr.length - 1] == 0 && currArr[currArr.length - 2] == 0) {
                let fl = currArr.filter((v, i) => {
                    return v > 0
                })
                if (!fl) {
                    return false
                }
                return true
            }
        }
    }
})