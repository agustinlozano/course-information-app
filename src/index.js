import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ name }) =>
  <h1>{name}</h1>

const Part = ({name, exercises}) =>
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
        parts.map(part => { 
          return (
            <Part
              key={part.id}
              name={part.name}
              exercises={part.exercises}
            />
          );
        })
      }
    </div>
  );
}

// We don't need the sum of the excercises at this point
// const Total = ({ parts }) =>
//   <p>
//     Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
//   </p>

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      {// We don't need the sum of the excercises at this point
      /* <Total parts={course.parts} /> */}
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Agustin is a coder guy',
        exercises: 27,
        id: 4
      },
    ],
  } 

  return (
    <Course course={course} />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));