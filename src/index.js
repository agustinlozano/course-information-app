import React from 'react';
import ReactDOM from 'react-dom';

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

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return (
    <div>
      {
        courses.map(
          course => <Course key={course.id} course={course} />
        )
      }
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));