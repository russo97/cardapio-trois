
import normalizeText from "@/utils/normalizer";

export default {
  categoriesList (state) {
    if (Array.isArray(state.services)) {
      return []
    }

    return state.services.values.slice(1).reduce((acc, cur) => {
      const categoryName = cur[0];

      if (acc.includes(categoryName)) return acc;

      return [...acc, categoryName];
    }, []);
  },

  serviceList (state) {
    if (Array.isArray(state.services)) {
      return []
    }

    return state.services.values.slice(1).reduce((acc, cur) => {
      const key = normalizeText(cur[0].toLowerCase().replace(/\s+/g, '_'));

      if (acc[key]) {
        const [, title, price, description] = cur;

        acc[key].services.push({ title, price, description });

        return acc;
      }

      const [, title, price, description] = cur;

      return {
        ...acc,
        [key]: {
          key, name: cur[0], services: [{
            title, price, description
          }]
        }
      }
    }, {});
  }
}
