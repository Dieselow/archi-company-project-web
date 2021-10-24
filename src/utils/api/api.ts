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
    Equipment: base + '/rooms/equipments/',
    Consumable: base + '/consumable',
    healthFile: base + '/healthfile/',
    delete: {
        patient: base + '/patients/:id?id='
    },
    details: {
        patient: base + '/patients/view/details',
        caregiver: base + '/caregivers/view/details',
        secretary: base + '/secretaries/view/details',
    },
    update: {
        patient: base + '/patients/update/:id?id=',
        caregiver: base + '/caregivers/update/:id?id=',
        secretary: base + '/secretaries/update/:id?id=',
    },
    search : base + '/search/:request?request=',
    getUserType : base + "/users/get/:token"

}

export const CreateHealthFile = (healthFile: Equipment) => {
    return api.healthFile + 'update/:id?id=' + healthFile.id;
}

export const UpdateHealthFile = (healthFile: Equipment) => {
    return api.healthFile + 'create/:id?id=' + healthFile.id;
}
export const DeleteHealthFile = (healthFile: Equipment) => {
    return api.healthFile + 'delete/:id?id=' + healthFile.id;
}

export const DeleteConsumableId = (consumable: Equipment) => {
    return api.Consumable + '/delete/:id?id=' + consumable.id;
}

export const AddConsumableId = (consumable: Equipment) => {
    return api.Consumable + consumable.id;
}

export const deleteEquipmentId = (equipment: Equipment) => {
    return api.Equipment + 'delete/:id?id=' + equipment.id;
}

export const addEquipmentId = (equippment: Equipment) => {
    return api.Equipment + 'add/:id?id=' + equippment.id;
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

export const getDetails = (type: UserType) => {
    switch (type) {
        case 'caregiver':
            return api.details.caregiver;
            break;

        case 'secretary':
            return api.details.secretary;
            break;

        case 'patient':
            return api.details.patient;
            break;
    }
}

export const getUpdate = (type: UserType) => {
    switch (type) {
        case 'caregiver':
            return api.update.caregiver;
            break;

        case 'secretary':
            return api.update.secretary;
            break;

        case 'patient':
            return api.update.patient;
            break;
    }
}
