import { useRef } from 'react';
import classes from './newsletter-registration.module.css';
import StateContext from '@/stateContext/StateContext';

function NewsletterRegistration() {

  const { setStatus, setMessage, setTitle } = StateContext()

  const emailInputRef = useRef()

  function registrationHandler(event) {

    event.preventDefault();

    const enteredEmail = emailInputRef.current.value  

    setStatus('pending')
    setMessage('Registering')
    setTitle('Pending!')

    fetch('api/newsletter', {

      method: 'POST',
      body: JSON.stringify({email: enteredEmail}),
      headers: {
        'content-type': 'application/json'
      }


    })
    .then(response => {
      if(response.ok){
        return response.json()
      }

      return response.json().then(data => {
        throw new Error(data.message || 'somethimg went wrong')
      })
    })
    .then(data => {
      setStatus('success')
      setMessage('Successfully registered')
      setTitle('Success!')
    })
    .catch((error) => {
      setStatus('error')
      setMessage('Something went wrong!')
      setTitle('Error!')
    })

  }

  return (

    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;


