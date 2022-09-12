
import { v4 as UUIDV4 } from "uuid";

import normalizeText from "@/utils/normalizer";

export default {
  categoriesList (state) {
    return state.services.slice(1).reduce((acc, cur) => {
      const categoryName = cur[0];

      if (acc.includes(categoryName)) return acc;

      return [...acc, categoryName];
    }, []);
  },

  serviceList (state) {
    return state.services.slice(1).reduce((acc, cur) => {
      const key = normalizeText(cur[0].toLowerCase().replace(/\s+/g, '_'));

      if (acc[key]) {
        const [, title, price, description] = cur;

        acc[key].services.push({ id: UUIDV4(), title, price, description });

        return acc;
      }

      const [, title, price, description] = cur;

      return {
        ...acc,
        [key]: {
          key, name: cur[0], services: [{
            id: UUIDV4(), title, price, description
          }]
        }
      }
    }, {});
  }
}
