import type { Actions as GatsbyActions } from 'gatsby';

import { onCreatePage } from '../src/gatsby-node';

type CreatePageFn = GatsbyActions['createPage'];
type DeletePageFn = GatsbyActions['deletePage'];

test('the onCreatePage hook dispatch createPage action', async () => {
  const createPage = jest.fn() as CreatePageFn;
  const deletePage = jest.fn() as DeletePageFn;

  const page = {
    path: require.resolve('../__fixture__/fixture-1.js'),
  };

  await onCreatePage({
    page,
    actions: {
      createPage,
      deletePage,
    },
  } as any);

  // createPage
  expect(createPage).toBeCalledTimes(1);
  expect(createPage).toBeCalledWith({
    ...page,
    context: {
      pageMeta: {
        title: 'Test',
        description: 'This is inline metadata in page source code',
      }
    }
  });
});

test('the onCreatePage hook dispatch deletePage action', async () => {
  const createPage = jest.fn() as CreatePageFn;
  const deletePage = jest.fn() as DeletePageFn;

  const page = {
    path: require.resolve('../__fixture__/fixture-1.js'),
  };

  await onCreatePage({
    page,
    actions: {
      createPage,
      deletePage,
    },
  } as any);

  // deletePage
  expect(deletePage).toBeCalledTimes(1);
  expect(deletePage).toBeCalledWith(page);
});

