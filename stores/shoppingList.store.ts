import { atom } from "jotai";

interface IListItem {
  id: string;
  description: string;
  quantity: number;
  purchased: boolean;
}

const shoppingListStore = atom<IListItem[]>([
  {
    id: "jsodifjsdfnsjhdfsd",
    description: "Milk",
    quantity: 1,
    purchased: false,
  },
  {
    id: "9h98y732bpodsfd",
    description: "Bread",
    quantity: 2,
    purchased: false,
  },
  {
    id: "20397cnspofu72u893vbodas",
    description: "Eggs",
    quantity: 12,
    purchased: false,
  },
  {
    id: "osdiuf9012upn29380hnosdf",
    description: "Cheese",
    quantity: 1,
    purchased: true,
  },
]);

export default shoppingListStore;
