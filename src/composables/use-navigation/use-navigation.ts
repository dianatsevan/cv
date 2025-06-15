import { ref } from 'vue';

const isNavigationOpen = ref(false);

export const useNavigation = () => {
  const toggleNavigation = () => {
    isNavigationOpen.value = !isNavigationOpen.value;
  };

  return {
    isNavigationOpen,
    toggleNavigation,
  };
};
