/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "www.google.co.uk"],
  },
  env: {
    API_KEY: "AIzaSyBwv6ApZe3UvZ1GOQx5AalutUxfYdPJTio",
    CONTEXT_KEY: "d27d3f0ba77724212",
  },
};

// API key -> https://developers.google.com/custom-search/v1/using_rest
// context key -> https://cse.google.com/cse/create/new

{
  /* <script async src="https://cse.google.com/cse.js?cx=d27d3f0ba77724212">
</script>
<div class="gcse-search"></div> */
}
