<template>
  <aside class="sidebar">
    <CollapsibleContainer
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
    >
      <template #header>
        <span>{{ folder.title }}</span>
      </template>

      <template #content>
        <li
          v-for="file in folder.files"
          :key="file.title"
          @click="selected = file.title"
          :class="{ selected: selected === file.title }"
        >
          <component :is="file.icon" />
          <span>{{ file.title }}</span>
        </li>
      </template>
    </CollapsibleContainer>
  </aside>
</template>

<script setup lang="ts">
import { FolderIcon, PhoneIcon, EnvelopIcon } from '@/components/icons';
import { CollapsibleContainer } from './collapsible-container';
import { ref } from 'vue';

const folders: any = [
  {
    title: 'personal-info',
    files: [
      {
        title: 'bio',
        icon: FolderIcon,
      },
      {
        title: 'experience',
        icon: FolderIcon,
      },
      {
        title: 'education',
        icon: FolderIcon,
      },
      {
        title: 'interests',
        icon: FolderIcon,
      },
    ],
  },
  {
    title: 'contacts',
    files: [
      {
        title: 'email',
        icon: EnvelopIcon,
      },
      {
        title: 'phone',
        icon: PhoneIcon,
      },
    ],
  },
];

const selected = ref<string>(folders[0].files[0].title);
</script>

<style lang="scss" scoped>
@use './app-sidebar.scss';
</style>
