import React from 'react'
import Section from '../components/Section/Section'
import { useParams } from 'react-router-dom'

const Delete = ({action, id, data}) => {
  const taskId = useParams()
  const taskSelected = data.find((task) => task.id === parseInt(taskId.id))
  return (
    <div>
      
        <Section action='delet' id={taskId} description={taskSelected.description}/>
    </div>
  )
}

export default Delete