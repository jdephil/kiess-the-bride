import { useState } from 'react'
import { guestApi } from 'src/services/guest'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Pagination } from '@thinknimble/tn-models'
import { Input } from './input'
import { Button } from './button'
import { useNavigate } from 'react-router-dom'

export default function RSVP() {
  const pagination = new Pagination({ page: 1, size: 25 })
  const [fullName, setFullName] = useState('')
  const navigate = useNavigate()

  const { data: guest, loading } = useQuery({
    queryKey: ['guests', fullName, pagination],
    enabled: Boolean(fullName),
    queryFn: async () => {
      // const guest

      const content = await guestApi.csc.findGuest({
        input: { pagination },
        filters: { fullName },
      })
      return content
    },

    onSuccess: (data) => {
      console.log(data)
    },
    onError: (e) => {
      console.log(e)
    },
  })

  console.log(guest)
  function searchName() {
    navigate('/rsvp', { state: { guest } })
  }
  return (
    <div id="rsvp" className="pt-36">
      <div className="font-abel  text-4xl">RSVP</div>
      <form onSubmit={searchName}>
        <Input onChange={(e) => setFullName(e.target.value)} id="firstName" />
        <Button type="submit">Search</Button>
      </form>
    </div>
  )
}
