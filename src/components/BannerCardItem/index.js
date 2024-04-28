import './index.css'

const UserProfile = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  const container = {className}

  return (
    <li className={container}>
      <h1> {headerText} </h1>
      <p> {description} </p>
    </li>
  )
}

export default UserProfile
