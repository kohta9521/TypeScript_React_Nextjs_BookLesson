// オプショナルプロパティ
function printName(obj: { firstName: string; lastName?: string }) {
}

printName({ firstName: 'Tanaka'})
printName({ firstName: "kohta", lastName: 'kohta' })