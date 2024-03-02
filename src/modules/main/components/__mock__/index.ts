import { IFood } from "../../@types/";
import { IMapData } from "../../@types/data.ts";

import lagman from "../../../../assets/images/lagman.png";
import plov from "../../../../assets/images/plov.png";
import manty from "../../../../assets/images/manty.png";
import lagman2 from "../../../../assets/images/lagman2.png";
import dumgaza from "../../../../assets/images/dumgaza.png";
import kebab from "../../../../assets/images/kebab.png";

import map1 from "../../../../assets/images/map1.png";
import map2 from "../../../../assets/images/map2.png";
import map3 from "../../../../assets/images/map3.png";
import resImg from "../../../../assets/images/resImg.png";
import resImg2 from "../../../../assets/images/res2Img.png";
import resImg3 from "../../../../assets/images/res3.png";

const mock_categories = [
  { food: "🍛", name: "Восточная кухня", id: 0 },
  { food: "🍖", name: "Шашлык", id: 1 },
  { food: "🍕", name: "Пицца", id: 2 },
  { food: "🍝", name: "Паста", id: 3 },
  { food: "🥗", name: "Салаты", id: 4 },
  { food: "🍜", name: "Супы", id: 5 },
  { food: "🍳", name: "Завтраки", id: 6 },
];

const mock_food: IFood[] = [
  {
    title: "Гуйру лагман",
    price: "2698 ₸",
    desc: "Ощутите нежные ароматы специй, обволакивающие каждый кусочек нежного мяса и свежих овощей, плавно утонувших в ароматном бульоне.",
    image: lagman,
    id: 0,
  },
  {
    title: "Плов Свадебный",
    price: "2698 ₸",
    desc: "Насыщенный вкус и неповторимая теплота этого блюда принесут радость и благополучие вашему празднику, наполнив его восточным обаянием и изысканным вкусом.",
    image: plov,
    id: 1,
  },
  {
    title: "Манты с мясом",
    price: "2698 ₸",
    desc: "Погрузитесь в нежный вкус наших мантов с мясом, который заставит ваше сердце замирать от восторга! Откройте для себя истинное наслаждение, попробовав наши манты с мясом!",
    image: manty,
    id: 2,
  },
  {
    title: "Кауырма лагман",
    price: "2698 ₸",
    desc: "Лапша ручной работы в сочетании с обжаренными до золотистой корочки кусочками мяса и свежими овощами, представляет собой идеальное сочетание текстур и ароматов.",
    image: lagman2,
    id: 3,
  },
  {
    title: "Думгаза",
    price: "2698 ₸",
    desc: "Это удивительное блюдо погружает в мир насыщенных ароматов и глубоких вкусов, благодаря искусному сочетанию мяса, овощей и уникальных специй.",
    image: dumgaza,
    id: 4,
  },
  {
    title: "Казан кебаб",
    price: "2698 ₸",
    desc: "Мясо, медленно тушеное в казане до идеальной мягкости, обогащенное ароматами специй и трав, подается с овощами, придавая блюду невероятную сочность и насыщенный вкус.",
    image: kebab,
    id: 5,
  },
];

const mock_map_data: IMapData[] = [
  {
    title: "Aq Anyz рестораны",
    several_branches: 2,
    address_list: ["Ул.Кунаева 14г, жк Нурсая-1", "Ул.Бокейхана 10"],
    schedule: ["Будние дни: 9:00 - 00:00", "Выходные дни: 10:00 - 00:00"],
    image: map1,
    icon: resImg,
  },
  {
    title: "Aq Anyz кондитерский мир",
    address_list: ["Ул.Республики 1Б"],
    schedule: ["Будние дни: 9:00 - 00:00", "Выходные дни: 10:00 - 00:00"],
    image: map2,
    icon: resImg2,
  },
  {
    title: "Восточный двор ресторан",
    address_list: ["Ул.Кунаева 14г, жк Нурсая-1", "Ул.Бокейхана 10"],
    schedule: ["Будние дни: 9:00 - 00:00", "Выходные дни: 10:00 - 00:00"],
    image: map3,
    icon: resImg3,
  },
];

export { mock_categories, mock_food, mock_map_data };
