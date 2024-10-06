'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = (props: AnimatedCounterProps) => {
  return (
    <div className='w-full'>
      <CountUp
        decimal=','
        prefix='$'
        decimals={2}
        end={props.amount}
      />
    </div>
  )
}

export default AnimatedCounter
