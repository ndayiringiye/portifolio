import { useState } from 'react'

export function useToast() {
  const toast = ({ title, description }) => {
    const toast = require('react-hot-toast').toast
    toast.success(`${title}: ${description}`)
  }

  return { toast }
}