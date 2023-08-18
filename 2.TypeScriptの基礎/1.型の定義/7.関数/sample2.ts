function sayHello2( name: string, greeting?: string):string {
  return `${greeting} ${name}`
}

sayHello('Takuya')
// sayHello('Takuya', 'Hello')