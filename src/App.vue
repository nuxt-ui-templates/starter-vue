<template>
  <Suspense>
    <UApp>
      <UHeader>
        <template #left>
          <RouterLink to="/">
            <AppLogo class="w-auto h-6 shrink-0" />
          </RouterLink>

          <TemplateMenu />
        </template>

        <template #right>
          <UColorModeButton />

          <UButton
            to="https://github.com/nuxt-ui-templates/starter-vue"
            target="_blank"
            icon="simple-icons:github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          />
        </template>
      </UHeader>

      <UMain>
        <RouterView />
      </UMain>

      <USeparator icon="simple-icons:vuedotjs" />

      <UFooter>
        <template #left>
          <p class="text-sm text-muted">
            Built with Nuxt UI • © {{ new Date().getFullYear() }}
          </p>
        </template>

        <template #right>
          <UButton
            to="https://github.com/nuxt-ui-templates/starter-vue"
            target="_blank"
            icon="simple-icons:github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          />
        </template>
      </UFooter>
    </UApp>
  </Suspense>
</template>
