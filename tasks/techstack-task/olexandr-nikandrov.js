const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" }
}
const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer"},
    { name: "Leo", specialization: "Artist"}
]


function calculateTeamFinanceReport(salaries, team) {
  let numByUseCase = {}


  if (team.length > 0 && team.length < 100 && Object.keys(salaries).length > 0 && Object.keys(salaries).length < 10) {     
         
          team.forEach(function(item) {
              if (!numByUseCase[item.specialization]) {
                numByUseCase[item.specialization] = 0
              } 
              numByUseCase[item.specialization]++
          })
          //console.log("num by use case: ", numByUseCase)

          const TOTAL_BUDGET = 'totalBudget'
          const TOTAL_BUDGET_TEAM = 'totalBudgetTeam'
          let res = {}
          res[TOTAL_BUDGET_TEAM] = 0
          

          for (let prop in numByUseCase) {

              for (let propSalary in salaries) {
                  if (prop === propSalary) {            
                      let percentToInt = salaries[propSalary].tax.replace("%", "")
                      let salaryWithTax = Math.floor( salaries[propSalary].salary * 100 / (100 - percentToInt) )
                                    
                      let totalBudget = TOTAL_BUDGET + propSalary
                      res[totalBudget] = numByUseCase[prop] * salaryWithTax                                  

                      res[TOTAL_BUDGET_TEAM] = res[TOTAL_BUDGET_TEAM] + numByUseCase[prop] * salaries[propSalary].salary * 100 / (100 - percentToInt)                       
                   }
               }          
          }
          res[TOTAL_BUDGET_TEAM] = Math.floor(res[TOTAL_BUDGET_TEAM]) 

          return res

   } else {
    console.log('!!!The arguments of the function calculateTeamFinanceReport do not match the conditions of the task!!!')
   }

}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))









































