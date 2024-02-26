import { Input } from './input'
export function RsvpForm(props) {
  return (
    <div>
      <p>Name</p>
      <Input
        placeholder={state.guest.results[0].fullName}
        value={state.guest.results[0].fullName}
      />
      <p>Which events will you be attending?</p>
      <p>Do you have any dietary restrictions?</p>
      <Input placeholder="dietary restrictions" />
      <p></p>
    </div>
  )
}
