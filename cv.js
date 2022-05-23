class CV {

    name;
    email;
    phonenum;
    education = [];
    objective;
    abilities = [];
    experience = [];
    skills = [];
    work = [];

    constructor(a, b, c, d, e, f, g, h, i){
        this.name = a;
        this.email = b;
        this.phonenum = c;
        this.education = d;
        this.objective = e;
        this.abilities = f;
        this.experience = g;
        this.skills = h;
        this.work = i;
    };
        
    getName(){
        document.writeln('<div id=' + '"' + 'contenido' + '"' + '><center><body style=background-color:f6f1de;><h1><b>' + this.name + ' </b></h1>');
    }

    getEmail(){
        document.writeln(this.email);
        document.write(' | ');
    }

    getPhoneNum(){
        document.writeln(this.phonenum);
        document.writeln('<hr>');
    }

    getEducation(){
        document.writeln('<h2><b>Education </b></h2>')
        for (let i=0;i<this.education.length; i++){
            document.writeln(this.education[i] + '<br>');
        }
        document.writeln('<hr>');
    }

    getObj(){
        document.writeln(
            '<h2><b>Objective </b></h2><br>' + this.objective + '<hr>');
    }

    getExp(){
        document.writeln('<h2><b>Experience </b></h2>')
        for (let i=0;i<this.experience.length; i++){
            document.writeln(this.experience[i] + '<br>');
        }
        document.writeln('<hr>');
    }

    getAbilities(is_last = false){
        if(is_last == false)
        {
            document.writeln('<h2><b>Abilities </b></h2>')
            for (let i=0;i<this.abilities.length; i++)
            document.writeln(this.abilities[i] + '<br>');
;
            document.writeln('<hr>');
        }
        if(is_last){
            document.writeln('<h2><b>Abilities </b></h2>');
            for (let i=0;i<this.abilities.length; i++)
            document.writeln(this.abilities[i] + '<br>');
;
            document.writeln('</div>');
            document.writeln('<br> <button onclick="download()">Descargar</button>');
        }
    }

    getSkills(is_last = false){

        if (is_last == false){
            document.writeln('<h2><b>Skills </b></h2>')
            for (let i=0;i<this.skills.length; i++)
            document.writeln(this.skills[i] + '<br>');

            document.writeln('<hr>');
        } 
        if(is_last){
            document.writeln('<div class = work><h2><b>Skills </b></h2>')
            for (let i=0;i<this.skills.length; i++)
            document.writeln(this.skills[i] + '<br>');
;
            document.writeln('</div>');
            document.writeln('<br> <button onclick="download()">Descargar</button>');
        }
    }

    getWork(last = true){

        if(last){
            document.writeln('<div class = work><h2><b>Completed Work </b></h2>');
            for (let i=0;i<this.work.length; i++){
                document.writeln(this.work[i] + '<br>');
            }
;
            document.write('</center>');
            document.write('</body>' + '\n');
            document.writeln('</div>');
            document.writeln('<br> <button onclick="download()">Descargar</button>');

        }
        
    }

    setName(name){
        this.name = name;
    }

    setEmail(email){
        this.email = email;
    }

    setPhone(phone){
        this.phonenum = phone;
    }

    setEducation(ed){
        this.education = ed;
    }

    setObj(objective){
        this.objective = objective;
    }

    setExperience(exp){
        this.experience = exp;
    }

    setSkills(skills){
        this.skills = skills;
    }

    setWork(work){
        this.work = work;
    }

    show(
        include_name = true, include_email = true, include_phone = true, include_obj = true, include_education = true, include_exp = true, include_abil = true, include_skills = true, include_work = true,
        last_work = true
    )
    {
        if(include_name){
            this.getName();
        };
        if(include_email){
            this.getEmail();
        }
        if(include_phone){
            this.getPhoneNum();
        }
        if(include_obj){
            this.getObj();
        }
        if(include_exp){
            this.getExp();
        }
        if(include_education){
            this.getEducation();
        }
        if(include_abil){
            this.getAbilities();
        }
        if (include_skills && !include_work){
            if(include_skills){
                this.getSkills(true);
            } else {
                this.getSkills(is_last=false)
                this.getWork();
            }
        
    }
}}

function mi_cv(){
    nombre = 'Abner Y. Ortiz Román';
    email = 'abner.ortiz9@upr.edu';
    phone = '787 - 362 - 7448';
    education = ['University of Puerto Rico, Mayagüez Campus (UPRM)', 'January 2021 - present (Expected Graduation Date; May 2024)'];
    obj = 'Self-motivated and highly reliable university student positioned to pursue an opportunity as a professional in order to maximize analytical and problem solving skills in computer science beyond the academia.';
    exp = ['Data Analysis & Statistics Intern at Oasis Synergestic Technologies'];
    skills = ['Object oriented programming', 'Systematic and creative thinker', 'Active Listener', 'Fully Bilingual (English and Spanish)'];
    wk = '';
    abilities = ['C++', 'Python', 'Visual Basic','Microsoft'];
    my_cv = new CV(nombre, email, phone, education, obj, abilities, exp, skills, wk);

    my_cv.show(
        include_name = true, include_email = true, include_phone = true, include_obj = true, include_education = true, include_exp = true, include_abil = true, include_skills = true, include_work = false, last_work = true);
}

class Resume extends CV {

    show_resume(){

        // Nombre
        document.writeln('<div id=' + '"' + 'contenido' + '"' + '><body style=background-color:white;><h1><b>' + this.name + ' </b></h1>');
        // Email
        document.writeln(this.email);
        document.write(' | ');
        // Num
        document.writeln(this.phonenum);
        document.writeln('<hr>');
        // Obj
        document.writeln('<h2><b>Objective </b></h2><br>' + this.objective);
        // Educ
        document.writeln('<h2><b>Education </b></h2>')
        for (let i=0;i<this.education.length; i++){
            document.writeln(this.education[i] + '<br>');
        }
        // Experiencia
        document.writeln('<h2><b>Experience </b></h2>')
        for (let i=0;i<this.experience.length; i++)
        { document.writeln(this.experience[i] + '<br>');
        };
        // Abilidades
        document.writeln('<h2><b>Abilities </b></h2>');
        for (let i=0;i<this.abilities.length; i++){
            document.writeln(this.abilities[i] + '<br>');
        };
        document.writeln('</div>');
        document.writeln('<br> <button onclick="download()">Descargar</button>');

    }
}

function mi_resume(){

    nombre = 'Abner Y. Ortiz Román';
    email = 'abner.ortiz9@upr.edu';
    phone = '787 - 362 - 7448';
    education = ['University of Puerto Rico, Mayagüez Campus (UPRM)', 'January 2021 - present (Expected Graduation Date; May 2024)'];
    obj = 'Self-motivated and highly reliable university student positioned to pursue an opportunity as a professional in order to maximize analytical and problem solving skills in computer science beyond the academia.';
    exp = ['Data Analysis & Statistics Intern at Oasis Synergestic Technologies'];
    skills = ['Object oriented programming', 'Systematic and creative thinker', 'Active Listener', 'Fully Bilingual (English and Spanish)'];
    wk = '';
    abilities = ['C++', 'Python', 'Visual Basic','Microsoft'];

    my_resume = new Resume(nombre, email, phone, education, obj, abilities, exp, skills, wk);

    my_resume.show_resume();
}

function download(){
    const element=document.getElementById("contenido");
    html2pdf().from(element).save();
} 