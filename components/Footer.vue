<template>
  <footer>
    <div class="copyright">&copy; 2021 Yayasan Asy-Syaamil Bontang</div>
    <div class="socials">
      <a href="http://www.asy-syaamil.com" target="_blank"
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
  flex: 0;
  display: table-row;
  height: 0;
  min-height: var(--footer-height);
  padding: 1rem;
  width: 100%;
  background-color: var(--dark);
  color: var(--bg);
  text-align: center;
  font-size: 14px;
  display: flex;
  gap: 1em;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
  color: var(--primary-lighter);

  &:hover {
    text-decoration: underline;
  }
}
i {
  margin-left: 5px;
}
</style>
