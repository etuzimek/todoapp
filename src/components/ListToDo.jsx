export const ListToDo = ({ todo, remove, handleDone}) => {
  return (
    <div>
      <ul>
        {todo && todo.map(el => (
          <li key={el.id}>
            {el.completed ? <del>{el.title}</del> : el.title}
            <button onClick={handleDone(el.id)}>done</button>
            <button onClick={remove(el.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}