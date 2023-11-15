export const Titulo = (children) => {
  // {titulo ='Titulo' , subtitulo = 'Subtitulo' , saludo} ) => {
console.log (children) 
  return (
    <div style={{border: '3px solid green'}}>
      {/*<h1 className='h1'>{titulo}</h1>
      <h2 className='h2'>{subtitulo}</h2>
      <button onClick={saludo}>Saludar</button>*/}
      {/* saludo() */}
      {children}
    </div>
  )
}

export default Titulo