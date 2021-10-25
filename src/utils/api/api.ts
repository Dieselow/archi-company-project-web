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
    Rooms: base + '/rooms',
    Equipment: base + '/rooms/equipments/',
    EquipmentType: base + '/rooms/equipments/type',
    Consumable: base + '/consumable',
    ConsumableType: base + '/consumableType',
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
    }

}

// export const GetRoombyId = (room: Room) => {
//     return api.Rooms + '/view/:id?id=' + healthFile.id;
// }
export const CreateHealthFile = (healthFile: Equipment) => {
    return api.healthFile + 'create/:id?id=' + healthFile.id;
}

export const UpdateHealthFile = (healthFile: Equipment) => {
    return api.healthFile + 'update/:id?id=' + healthFile.id;
}
export const DeleteHealthFile = (healthFile: Equipment) => {
    return api.healthFile + 'delete/:id?id=' + healthFile.id;
}

export const GetHealthFile = (healthFile: Equipment) => {
    return api.healthFile + 'view/:id?id=' + healthFile.id;
}

export const DeleteConsumableTypeId = (consumable: Equipment) => {
    return api.ConsumableType + '/delete/:id?id=' + consumable.id;
}

export const UpdateConsumableTypeId = (consumable: Equipment) => {
    return api.ConsumableType + 'update/:id?id='+ consumable.id;
}

export const DeleteConsumableId = (consumable: Equipment) => {
    return api.Consumable + '/delete/:id?id=' + consumable.id;
}

export const UpdateConsumableId = (consumable: Equipment) => {
    return api.Consumable + +'update/:id?id='+ consumable.id;
}

export const DeleteEquipmentId = (equipment: Equipment) => {
    return api.Equipment + 'delete/:id?id=' + equipment.id;
}

export const UpdateEquipmentId = (equipment: Equipment) => {
    return api.Equipment + 'update/:id?id=' + equipment.id;
}

export const AddEquipmentId = (equipment: Equipment) => {
    return api.Equipment + 'add/:id?id=' + equipment.id;
}

export const DeleteEquipmentTypeId = (equipment: Equipment) => {
    return api.EquipmentType + '/delete/:id?id=' + equipment.id;
}

export const UpdateEquipmentTypeId = () => {
    return api.EquipmentType + '/update';
}

export const AddEquipmentTypeId = () => {
    return api.EquipmentType + '/add';
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
