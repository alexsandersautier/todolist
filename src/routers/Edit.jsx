import React from 'react'
import Section from '../components/Section/Section'
import { useParams } from 'react-router-dom'
const Edit = ({data}) => {
  const taskId = useParams()
  const taskSelected = data.find((task) => task.id === parseInt(taskId.id))
  return (
    <div>

        <Section action='edit' id={taskId} description={taskSelected.description} />
    </div>
  )
}

export default Edit