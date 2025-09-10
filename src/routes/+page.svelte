<script lang="ts">
  import * as config from '$lib/config'
  export let data
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section>
  <div>
    <h2>All Products</h2>
    <ul class="">
      {#each data.products as product}
        <li>
          <a href={product.slug}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <div>
      <h2>All Blogs</h2>
    <ul class="">
      {#each data.blogs as blog}
        <li>
          <a href={blog.slug}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>