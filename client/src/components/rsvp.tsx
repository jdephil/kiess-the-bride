import { useState } from 'react'
import { guestApi } from 'src/services/guest'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Pagination } from '@thinknimble/tn-models'
import { Input } from './input'
import { Button } from './button'
export default function RSVP() {
  const pagination = new Pagination({ page: 1, size: 25 })
  const [fullName, setFullName] = useState('')

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
    queryKey: ['guests', fullName, pagination],

    queryFn: async () => {
      // const guest

      const content = await guestApi.csc.list({
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

  return (
    <div id="rsvp" className="my-3  ">
      <div className="font-abel text-3xl">RSVP</div>
      <form>
        <Input onChange={(e) => setFullName(e.target.value)} id="firstName" />
        <Button>Submit</Button>
      </form>
    </div>
  )
}
