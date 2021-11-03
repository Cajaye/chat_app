<script>
  import supabase from "../lib/db.js";
  //decalre a variable to hold email
  let email;
  //decalre a variable to hold password
  let password;
  async function handleLogin() {
    const { error, user } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    email = "";
    password = "";
    return new Promise((resolve, reject) => {
      if (error) {
        let msg = alert(error);
        reject(msg);
      } else {
        resolve();
        //redirect to other page
      }
    });
  }
</script>

<form on:submit|preventDefault={handleLogin}>
  <div>
    <label class="block mb-2" for="email">Email</label>
    <input
      bind:value={email}
      class="bg-gray-200 rounded-md py-2 pl-6 md:pr-20 px-6 mb-6"
      type="email"
      name="email"
      id="email"
      placeholder="example@email.com"
    />
  </div>
  <div>
    <label class="block mb-2" for="password">Password</label>
    <input
      bind:value={password}
      class="bg-gray-200 rounded-md py-2 md:pr-20 px-6 mb-8"
      type="password"
      id="password"
      name="password"
      placeholder="Use a strong password"
    />
  </div>
  <div class="relative md:mx-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 absolute mt-2 md:ml-9 ml-9"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
      />
    </svg>
    <input
      class="bg-purple-btn hover:bg-purple-btnHover rounded-md py-2 pr-16 md:pr-32 pl-20 mb-6 cursor-pointer"
      type="submit"
      value="Crete account"
      name="Create account"
    />
  </div>
</form>
