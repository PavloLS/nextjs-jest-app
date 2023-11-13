import Home from '@/pages/index';
import { render, screen, within } from '@testing-library/react';
import { mockMovies } from "@/__mocks__/mockMovie";
import getMovies from '@/lib/getMovies';

const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve({results: mockMovies}),
    })
})

afterAll(() => {
  global.fetch = unmockedFetch
});

describe('fetch movies', () => {
  test('works', async () => {
    const data = await getMovies();
    expect(!!data?.length).toEqual(true)
  })
});

describe('Home Page ', () => {
  describe('Rendering', () => {
    it('should have Home Page text', () => {
      render(<Home list={mockMovies} />);
      expect(screen.getByText('Movies')).toBeInTheDocument();
    });

    it("renders all movies", () => {
      render(<Home list={mockMovies} />);
      const allMovies = screen.getByRole("list");
      const { getAllByRole } = within(allMovies);
      const listitems = getAllByRole("listitem");
      expect(listitems.length).toBe(2);
    });
  });
});