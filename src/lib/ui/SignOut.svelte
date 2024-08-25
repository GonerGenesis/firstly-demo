<script lang="ts">
  import { isError } from 'firstly'
  import { Auth } from 'firstly/auth/client'

  import { invalidateAll } from '$app/navigation'

  const logout = async () => {
    try {
      await Auth.signOut()
      invalidateAll()
    } catch (error) {
      if (isError(error)) {
        alert(error.message)
      }
    }
  }
</script>

<button on:click={logout}>Logout</button>
