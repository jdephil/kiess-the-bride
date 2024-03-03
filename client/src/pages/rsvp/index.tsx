import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Button } from 'src/components/button'
import { useMutation, useQuery } from '@tanstack/react-query'
import moon from 'src/assets/images/moon.png'
import { Pagination } from '@thinknimble/tn-models'
import { guestApi, guestShape, guestUpdateShape } from 'src/services/guest'
import { FormEvent, useState } from 'react'
import { RsvpForm } from 'src/components/rsvpForm'
import { Guest } from 'src/services/guest'
export const Rsvp = () => {
  const { state } = useLocation()
  const pagination = new Pagination({ page: 1, size: 25 })
  const currentGuest = state?.guest.results[0]
  const familyId = state?.guest.results[0].family
  console.log(currentGuest)
  const [formValues, setFormValues] = useState({
    id: currentGuest.id,
    email: '',
    attending: false,
    dietaryRestrictions: '',
    events: [''],
  })
  const { data: family, loading } = useQuery({
    queryKey: ['guests', familyId, pagination],
    enabled: Boolean(familyId),
    queryFn: async () => {
      const content = await guestApi.csc.findFamily({
        input: { pagination },
        filters: { family: familyId },
      })
      return content
    },
  })
  console.log(formValues)

  const { mutate, isLoading } = useMutation({
    mutationFn: guestApi.csc.update,

    onSuccess: (data: any) => {
      console.log(data)
    },
    onError: (e: any) => {
      console.log(e)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inside handle', formValues)
    formValues.id = currentGuest.id
    mutate(formValues)
  }
  function handleSetState(data: any) {
    setFormValues(data)
  }
  return (
    <div className="flex flex-col  justify-center">
      <div className="relative min-h-screen bg-wedding-green">
        <div className="fixed top-5 z-10 ml-10 flex w-28">
          <img className="w-36" src={moon} />
          <Button extendClassName="h-10 self-center align-center">Back</Button>
        </div>
        <main className="main grid-rows-detailsMain mt-10 grid grid-cols-3  font-dmSans text-white">
          <div className="content row-start-0 col-start-2 row-end-1 min-w-0">
            <div className="text-center text-white">
              <p className="mb-5 font-abel text-6xl">Chris & Jen</p>
              <p>Meet us in the mountains</p>
            </div>
            <div className="mt-20 text-center ">
              <header className="font-abel text-3xl">RSVP</header>
              <p>Who are you RSVPing for?</p>
              {family?.results.map((guest, index) => {
                return (
                  <Link key={index} to={`${guest.id}`} state={guest}>
                    {guest.fullName}
                  </Link>
                )
              })}
              <form onSubmit={handleSubmit}>
                <RsvpForm
                  guest={currentGuest}
                  formValues={formValues}
                  setFormValues={handleSetState}
                />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
