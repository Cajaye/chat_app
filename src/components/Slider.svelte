<script>
  import assets1 from "../assets/placeholder1.jpg";
  import asset2 from "../assets/placeholder2.jpg";
  import asset3 from "../assets/placeholder3.jpg";
  import asset4 from "../assets/placeholder4.jpg";

  let objs = [
    //images and text to be displayed eveytime use clicks an arrow
    {
      text: "Some bad ass text",
      img: assets1,
    },
    {
      text: "Some lorem text",
      img: asset2,
    },
    {
      text: "Some more text",
      img: asset3,
    },
    {
      text: "Some more more text",
      img: asset4,
    },
  ];

  let value = 0; //inital value of image is set to 0

  let imgs = objs[value].img; //declaring imgs and textx here so that they are accessible in the functions
  let texts = objs[value].text;

  setInterval(function changeVal() {
    //function for adding to the value
    value++;
    if (value > objs.length - 1) {
      value = 0; //resets value if it's too much
    }
    imgs = objs[value].img;
    texts = objs[value].text;
  }, 4500);

  function decVal() {
    //function for dereasg the value
    value--;
    if (value < 0) {
      value = 3; //resets value f it's too small
    }
    imgs = objs[value].img;
    texts = objs[value].text;
  }
  function inVal() {
    //function for increasing the value
    value++;
    if (value > objs.length - 1) {
      value = 0; //resets value
    }
    imgs = objs[value].img;
    texts = objs[value].text;
  }
</script>

<section>
  <div class="bg-gray-50 w-full p-2 rounded-lg md:mx-auto shadow-md">
    <!--Box-->
    <div>
      <img
        id="slide"
        class="rounded-md object-cover w-screen mx-auto h-72"
        src={imgs}
        alt="placeholder img"
      />
    </div>
  </div>
  <div class="mt-5 text-center font-semibold">
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
        class="circle {value === 0 ? 'bg-purple-btnHover' : 'bg-gray-100'}"
      />
      <div
        class="circle {value === 1 ? 'bg-purple-btnHover' : 'bg-gray-100'}"
      />
      <div
        class="circle {value === 2 ? 'bg-purple-btnHover' : 'bg-gray-100'}"
      />
      <div
        class="circle {value === 3 ? 'bg-purple-btnHover' : 'bg-gray-100'}"
      />
    </div>
    <div>
      <svg
        on:click={inVal}
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
