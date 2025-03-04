<script setup lang="ts">
const { data: listBerita } = await useAsyncData('beritas', () => {
  return queryCollection('berita')
    .all()
})
</script>

<template>
  <div class="py-20">
    <UContainer>
      <div v-for="berita in listBerita" :key="berita.title" class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <UCard>
          <h2>
            {{ berita?.title }}
          </h2>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
