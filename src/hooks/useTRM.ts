import { useEffect, useState } from 'react'

interface TRMResult {
  trm: number | null
  loading: boolean
  error: boolean
}

const CACHE_KEY = 'ihomotic_trm'
const API_URL = 'https://www.datos.gov.co/resource/32sa-8pi3.json?$limit=1&$order=vigenciadesde DESC'

export function useTRM(): TRMResult {
  const [trm, setTrm] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const cached = sessionStorage.getItem(CACHE_KEY)
    if (cached) {
      setTrm(Number(cached))
      setLoading(false)
      return
    }

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const valor = Number(data[0]?.valor)
        if (!isNaN(valor) && valor > 0) {
          sessionStorage.setItem(CACHE_KEY, String(valor))
          setTrm(valor)
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return { trm, loading, error }
}
