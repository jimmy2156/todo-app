



export default function Profile({ products }) {
  console.log(products)
   const { company, dates, duties, title } = products
   
   
    return (

    <div className='w-[33rem]'>
  <h1>{title}</h1>
  <h2>{company}</h2>
  <h3>{dates}</h3>
  <p>{duties.map((duty) => {
    return <div>{duty}</div>
  })}</p>

    </div>





        )}