<script lang="ts">
    export let quantity: number;
    export let className: string = '';
</script>

<p class={`${className} font-bold text-xs ${quantity > 0 ? "text-lime-green" : "text-bright-red"}`}>
    <img class="inline" alt={quantity > 0 ? "+" : "-"} src={quantity > 0 ? "/icon-up.svg" : "/icon-down.svg"} />
    {Math.abs(quantity)}
    <slot />
</p>