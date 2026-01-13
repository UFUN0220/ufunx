'use client'
import React from 'react'

const BackgroundImage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="home-background" style={{ marginTop: '-50px' }}>
      {children}
    </div>
  )
}

export default BackgroundImage
