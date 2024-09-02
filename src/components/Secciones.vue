<template>
  <section
    class="self-stretch border-light-border border-t-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-6 px-6 pb-6 text-left text-base text-fuschia-60 font-caption-caption-1-13 h-full"
  >
    <div class="self-stretch flex flex-col items-start justify-start h-full">
      <div
        class="self-stretch flex flex-row items-center justify-start py-4 px-3 gap-5 mb-6"
      >
        <img
          class="h-[60px] w-[60px] relative rounded-[50%] object-cover min-h-[60px]"
          loading="lazy"
          alt=""
          src="/ellipse-6@2x.png"
        />
        <div class="flex-1 flex flex-col items-start justify-center">
          <p
            class="m-0 self-stretch relative leading-[24px] text-fuschia-60"
            >{{ $t('hello') }}</p
          >
          <h2
            class="m-0 self-stretch relative text-2xl font-bold text-dark-gray"
            >John Doe</h2
          >
        </div>
      </div>
      <nav
        class="self-stretch flex flex-col items-start justify-start text-center text-xl text-primary-contrast flex-1"
      >
        <ul class="w-full list-none p-0 m-0 space-y-4">
          <li
            v-for="section in sections"
            :key="section.name"
            @click="$emit('section-click', section.name)"
            class="w-full flex flex-row items-center justify-start py-3 px-4 gap-3 cursor-pointer hover:bg-blue-900 rounded-lg transition-colors duration-200"
            :class="{ 'bg-blue-800': section.active }"
          >
          <router-link :to="{ name: 'signals', params: { symbol: section.name } }" class="custom-link">

            <img class="h-6 w-6 relative" loading="lazy" :alt="section.name" :src="section.icon" />
            <span class="flex-1 text-left relative leading-[20px] font-semibold">{{ $t(section.translatedName) }}</span>
          </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Secciones',
  data() {
    return {
      sections: [
        { name: 'crypto', translatedName: 'sections.crypto', icon: '/icon.svg', active: false },
        { name: 'forex', translatedName: 'sections.forex', icon: '/iconlytwotonebag.svg', active: false },
        { name: 'metals', translatedName: 'sections.metals', icon: '/iconlytwotonediscovery.svg', active: false },
        { name: 'stocks', translatedName: 'sections.stocks', icon: '/iconlytwotonewallet.svg', active: false },
      ]
    }
  },
  emits: ['section-click'],
  methods: {
    setActiveSection(sectionName) {
      this.sections.forEach(section => {
        section.active = section.name === sectionName;
      });
    }
  }
}
</script>

<style scoped>
.custom-link {
  text-decoration: none; /* Elimina el subrayado */
  color: white; /* Cambia el color del enlace */
}

.custom-link:hover {
  color: skyblue; /* Cambia el color al pasar el ratón sobre el enlace */
}
</style>