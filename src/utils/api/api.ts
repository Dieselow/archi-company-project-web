const base = 'http://localhost:3001/api/v1';

export const api = {
    registerPatient : base + '/patients/auth/register',
    login : base + '/auth/login',
}