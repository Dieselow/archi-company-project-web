import { UserType } from "../../components/userLogin/userLogin";

const base = 'http://localhost:3001/api/v1';

export const api = {
    register: {
        patient: base + '/patients/auth/register',
        caregiver: base + '/caregivers/auth/register',
        secretary: base + '/secretaries/auth/register',
    },
    doctorPatient : base + '/view/patients',
    patients: base + '/patients',
    caregivers: base + '/caregivers',
    login: base + '/auth/login',
    welcome: base + '/welcome',
    Rooms: base + '/rooms',
    getpatient: base + '/patients',
    rooms : {
        rooms : base + '/rooms',
    },
    delete: {
        patient: base + '/patients/delete/:id?id=',
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
    getUserType : base + "/users/get/:token",

    healthfile : { 
        view : base + '/healthfile/view/:id?id=',
        create : base + '/healthfile/create/:id?id=',
        update: base + '/healthfile/update/:id?id=',
        delete: base + '/healthfile/delete/:id?id=',
    },
    consumable : { 
        viewall : base + '/consumable',
        create : base + '/consumable',
        update: base + '/consumable/update/:id?id=',
        delete: base + '/consumable/delete/:id?id=',
        viewspecific: base + '/consumable/view/:id?id=',
    },
    consumableType : { 
        viewall : base + '/consumableType',
        create : base + '/consumableType',
        update: base + '/consumableType/update/:id?id=',
        delete: base + '/consumableType/delete/:id?id=',
        viewspecific: base + '/consumableType/view/:id?id=',
    },
    equipment : { 
        view : base + '/rooms/equipments',
        create : base + '/rooms/equipments/add/:id?id=',
        update: base + '/rooms/equipments/update/:id?id=',
        delete: base + '/rooms/equipments/delete/:id?id=',
    },
    equipmentType : { 
        view : base + '/rooms/equipments/type',
        create : base + '/rooms/equipments/type/add',
        update: base + '/rooms/equipments/type/update',
        delete: base + '/rooms/equipments/type/delete/:id?id=',
    }
}

// export const GetRoombyId = (room: Room) => {
//     return api.Rooms + '/view/:id?id=' + healthFile.id;
// }



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
