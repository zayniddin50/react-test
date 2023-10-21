import styles from "./app.module.scss"

const App = () => {
  const title = "hello world"
  const user = {
    name: "Rayn",
    age: 14,
  }
  return (
    <div className={styles.app}>
      <b>{title}</b>
    </div>
  )
}
export default App
