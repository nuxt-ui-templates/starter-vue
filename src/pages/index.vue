<template>
  <div>
    <UPageHero
      title="Ship Faster with Nuxt UI"
      description="A production-ready Vue starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours."
      :links="[{
        label: 'Get started',
        to: 'https://ui.nuxt.com/getting-started/installation/vue',
        target: '_blank',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: 'Use this template',
        to: 'https://github.com/nuxt-ui-templates/starter-vue',
        target: '_blank',
        icon: 'i-simple-icons-github',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />

    <UPageSection
      id="features"
      title="Everything you need to build modern Vue apps"
      description="Start with a solid foundation. This template includes all the essentials for building production-ready Vue applications with Nuxt UI's powerful component system."
      :features="[{
        icon: 'i-lucide-rocket',
        title: 'Vue 3 Composition API',
        description: 'Built with Vue 3\'s latest features including <script setup>, Composition API, and TypeScript support. Write cleaner, more maintainable code.'
      }, {
        icon: 'i-lucide-palette',
        title: 'Beautiful UI components',
        description: 'Access Nuxt UI\'s comprehensive component library in your Vue app. Automatic dark mode, consistent design, and fully customizable.'
      }, {
        icon: 'i-lucide-zap',
        title: 'Lightning fast with Vite',
        description: 'Powered by Vite for instant HMR, optimized builds, and exceptional developer experience. Your development workflow will be blazing fast.'
      }, {
        icon: 'i-lucide-blocks',
        title: '100+ components included',
        description: 'From forms to navigation, modals to data tables - everything you need is accessible, responsive, and ready to use.'
      }, {
        icon: 'i-lucide-code-2',
        title: 'TypeScript first',
        description: 'Full TypeScript support with proper type definitions. Get IntelliSense, auto-completion, and catch errors before runtime.'
      }, {
        icon: 'i-lucide-shield-check',
        title: 'Production ready',
        description: 'Pre-configured with ESLint, Tailwind CSS, Vue Router, and best practices. Deploy with confidence from day one.'
      }]"
    />

    <UPageSection>
      <UPageCTA
        title="Ready to build your next Vue app?"
        description="Join thousands of developers building with Vue 3 and Nuxt UI. Get this template and start shipping today."
        variant="subtle"
        :links="[{
          label: 'Start building',
          to: 'https://ui.nuxt.com/getting-started/installation/vue',
          target: '_blank',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'neutral'
        }, {
          label: 'View on GitHub',
          to: 'https://github.com/nuxt-ui-templates/starter-vue',
          target: '_blank',
          icon: 'i-simple-icons-github',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>
