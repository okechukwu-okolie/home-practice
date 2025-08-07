import React from 'react'
import PropTypes from 'prop-types'

export default function Student({name,age,level}) {
  return (
    <div>
        <p>
          name:{name}
        </p>
        <p>Age:{age}</p>
        <p>Class:{level}</p>
        <p>married:{isMarried ? "yes":"no"}</p>
    </div>
  )
}
Student.propTypes = {

}
