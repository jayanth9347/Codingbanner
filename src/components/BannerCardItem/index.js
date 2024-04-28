import '/index.css'

const UserProfile = props => {
  const {headerText, description, className} = props
  const container = {className}

  return (
    <div className={container}>
      <h1> {headerText} </h1>
      <p> {description} </p>
    </div>
  )
}

export default UserProfile
