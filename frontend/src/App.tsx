import { Counter } from './Counter'
import './styles.css';
export const App = () => {
  return (
    <>
      <h1>React  Template {process.env.NODE_ENV} {process.env.name}</h1>
      <Counter />
    </>
  )
}
