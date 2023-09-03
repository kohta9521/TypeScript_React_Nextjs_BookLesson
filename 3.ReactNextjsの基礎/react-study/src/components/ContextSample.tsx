import React from 'react';

const TitleContext = React.createContext(' ');

const Title = () => {
  return (
    // Consumerを使用する
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

const Page = () => {
  const title = 'React Book'

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page;