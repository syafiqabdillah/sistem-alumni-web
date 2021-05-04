<template>
  <footer>
    <div class="copyright">&copy; 2021 Yayasan Asy-Syaamil Bontang</div>
    <div class="socials">
      <a href="www.asy-syaamil.com" target="_blank"
        >www.asy-syaamil.com<i class="icofont-external-link"></i
      ></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
footer {
  min-height: 120px;
  padding: 1rem;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  background-color: var(--dark);
  color: var(--primary);
  text-align: center;
  font-size: 14px;
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
  color: var(--secondary);
}
i {
  margin-left: 5px;
}
</style>
