<script>
import imgsUrl from "../imgsUrl.js"

let index = 0
$: src = imgsUrl[index]

function newPhoto() {
  if (index < imgsUrl.length - 1) {
    index++
  } else {
    index = 0
  }
}
</script>

<div class="w-full max-w-sm relative grid place-items-center rounded max-h-[67vh] overflow-hidden">
  <img class="w-full" src="{src}" alt="pituca">
</div>
<button on:click="{newPhoto}" class="font-nunito font-semibold text-xl bg-green-500 p-2 rounded text-white">Outra foto</button>