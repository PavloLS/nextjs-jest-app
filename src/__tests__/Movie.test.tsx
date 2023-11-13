import Movie from '@/pages/movie/[id]';
import { render, screen } from '@testing-library/react';
import { mockMovie } from "@/__mocks__/mockMovie";
import getOverviewDetails from '@/lib/getOverviewDetails';

const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(mockMovie),
    })
})

afterAll(() => {
  global.fetch = unmockedFetch
})


describe('fetch details', () => {
  test('works', async () => {
    const data = await getOverviewDetails('');
    expect(!!data?.title).toEqual(true)
  })
});

const toHoursAndMinutes = require("../utils/toHoursAndMinutes");

jest.mock("../utils/toHoursAndMinutes", () => () => '1h 40m');

describe("toHoursAndMinutes", () => {
    it("fails if value is not recognised as integer", () => {
        expect(toHoursAndMinutes(100)).toBe('1h 40m');
    });
});


describe('Home Page ', () => {
  describe('Rendering', () => {
    it('should have MOvie Page text', () => {
      render(<Movie overviewDetails={mockMovie} />);
    });

    it('should have Year', () => {
      render(<Movie overviewDetails={mockMovie} />);
      const yaer = screen.getByTestId("year");
      expect(yaer).toBeInTheDocument();
    });

    it('should have Genres', () => {
      render(<Movie overviewDetails={mockMovie} />);
      const yaer = screen.getByTestId("genres");
      expect(yaer).toBeInTheDocument();
    });

    it('should have Duration', () => {
      render(<Movie overviewDetails={mockMovie} />);
      const yaer = screen.getByTestId("runningTimeInMinutes");
      expect(yaer).toBeInTheDocument();
    });

    it('should have Author', () => {
      render(<Movie overviewDetails={mockMovie} />);
      const yaer = screen.getByText(/Author/i);
      expect(yaer).toBeInTheDocument();
    });

    it('should have Author', () => {
      render(<Movie overviewDetails={mockMovie} />);
      const yaer = screen.getByText(/Rating/i);
      expect(yaer).toBeInTheDocument();
    });

    it('should have Overview', () => {
      render(<Movie overviewDetails={mockMovie} />);
      const yaer = screen.getByText(/Overview/i);
      expect(yaer).toBeInTheDocument();
    });

    it('should have image', () => {
      render(<Movie overviewDetails={mockMovie} />);
      const yaer = screen.getByTestId("image");
      expect(yaer).toBeInTheDocument();
    });
  });
});