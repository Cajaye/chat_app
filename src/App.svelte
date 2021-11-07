<script>
  import supabase from "./lib/db.js";
  import { readable } from "svelte/store";
  import SignUp from "./components/SignUp.svelte";
  import Chat from "./components/Chat.svelte";
  import Welcome from "./components/Welcome.svelte";
  import { Router, Route } from "svelte-navigator";
</script>

<Router>
  <main>
    <Route>
      <SignUp />
    </Route>
    <Route path="chat">
      <Chat />
    </Route>
  </main>
</Router>

<style>
</style>
