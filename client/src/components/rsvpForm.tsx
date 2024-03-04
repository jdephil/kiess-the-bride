import { Input } from './input'
export function RsvpForm(props: any) {
  const handleChange = (event: any) => {
    const { name, value } = event.target
    props.setFormValues({ ...props.formValues, [name]: value })
    console.log(props.formValues)
  }
  return (
    <div>
      <p>Name</p>
      <Input
        disabled
        name="fullName"
        placeholder={props.guest.fullName}
        value={props.guest.fullName}
      />
      <Input
        onChange={handleChange}
        name="email"
        placeholder="Email"
        value={props.formValues.email}
      />

      <p>Which events will you be attending?</p>
      <p>Do you have any dietary restrictions?</p>
      <Input
        onChange={handleChange}
        name="dietaryRestrictions"
        placeholder="dietary restrictions"
      />
      <p></p>
    </div>
  )
}
