const Hello = () => {
  const onClick = () => {
    alert('Hello!')
  }
  const text = 'Hello World!'

  return (
    <div onClick={onClick}>
      { text }
    </div>
  )
}

export default Hello;