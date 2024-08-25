<script lang="ts">
  import { remult } from 'remult'

  import { route } from '$lib/ROUTES'
  import SignIn from '$lib/ui/SignIn.svelte'
  import SignOut from '$lib/ui/SignOut.svelte'

  import type { LayoutData } from './$types'

  export let data: LayoutData
  $: remult.user = data.user
</script>

<svelte:head>
  <title>firstly-demo</title>
  <link
    rel="icon"
    href="https://raw.githubusercontent.com/jycouet/firstly/main/assets/firstly.png"
  />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" />
</svelte:head>

<h1>firstly-demo</h1>

{#if remult.authenticated()}
  <div style="float:right;">
    <SignOut></SignOut>
  </div>
  <span>{remult.user?.name} ({remult.user?.roles})<br /><br /></span>
{:else}
  <SignIn demo="Ermin"></SignIn>
  <SignIn demo="JYC"></SignIn>
  <SignIn demo="Noam"></SignIn>
  <br />
  <SignIn ffLink></SignIn>
  <SignIn oauth="github"></SignIn>
{/if}

<hr />

<slot />

<hr />

<div style="float: right; text-align: right;">
  <a href={route('remult_admin')} target="_blank">🚀 admin</a>
  <p style="font-size: small;">
    <i>Login as <b>JYC</b> to get admin rights ☝️</i>
  </p>
</div>
<a href={route('github', { owner: 'jycouet', repo: 'firstly' })} target="_blank"> ⭐️ firstly </a>
|
<a href={route('github', { owner: 'remult', repo: 'remult' })} target="_blank">⭐️ remult</a>
