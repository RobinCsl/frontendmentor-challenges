<script lang="ts">
  import UpOrDown from "./UpOrDown.svelte";
  type Data = Readonly<{
    handle: string;
    followerCount: string;
    followerLabel: string;
    numberFollowerToday: number;
    socialNetwork: "facebook" | "instagram" | "twitter" | "youtube";
  }>;
  export let data: Data;
</script>

<style lang="postcss">
  .followers {
    letter-spacing: 0.25rem;
  }

  /* Not "easy" to add gradient borders, so resort to a trick */
  /* https://css-tricks.com/gradient-borders-in-css/ */
  .container {
    @apply relative box-border text-center bg-card-background rounded cursor-pointer py-5 max-w-xs;
    background-clip: padding-box;
    border-top: solid 4px transparent;
  }
  .container:hover {
    @apply bg-card-background-hover;
  }

  .container:before {
    @apply absolute top-0 left-0 right-0;
    content: "";
    z-index: -1;
    border-radius: inherit;
    bottom: 4px;
    margin-top: -4px;
  }

  .container.facebook:before {
    @apply bg-facebook;
  }

  .container.twitter:before {
    @apply bg-twitter;
  }

  .container.youtube:before {
    @apply bg-youtube;
  }

  .container.instagram:before {
    background: linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
  }
</style>

<div class={'container ' + data.socialNetwork}>
  <p class="text-secondary font-bold text-xs mb-2">
    <img
      class="inline mr-1"
      src={`/icon-${data.socialNetwork}.svg`}
      alt={data.socialNetwork} />
    {data.handle}
  </p>
  <p class="text-primary text-5xl font-bold -mb-2">{data.followerCount}</p>
  <p class="followers mb-4 uppercase  text-secondary text-xs font-thin">
    {data.followerLabel}
  </p>
  <UpOrDown quantity={data.numberFollowerToday}>Today</UpOrDown>
</div>
