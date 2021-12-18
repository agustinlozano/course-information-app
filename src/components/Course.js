const Header = ({ name }) =>
  <h1>{name}</h1>

const Part = ({ name, exercises }) =>
  <p>{name} {exercises}</p>

/*  Este componente renderiza "partes" las
 *  cuales vienen a traves de un array de 
 *  objetos en las props.
 *
 *  Lo interesante es que al utilizar el
 *  metodo map, podemos renderizar tantas
 *  partes como queramos sin tener que cambiar
 *  el codigo.
 */
const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map(part =>
          <Part
            key={part.id}
            name={part.name}
            exercises={part.exercises}
          />
        )
      }
    </div>
  );
}

/*  Este componente realiza el calculo total
 *  de ejercicios para todas las partes.
 *  
 *  Este calculo se realiza a partir de la
 *  propiedad .excercies de cada parte, y el
 *  metodo utilizado para ello es reduce.
 * 
 *  arr.reduce(callback, valorInicial)
 */
const Total = ({ parts }) => {
  const counter = (count, current) => count + current.exercises;
  const total = parts.reduce(counter, 0);

  return <strong>Number of exercises {total}</strong>
}

export const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}
