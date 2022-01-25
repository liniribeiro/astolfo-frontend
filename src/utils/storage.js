export const saveOnStorage = (data, key)=>{
    localStorage.setItem(key, data);
}


export const saveUserOnStorage = (data)=>{
    const companyId = data['company']['id']
    localStorage.setItem('@companyId', companyId);
    localStorage.setItem('@logged', true);
    localStorage.setItem('@loggeduser', data);
}