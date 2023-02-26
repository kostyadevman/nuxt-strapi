<template>
<div>
  <nav>
    <nuxt-link to="/" class="nav__link">На главную</nuxt-link>
  </nav>
  <hr />
  <section class="skills">
    <h2 class="skills__title">Skills</h2>
    <ul class="skills__list">
      <li v-for="skill in skills" class="skills__item" :key="skill.id">
        {{ skill.attributes.title }}
      </li>
    </ul>
  </section>
</div>
</template>

<script setup>
  const { find } = useStrapi()
  const {data: skills} = await find('api/skills')
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  align-items: center;
  flex-direction: column;
  
  &__title {
    margin-top: 10px;
    font-size: 32px;
  }

  &__list {
    margin-top: 100px;
  }

  &__item {
    margin-bottom: 5px;
    font-size: 20px;
  }
}
</style>
