import { UserType } from "../../components/userLogin/userLogin";
import { Equipment } from '../../components/Secretary/secretaryEquipmentItem/secretaryEquipmentItem';

const base = 'http://localhost:3001/api/v1';

export const api = {
    register: {
        patient: base + '/patients/auth/register',
        caregiver: base + '/caregivers/auth/register',
        secretary: base + '/secretaries/auth/register',
    },
    login: base + '/auth/login',
    welcome: base + '/welcome',
    deleteEquipment: base + '/rooms/equipments/delete/:id?id=',
    addEquipment: base + '/rooms/equipments/add/:id?id=',
}

export const deleteEquipmentId= (equipment: Equipment) =>{
    return api.deleteEquipment+equipment.id;
}

export const addEquipmentId= (equippment: Equipment) =>{
    return api.addEquipment+equippment.id;
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