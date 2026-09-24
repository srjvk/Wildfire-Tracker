import Spinner from './spinner.gif'

export const Loader = () => {
  return (
    <div className='loader'><img src={Spinner} alt="Loading" />
    <h1>Fetching Data</h1></div>
  )
}
