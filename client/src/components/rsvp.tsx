import { useState } from 'react'
import { guestApi } from 'src/services/guest'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Pagination } from '@thinknimble/tn-models'
import { Input } from './input'
export default function RSVP() {
  const pagination = new Pagination({ page: 1, size: 25 })
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const { mutate, isLoading } = useMutation({
    mutationFn: guestApi.csc.update,
    onSuccess: (data: any) => {
      console.log(data)
    },
    onError: (e: any) => {
      console.log(e)
    },
  })
  const { data: guest, loading } = useQuery({
    queryKey: ['guests', firstName, lastName, pagination],
    queryFn: async () => {
      const content = await guestApi.csc.list({
        filters: { firstName: 'Jennifer', lastName: 'De Phillips' },
        input: { pagination },
      })
      return content
    },
  })

  console.log(guest)

  return (
    <div id="rsvp" className="my-3  ">
      <div className="font-abel text-3xl">RSVP</div>
      <form>
        <Input onChange={(e) => setFirstName(e.target.value)} id="firstName" />
        <Input onChange={(e) => setLastName(e.target.value)} id="lastName" />
      </form>
    </div>
  )
}
