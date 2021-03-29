const inquirer = require("inquirer");
const Files = require("./utils/create-site");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");

// gathering information regarding the team
class Team {
  constructor() {
    this.teamMemebrs = [];
  };

  // common questions for all employee types 
  mainQuestions(employeeType) {
    const questions = [{
      type: "text",
      name: "name",
      message: `Please enter an employee's name.`,
    }, {
      type: "text",
      name: "id",
      message: `Please enter the employee's ID number.`,
    }, {
      type: "text",
      name: "email",
      message: `Please enter the employee's email address.`,

      // ensuring email address is in the right format
      validate: emailInput => {
        const validEmail = /[^\W][\w\d-.]*@[\w\d]*.[\w]*/;
        if (emailInput.match(validEmail)) {
          return true;
        } else {
          console.log('Your entry was invalid. Please enter a valid email address.');
          return false;
        }
      }
    }];
    return questions;
  };

  addManager() {
    inquirer
      .prompt([...this.mainQuestions(Manager), {
        type: "text",
        name: "officeNumber",
        message: `Please enter the manager's office number.`,
      }])
      .then(answers => {
        const {
          name,
          id,
          email,
          officeNumber
        } = answers;
        this.manager = new Manager(name, id, email, officeNumber);
        this.teamMemebrs.push(this.manager);

        this.buildTeam();
      });
  };

  addIntern() {
    inquirer
      .prompt([...this.mainQuestions(Intern), {
        type: "text",
        name: "school",
        message: `Please enter the name of the intern's school.`
      }])
      .then(answers => {
        const {
          name,
          id,
          email,
          school
        } = answers;
        this.intern = new Intern(name, id, email, school);
        this.teamMemebrs.push(this.intern);

        this.buildTeam();
      });
  };

  addEngineer() {
    inquirer
      .prompt([...this.mainQuestions(Engineer), {
        type: "text",
        name: "github",
        message: `Please enter the engineer's GitHub username.`
      }])
      .then(answers => {
        const {
          name,
          id,
          email,
          github
        } = answers;
        this.engineer = new Engineer(name, id, email, github);
        this.teamMemebrs.push(this.engineer);

        this.buildTeam();
      });
  };

  buildTeam() {
    inquirer
      .prompt({
        type: 'list',
        message: 'Is there anything else you would like to do?',
        name: 'action',
        choices: ['Add another intern', 'Add another engineer', 'Complete the team']

      })
      .then(({
        action
      }) => {
        if (action === 'Add another intern') {

          return this.addEngineer();
        } else if (action === 'Add another engineer') {

          return this.addIntern();
        } else {
          return new generatePage().addEmployeeCard(this.teamMemebrs);
        }
      })
      .then(pageHTML => {
        return new Files().writeFile(pageHTML);
      })
      .then(copyFileResponse => {
        return new Files().copyFile(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

const team = new Team().addManager();