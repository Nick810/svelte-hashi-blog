<script lang="ts">
  import * as config from '$lib/config'
</script>

<nav class="px-8 md:flex space-between items-center w-full border h-[80px]">
  <a href="/" class="flex-1">
    <b>{config.title}</b>
  </a>

  <ul class="px-8 md:flex md:gap-8 flex-1">
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
    <li>
      <a href="/rss.xml" target="_blank">RSS</a>
    </li>
  </ul>

  <button class="flex-1 h-0">Toggle</button>
</nav>