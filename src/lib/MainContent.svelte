<script>
import Gallery from './Gallery.svelte'
let isOpen = false
function open () {
  isOpen = true
}
</script>

{#if !isOpen}
<div class="max-w-md">
<img class="rounded" src="https://pitucadomax.vercel.app/assets/pituca-pink.ea1802de.png" alt="logo da pituca">
</div>
<div class="text-center border-2 border-brand bg-white rounded font-nunito py-2"><h1 class="font-semibold text-xl">Pituca generator</h1><p class="text-lg">Obtenha diversas imagens exclusivas da pituca</p></div>
<button on:click="{open}" class="font-nunito font-semibold text-xl bg-green-500 p-2 rounded text-white">Acessar fotos</button>
{:else}
<Gallery />
{/if}
