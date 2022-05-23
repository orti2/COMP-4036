function json_parse_by_id(json, attr){
    let temp  = [];

    if (attr = 'name'){
        for(var i in json.data.name){
            temp.push(json.data.name[i]);
        }
        return(temp.join(' '));
    } else
    if (attr = 'email'){
        for(var i in json.data.email){
            temp.push(json.data.email[i]);
        }
        return(temp.join(' '));
    } else
    if (attr = 'education'){
        for(var i in json.data.education){
            temp.push(json.data.education[i]);
        }
        return(temp.join(' '));
    } else
    if (attr = 'objective'){
        for(var i in json.data.objective){
            temp.push(json.data.objective[i]);
        }
        return(temp.join(' '));
    } else
    if (attr = 'abilities'){
        for(var i in json.data.abilities){
            temp.push(json.data.abilities[i]);
        }
        return(temp.join(' '));
    } else
    if (attr = 'experiences'){
        for(var i in json.data.experiences){
            temp.push(json.data.experiences[i]);
        }  
        return(temp.join(' '));
    } else
    if (attr = 'skills'){
        for(var i in json.data.skills){
            temp.push(json.data.skills[i]);
        }
        return(temp.join(' '));
    } else
    if (attr = 'work'){
        for(var i in json.data.work){
            temp.push(json.data.work[i]);
        }
        return(temp.join(' '));
    } else
    return arr.join(' ');
}