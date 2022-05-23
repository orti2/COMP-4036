class CV{

    #name;
    #email;
    #education = [];
    #objective;
    #experience = [];
    #skills = [];
    #work = [];

    constructor(a, b, c, d, e, f){
        this.#name = a;
        this.#email = b;
        this.#education = c;
        this.#objective = d;
        this.#education = e;
        this.#skills = f;
    }

    getName(){
        document.writeln(
        '<h1><b>' + this.#name + ': </b><h1>');
    }

    getEmail(){
        document.writeln(this.#email);
    }

    getEducation(){
        document.writeln(
        '<h2><b>Education : </b></h2><br>' + this.#education.join(' ')
        );
    }

    changeEducation(index,val){
        this.#education[index] = val;
    }

    addExperience(exp){
        this.#experience.push(exp);
    }

    changeExperience(index,val){
        this.#experience[index] = val;
    }

    addEducation(ed){
        this.#education.push(ed);
    }

    addSkills(sk){
        this.#skills.push(sk);
    }

    changeSkills(index,val){
        this.#skills[index] = val;
    }

    getObj(){
        document.writeln(
            '<h2><b>Objective: </b></h2><br>' + this.#objective
            );
    }

    getExp(){
        document.writeln(
            '<h2><b>Experience: </b></h2><br>' + this.#experience.join(' ')
        );
    }

    getSkills(){
        document.writeln(
            '<h2><b>Skills: </b></h2><br>' + this.#education.join(' ')
        );
    }

    getSkills(){
        document.writeln(
            '<h2><b>Work Done: </b></h2><br>' + this.#work.join(' ')
        );
    }

    setName(name){
        this.#name = name;
    }

    setEmail(email){
        this.#email = email;
    }

    setEducation(ed){
        this.#education = ed;
    }

    setObj(obj){
        this.#obj = obj;
    }

    setExperience(exp){
        this.#experience = exp;
    }

    setSkills(skills){
        this.#skills = skills;
    }
    setWork(work){
        this.#work = work;
    }

    showCV(){
        this.getName();
        this.getEmail();
        this.getObj();
        this.getEducation();
        this.getExp();
        this.getAbilities();
        this.getSkills();
    }
}