<script>
  import supabase from "../lib/db.js";
  import assets1 from "../assets/placeholder1.jpg";
  import asset2 from "../assets/placeholder2.jpg";
  import asset3 from "../assets/placeholder3.jpg";
  import asset4 from "../assets/placeholder4.jpg";

  let objs = [
    //images and text to be displayed eveytime use clicks an arrow
    {
      text: "some bad ass text",
      img: assets1,
    },
    {
      text: "some lorem text",
      img: asset2,
    },
    {
      text: "some more text",
      img: asset3,
    },
    {
      text: "some more more text",
      img: asset4,
    },
  ];

  let imgs; //declaring imgs and textx here so that they are accessible in the functions
  let texts;

  let value = 0; //inital value of image is set to 0
  function changeVal() {
    //function for adding to the value
    value++;
    if (value > objs.length - 1) {
      value = 0; //resets value if it's too much
    }
    imgs = objs[value].img;
    texts = objs[value].text;
  }

  function decVal() {
    //function for dereasg the value
    value--;
    if (value < 0) {
      value = 0; //resets value f it's too small
    }
    imgs = objs[value].img;
    texts = objs[value].text;
  }

  //To do connect to supabase remember to write out the steps for everything to not get stuck
</script>

<section class="m-7">
  <div class="flex justify-between items-center">
    <figure class="mb-6">
      <svg
        width="116"
        height="85"
        viewBox="0 0 116 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="85"
          width="77"
          height="21"
          transform="rotate(-90 10 85)"
          fill="#1BE86D"
          fill-opacity="0.8"
        />
        <rect
          width="77"
          height="21"
          transform="matrix(-9.44166e-08 -1 -1 2.02368e-08 21 77)"
          fill="#B78EDD"
          fill-opacity="0.94"
        />
        <path
          d="M43.5234 55V37.9375H49.5C51.5703 37.9375 53.1406 38.3359 54.2109 39.1328C55.2812 39.9219 55.8164 41.082 55.8164 42.6133C55.8164 43.4492 55.6016 44.1875 55.1719 44.8281C54.7422 45.4609 54.1445 45.9258 53.3789 46.2227C54.2539 46.4414 54.9414 46.8828 55.4414 47.5469C55.9492 48.2109 56.2031 49.0234 56.2031 49.9844C56.2031 51.625 55.6797 52.8672 54.6328 53.7109C53.5859 54.5547 52.0938 54.9844 50.1562 55H43.5234ZM47.0391 47.5703V52.1758H50.0508C50.8789 52.1758 51.5234 51.9805 51.9844 51.5898C52.4531 51.1914 52.6875 50.6445 52.6875 49.9492C52.6875 48.3867 51.8789 47.5938 50.2617 47.5703H47.0391ZM47.0391 45.0859H49.6406C51.4141 45.0547 52.3008 44.3477 52.3008 42.9648C52.3008 42.1914 52.0742 41.6367 51.6211 41.3008C51.1758 40.957 50.4688 40.7852 49.5 40.7852H47.0391V45.0859ZM63.3272 52.1758H70.792V55H59.8116V37.9375H63.3272V52.1758ZM86.4122 37.9375V49.1758C86.4122 51.043 85.8263 52.5195 84.6544 53.6055C83.4903 54.6914 81.8966 55.2344 79.8731 55.2344C77.8809 55.2344 76.2989 54.707 75.127 53.6523C73.9552 52.5977 73.3575 51.1484 73.3341 49.3047V37.9375H76.8497V49.1992C76.8497 50.3164 77.1153 51.1328 77.6466 51.6484C78.1856 52.1562 78.9278 52.4102 79.8731 52.4102C81.8497 52.4102 82.8536 51.3711 82.8848 49.293V37.9375H86.4122ZM93.9933 55H90.4777V37.9375H93.9933V55ZM111.617 49.3164C111.485 51.1523 110.805 52.5977 109.578 53.6523C108.36 54.707 106.75 55.2344 104.75 55.2344C102.563 55.2344 100.84 54.5 99.5822 53.0312C98.3322 51.5547 97.7072 49.5312 97.7072 46.9609V45.918C97.7072 44.2773 97.9963 42.832 98.5744 41.582C99.1525 40.332 99.9767 39.375 101.047 38.7109C102.125 38.0391 103.375 37.7031 104.797 37.7031C106.766 37.7031 108.352 38.2305 109.555 39.2852C110.758 40.3398 111.453 41.8203 111.641 43.7266H108.125C108.039 42.625 107.731 41.8281 107.199 41.3359C106.676 40.8359 105.875 40.5859 104.797 40.5859C103.625 40.5859 102.746 41.0078 102.16 41.8516C101.582 42.6875 101.285 43.9883 101.27 45.7539V47.043C101.27 48.8867 101.547 50.2344 102.102 51.0859C102.664 51.9375 103.547 52.3633 104.75 52.3633C105.836 52.3633 106.645 52.1172 107.176 51.625C107.715 51.125 108.024 50.3555 108.102 49.3164H111.617Z"
          fill="black"
          fill-opacity="0.92"
        />
        <circle
          cx="95.5"
          cy="28.5"
          r="4.5"
          fill="#B78EDD"
          fill-opacity="0.94"
        />
      </svg>
    </figure>
    <article class="text-sm md:text-base ml-2">
      <p class="inline">Have an account?</p>
      <button class="bg-purple-btn px-2 hover:bg-purple-btnHover rounded-md"
        >Log in</button
      >
    </article>
  </div>
  <article class="grid md:grid-cols-2">
    <!--First container start here-->
    <section class="order-last md:order-first mx-auto md:mx-0">
      <header class="font-semibold text-base tracking-wide mb-6">
        <h1>Sign up to <span>BLUIC</span></h1>
      </header>
      <div class="">
        <button
          class="bg-purple-btn py-2 rounded-md text-center md:pl-6 pl-2 pr-6 md:pr-16 hover:bg-purple-btnHover mb-6"
          ><span>
            <svg
              class="h-5 inline-block"
              width="71"
              height="55"
              viewBox="0 0 71 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                  fill="#000000"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="71" height="55" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>Sign in with discord</button
        >
      </div>
      <div>
        <p class="mb-6">Or sign in with your email</p>
      </div>
      <div>
        <form action="sign-in">
          <div>
            <label class="block mb-2" for="email">Email</label>
            <input
              class="bg-gray-200 rounded-md py-2 pl-6 md:pr-20 px-6 mb-6"
              type="email"
              id="email"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label class="block mb-2" for="password">Password</label>
            <input
              class="bg-gray-200 rounded-md py-2 md:pr-20 px-6 mb-8"
              type="password"
              id="password"
              placeholder="Use a strong password"
            />
          </div>
          <button
            class="bg-purple-btn rounded-md hover:bg-purple-btnHover py-2 px-10 md:pr-24 mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline mr-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
              />
            </svg><span class="mr-5">Create account</span></button
          >
        </form>
      </div>
      <div>
        <a href="placeholder">
          <p class="underline font-semibold">Terms and conditions</p>
        </a>
      </div>
    </section>
    <!--Other section container starts here-->
    <section>
      <div class="bg-gray-50 w-full p-2 rounded-lg md:mx-auto shadow-md">
        <!--Box-->
        <div>
          <img
            id="slide"
            class="rounded-md object-contain w-screen mx-auto h-72"
            src={imgs}
            alt="placeholder img"
          />
        </div>
      </div>
      <div class="mt-5 text-center">
        <p>{texts}</p>
      </div>
      <div class="flex space-x-10 items-center justify-center my-7 lg:mb-0">
        <div>
          <svg
            on:click={decVal}
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </div>
        <div>
          <div
            class="w-3 h-3 rounded-full inline-block ml-1 md:ml-3 bg-purple-btnHover"
          />
          <div class="circle" />
          <div class="circle" />
          <div class="circle" />
        </div>
        <div on:click={changeVal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
        <div />
      </div>
      <!--Ends here-->
    </section>
  </article>
</section>
