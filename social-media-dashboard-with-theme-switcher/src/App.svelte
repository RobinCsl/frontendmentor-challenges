<script lang="ts">
  import SocialCard from "./SocialCard.svelte";
  import Card from "./Card.svelte";
  import Toggle from "./Toggle.svelte";
</script>

<style global lang="postcss">
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  body {
    font-family: "Inter", sans-serif;
    @apply bg-background;
  }

  @tailwind utilities;
</style>

<main class="px-12 py-8 max-w-6xl m-auto">
  <header class="flex flex-col md:flex-row justify-between items-start mb-10">
    <div
      class="w-full md:w-auto pb-6 mb-4 border-b border-secondary md:border-b-0 md:pb-0 md:mb-0">
      <h1 class="text-primary font-bold text-2xl tracking-tight">
        Social Media Dashboard
      </h1>
      <p class="text-secondary font-bold text-xs">Total Followers: 23,004</p>
    </div>
    <div
      class="w-full md:w-auto flex flex-row justify-between md:justify-start items-center text-secondary hover:text-primary">
      <p class="text-xs font-bold mr-4">Dark Mode</p>
      <Toggle />
    </div>
  </header>

  <article
    class="grid grid-cols-1 place-items-center md:grid-cols-4 gap-5 mb-10">
    <SocialCard
      data={{ handle: '@nathanf', followerCount: '1987', followerLabel: 'Followers', numberFollowerToday: 12, socialNetwork: 'facebook' }} />

    <SocialCard
      data={{ handle: '@nathanf', followerCount: '1044', followerLabel: 'Followers', numberFollowerToday: 99, socialNetwork: 'twitter' }} />
    <SocialCard
      data={{ handle: '@realnathanf', followerCount: '11k', followerLabel: 'Followers', numberFollowerToday: 1099, socialNetwork: 'instagram' }} />

    <SocialCard
      data={{ handle: 'Nathan F.', followerCount: '8239', followerLabel: 'Subscribers', numberFollowerToday: -144, socialNetwork: 'youtube' }} />
  </article>

  <article>
    <h2 class="text-primary text-xl font-bold mb-5">Overview - Today</h2>
    <div class="grid grid-cols-1 place-items-center md:grid-cols-4 gap-5">
      <Card
        data={{ label: 'Page Views', metric: '87', variationInPercent: 3, socialNetwork: 'facebook' }} />

      <Card
        data={{ label: 'Likes', metric: '52', variationInPercent: -2, socialNetwork: 'facebook' }} />

      <Card
        data={{ label: 'Likes', metric: '5462', variationInPercent: 2257, socialNetwork: 'instagram' }} />

      <Card
        data={{ label: 'Profile Views', metric: '52k', variationInPercent: 1375, socialNetwork: 'instagram' }} />

      <Card
        data={{ label: 'Retweets', metric: '117', variationInPercent: 303, socialNetwork: 'twitter' }} />

      <Card
        data={{ label: 'Likes', metric: '507', variationInPercent: 553, socialNetwork: 'twitter' }} />

      <Card
        data={{ label: 'Likes', metric: '107', variationInPercent: -19, socialNetwork: 'youtube' }} />

      <Card
        data={{ label: 'Total Views', metric: '1407', variationInPercent: -12, socialNetwork: 'youtube' }} />
    </div>
  </article>
</main>
