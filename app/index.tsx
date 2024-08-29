import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { Card } from '@/components/Card'

const Contador = () => {
  return (
    <View
      style={{
        paddingHorizontal: 40,
        display: 'flex',
        gap: 20,
        justifyContent: 'center',
        height: '100%',
      }}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <Card label={'Tarjeta ' + (index + 1)} key={index} />
      ))}
    </View>
  )
}

export default Contador
