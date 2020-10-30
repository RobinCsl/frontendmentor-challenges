<script lang="ts">
  import UpOrDown from "./UpOrDown.svelte";
  type Data = Readonly<{
    label: string;
    metric: string;
    variationInPercent: number;
    socialNetwork: "facebook" | "instagram" | "twitter" | "youtube";
  }>;
  export let data: Data;
</script>

<article
  class="w-full bg-card-background hover:bg-card-background-hover cursor-pointer rounded py-6 px-5 grid grid-cols-2 grid-rows-2">
  <header>
    <h3 class="font-bold text-secondary text-xs">{data.label}</h3>
  </header>
  <img
    class="justify-self-end"
    src={`/icon-${data.socialNetwork}.svg`}
    alt={data.socialNetwork} />
  <p class="font-bold text-primary text-2xl">{data.metric}</p>
  <UpOrDown
    className="justify-self-end self-end"
    quantity={data.variationInPercent}>
    %
  </UpOrDown>
</article>
