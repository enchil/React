import PropTypes from 'prop-types'
function Child({ firstName, lastName }) {
  return (
    <>
      <h1>
        {firstName},{lastName}
      </h1>
    </>
  )
}

Child.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

Child.defaultProps = {
  firstName: 'EnEn',
  lastName: 'Liang',
}

export default Child
