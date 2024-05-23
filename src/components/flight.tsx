import { FC } from 'react'

interface flightProps {
  flightNumber : string
}

const flight: FC<flightProps> = ({flightNumber}) => {
    return <div>{flightNumber}</div>
}

export default flight