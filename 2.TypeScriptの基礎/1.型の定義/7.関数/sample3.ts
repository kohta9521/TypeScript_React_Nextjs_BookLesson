function printName2( firstName: string, formatter: ( name: string ) => string) {
  console.log(formatter(firstName))
}

function formatName( name: string): string {
  return `${name} san`
}

printName2('Takuya', formatName) // takuya san