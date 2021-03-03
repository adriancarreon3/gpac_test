
const urlBackend = 'http://localhost:3001/api';

export const login = async (email, password) => {
    
    const url = `${urlBackend}/login`;
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    const resp = await fetch(url, requestOptions);
    const {status, data} = await resp.json();

    return {status, data};
}

export const addRecruit = async (recruit) => {
    
    const url = `${urlBackend}/add-recruit`;
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recruit)
    };

    const resp = await fetch(url, requestOptions);
    const {status, data} = await resp.json();

    return {status, data};
}

export const getRecruitsByOwner = async (id_owner) => {
    
    const url = `${urlBackend}/recruits-by-owner/${id_owner}`;
    const resp = await fetch(url);
    const {status, data} = await resp.json();

    return {status, data};
}

export const getRecruitersByCoach = async (id_coach) => {
    
    const url = `${urlBackend}/recruiters-by-coach/${id_coach}`;
    const resp = await fetch(url);
    const {status, data} = await resp.json();

    return {status, data};
}

export const getCoachesByDirector =  async (id_director) => {

    const url = `${urlBackend}/coaches-by-director/${id_director}`;
    const resp = await fetch(url);
    const {status, data} = await resp.json();

    return {status, data};
}

export const getRecruitById =  async (id_recruit) => {

    const url = `${urlBackend}/recruit-by-id/${id_recruit}`;
    const resp = await fetch(url);
    const {status, data} = await resp.json();

    return {status, data};
}

export const getLocations =  async () => {

    const url = `${urlBackend}/locations`;
    const resp = await fetch(url);
    const {status, data} = await resp.json();

    return {status, data};
}

export const talentService = {
    login,
    addRecruit,
    getRecruitsByOwner,
    getRecruitersByCoach,
    getCoachesByDirector,
    getRecruitById,
    getLocations
};