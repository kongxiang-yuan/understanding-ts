/**
 * @declaration Core Types
 * class
 */
abstract class Department {
  static faisclyear: number = 2022
  protected employees: string[] = []
  constructor(protected readonly uid: string, private name: string) {
    // this.uid = uid
    // this.name = name
  }

  static cerateEmployee(name: string) {
    return { name }
  }

  abstract describe(this: Department): void

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeinformation() {
    console.log(
      `employees: ${this.employees}: length: ${this.employees.length}`
    )
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
  }

  describe() {
    console.log('IT Department id :' + this.uid)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  get GetterLastReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found.')
  }

  set SetLastReport(value: string) {
    if (!value) {
      throw new Error('Pleae pass in a vaid value! ')
    }
    this.addReport(value)
  }

  static getInstance(id: string, reports: string[]) {
    if (AccountingDepartment.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment(id, reports)
    return this.instance
  }

  describe() {
    console.log('accounting Department id :' + this.uid)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  /**
   * @使用自己的添加员工的方法
   * 1. 添加 公有(public) 或 去除私有(private)属性
   * 2. 添加 protected 属性
   */
  addEmployee(name: string) {
    if (name === 'java') {
      return
    }

    this.employees.push(name) // 属性“employees”为私有属性，只能在类“Department”中访问 ts
  }

  pintReport() {
    console.log(`reports: ${this.reports}`)
  }
}

// const accounting = new Department('002', 'kongxiang-yuan')
// accounting.describe()
// accounting.addEmployee('运维人员')
// accounting.employees[4] = 'react.js' // 属性“employees”为私有属性，只能在类“Department”中访问 ts
// accounting.printEmployeeinformation()
// console.log(accounting)
// console.log('----------')

// const it = new ITDepartment('001', ['前端'])
// it.describe()
// it.addEmployee('Vue团队')
// it.addEmployee('React团队')
// it.addEmployee('Node团队')
// it.printEmployeeinformation()
// console.log(it)
// console.log('----------')

// const accounting1 = new AccountingDepartment('003', [''])
const accounting1 = AccountingDepartment.getInstance('003', [''])
const accounting2 = AccountingDepartment.getInstance('003Copy', [''])
// accounting1.describe()
// accounting1.SetLastReport = '123'
// accounting1.addReport('Something went wrong...')
// accounting1.pintReport()
// accounting1.addEmployee('javaWeb')
// accounting1.addEmployee('java')
// accounting1.addEmployee('UI团队')
// accounting1.printEmployeeinformation()
// console.log(accounting1.GetterLastReport)
console.log(accounting1, accounting2, accounting1 === accounting2)

// console.log('--------')
// const employees = Department.cerateEmployee('kongxiangyuan')
// console.log(employees)
// console.log(Department.faisclyear)
