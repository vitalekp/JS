'use strict';

// input: object, array
// output: object

// algo
// 1 провірити чи в вузлі є id з array +++
// 2 повернути копію обєкту ... +++
// 2.1 добавити значення isFavorite
// 2.2 пройтися по всім nodes вузлам за допомогою рекурсії
// 2.3 провірити чи вузол є isFavorite
// 3 тест

export const markFavorites = (tree, favorite) => {
  const isFavorite = favorite.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(child => markFavorites(child, favorite)),
  };
};

// test data

const favorites = ['id-1', 'id-3'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-3',
          name: 'Bob',
          nodes: [
            {
              id: 'id-4',
              name: 'Foo',
              nodes: [],
            },
          ],
        },
      ],
    },
  ],
};
const result = markFavorites(tree, favorites);

console.log(result);
