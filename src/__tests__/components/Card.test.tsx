import Card from '@/components/Card';
import { render, screen } from '@testing-library/react';
import { mockMovieItem } from "@/__mocks__/mockMovie";

describe('Home Page ', () => {
  describe('Rendering', () => {
    it('should have Card Page text', () => {
      render(<Card item={mockMovieItem} />);
    });

    it('should have title', () => {
      render(<Card item={mockMovieItem} />);
      const title = screen.getByTestId("title");
      expect(title).toBeInTheDocument();
    });

    it('should have Year', () => {
      render(<Card item={mockMovieItem} />);
      const yaer = screen.getByTestId("year");
      expect(yaer).toBeInTheDocument();
    });
  });
});