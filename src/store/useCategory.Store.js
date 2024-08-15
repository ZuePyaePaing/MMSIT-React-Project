import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [
    { id: 0, title: "all", isActive: true },
    { id: 1, title: "electronic", isActive: false },
    { id: 2, title: "jeweley", isActive: false },
    { id: 3, title: "men's clothing", isActive: false },
    { id: 4, title: "women's clothing", isActive: false },
  ],
  activeCategory: (categroyId) =>
    set((state) => ({
      categories: state.categories.map((el) =>
        el.id === categroyId
          ? { ...el, isActive: true }
          : { ...el, isActive: false }
      ),
    })),
}));

export default useCategoryStore;
