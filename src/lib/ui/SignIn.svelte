<script lang="ts">
  import { isError } from 'firstly'
  import { Auth } from 'firstly/auth/client'

  import { goto, invalidateAll } from '$app/navigation'

  import { route } from '../ROUTES'

  // Examples of signin modes
  export let demo = ''
  export let ffLink = false
  export let oauth: 'github' | undefined = undefined

  const signinDemo = async (identif: string) => {
    try {
      await Auth.signInDemo(identif)
      invalidateAll()
    } catch (error) {
      if (isError(error)) {
        // TODO: You will probably not leave this alert in production
        alert(error.message)
      }
    }
  }

  async function signinOAuth(provider: 'github') {
    try {
      window.location.href = await Auth.signInOAuthGetUrl({
        provider,
        redirect: window.location.pathname,
      })
    } catch (error) {
      if (isError(error)) {
        // TODO: You will probably not leave this alert in production
        alert(error.message)
      }
    }
  }
</script>

{#if demo}
  <button on:click={() => signinDemo(demo)}>Login as {demo}</button>
{:else if ffLink}
  <button on:click={() => goto(route('firstly_sign_in'))}>Login with Firstly</button>
{:else if oauth}
  <button on:click={() => signinOAuth(oauth)}>Login With {oauth}</button>
{/if}
