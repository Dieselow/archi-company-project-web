import { UserType } from "../../components/userLogin/userLogin";

const base = 'http://localhost:3001/api/v1';

export const api = {
    register: {
        patient: base + '/patients/auth/register',
        caregiver: base + '/caregivers/auth/register',
        secretary: base + '/secretaries/auth/register',
    },
    login: base + '/auth/login',
    delete: {
        patient: base + '/patients/:'
    },
    details : base + '/patients/view/details'
}

export const getRegister = (type: UserType) => {
    switch (type) {
        case 'caregiver':
            return api.register.caregiver;
            break;

        case 'secretary':
            return api.register.secretary;
            break;

        case 'patient':
            return api.register.patient;
            break;
    }
}