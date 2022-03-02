import { acceptHMRUpdate, defineStore } from "pinia";

export const useStack = defineStore("stackStore", {
  state: () => ({
    selectedCard: 0,
    isCardSelected: false
  }),
  actions: {
    reset() {
      this.isCardSelected = false;
      this.selectedCard = 0;
    },
    selectCard(value: number) {
      this.isCardSelected = true;
      this.selectedCard = value;
    }
  }
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useStack, import.meta.hot));
// }
// ESTO NO LE GUSTA A JEST