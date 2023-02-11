function company(){
    class Company{
        constructor(){
            this.departments = []
            
        }
        addEmployee(name,salary,position,department){
            if(!name || !salary || !position || !department || salary < 0){
                throw new Error('Invalid input!')
            }
            this.departments.push({
                name,
                salary,
                position,
                department
            })
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
        bestDepartment(){
            console.log(this.departments[0])
            let deps = {}
            let personsInDep = {}
            for (const person of this.departments) {
               let department = person.department
               let salary = person.salary;
                if(!deps.hasOwnProperty(department)){
                    deps[department] = 0
                    personsInDep[department] = []
                };
                personsInDep[department].push(person)
                deps[department] += salary
                
            }
            let depsArr = []
            for (const dep in deps) {
                depsArr.push({
                    department:deps[dep],
                    dep
                })
            }
            console.log(depsArr[0])
            depsArr.sort((a,b)=>{})
            console.log(depsArr[0])
            return deps

            // let bestDep = ''
            // deps = deps.sort((a,b)=>{
            //     b[department] - a[department] 
            // })
            // bestDep = Object.key(deps[0])

        }
    }
    let c = new Company();
    c.addEmployee("Stanimir", 2000, "engineer", "Construction");
    c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
    c.addEmployee("Slavi", 500, "dyer", "Construction");
    c.addEmployee("Stan", 2000, "architect", "Construction");
    c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
    c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
    c.addEmployee("Gosho", 1350, "HR", "Human resources");
    console.log(c.bestDepartment());
}
company();

// class Company {
// 	constructor () {
// 		this.departments = []
// 	}

// 	getDepart (name) {
// 		const depart = this.departments.find(x => x.name === name)

// 		if (! depart) {
// 			const temp = { name, employees: [], salaries: [], positions: [] }
// 			this.departments.push(temp)
// 			return temp
// 		} else {
// 			return depart
// 		}
// 	}

// 	getSalariesSum = depart => depart.salaries.reduce((a, v) => a + v, 0)

// 	bestSalaryDepart = () =>
// 		this.departments.sort((a, b) =>
// 			this.getSalariesSum(b) / b.salaries.length -
// 			this.getSalariesSum(a) / a.salaries.length)
// 			[0]

// 	addEmployee (...args) {
// 		if (
// 			args.some(x => x === undefined || x === null || x === '') ||
// 			args[1] < 0
// 		) {
// 			throw new Error('Invalid input!')
// 		}

// 		const department = this.getDepart(args[3])

// 		department.employees.push(args[0])
// 		department.salaries.push(args[1])
// 		department.positions.push(args[2])
// 		return `New employee is hired. Name: ${args[0]}. Position: ${args[2]}`
// 	}

// 	bestDepartment () {
// 		const best = this.bestSalaryDepart()

// 		const printData = best.employees
// 			.reduce((a, v, i) => {
// 				a[i] = []
// 				a[i].push(v, best.salaries[i], best.positions[i])
// 				return a
// 			}, [])
// 			.sort((a, b) => b[1] - a[1] === 0
// 				? a[0].localeCompare(b[0])
// 				: b[1] - a[1])
// 			.map(x => x.join(' '))
// 			.join('\n')

// 		return `Best Department is: ${best.name}
// Average salary: ${(this.getSalariesSum(best) / best.salaries.length).toFixed(2)}
// ${printData}`
// 	}
// }

// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());
