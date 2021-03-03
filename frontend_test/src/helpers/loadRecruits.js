import { talentService } from "../services/talentService";


export const loadRecruits = async (id_user, id_role) => {
    let recruits = [];

    if(id_role === 3){
        return recruits = await getRecruits(id_user);
    }
    else if(id_role === 2){
        recruits = await loadRecruitsCoach(id_user);
        return recruits;
    }
    else if(id_role === 1){
        recruits = await loadRecruitsDirector(id_user);
        return recruits;
    }

    return recruits;
}

const getRecruits = async (id_user) => {
    const response = await talentService.getRecruitsByOwner(id_user);
    return response.data;
}

const loadRecruitsCoach = async (id_user) => {
    let recruits = [];

    // GET COACH'S RECRUITS
    recruits = await getRecruits(id_user);

    const response = await talentService.getRecruitersByCoach(id_user);
    const recruiters = response.data;

    let promises = recruiters.map( async (recruiter) => {
        return new Promise(async(resolve, reject) => {
            recruits.push(...await getRecruits(recruiter.id_user));
            resolve(recruits);
        });
    });

    return Promise.all(promises).then(() => {
        return recruits;
    }).catch(() => {
        return [];
    });
}

const loadRecruitsDirector = async (id_user) => {
    let recruits = [];

    // GET DIRECTOR'S COACHES
    const response = await talentService.getCoachesByDirector(id_user);
    const coaches = response.data;
    
    let promises = coaches.map( async (coach) => {
        return new Promise(async(resolve, reject) => {
            recruits.push(...await loadRecruitsCoach(coach.id_user));
            resolve(recruits);
        });
    });

    return Promise.all(promises).then(() => {
        return recruits;
    }).catch(() => {
        return [];
    });
}