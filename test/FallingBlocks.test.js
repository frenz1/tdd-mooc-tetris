import { expect } from "chai";
import { Board } from "../src/Board.js";
import "./testing.js";

describe("Falling blocks", () => {
  let board;
  beforeEach(() => {
    board = new Board(3, 3);
  });

  it("The board starts empty", () => {
    expect(board.toString()).to.look(
      `...
       ...
       ...`
    );
  });

  describe("When a block is dropped", () => {
    beforeEach(() => {
      board.drop("X");
    });

    it("it starts from the top middle", () => {
      expect(board.toString()).to.look(
        `.X.
         ...
         ...`
      );
    });

    it("it moves down one row per tick", () => {
      board.tick();

      expect(board.toString()).to.look(
        `...
         .X.
         ...`
      );
    });

    it("at most one block may be falling at a time", () => {
      const before = board.toString();
      expect(() => board.drop("Y")).to.throw("already falling");
      const after = board.toString();
      expect(after).to.eq(before);
    });
  });

  describe("When a block reaches the bottom", () => {
    beforeEach(() => {
      board.drop("X");
      board.tick();
      board.tick();
    });

    it("it is still moving on the last row", () => {
      expect(board.toString()).to.look(
        `...
         ...
         .X.`
      );
      expect(
        board.hasFalling(),
        "the player should still be able to move the block"
      ).to.be.true;
    });

    it("it stops when it hits the bottom", () => {
      board.tick();

      expect(board.toString()).to.look(
        `...
         ...
         .X.`
      );
      expect(board.hasFalling(), "the block should stop moving").to.be.false;
    });
  });

  describe("When a block lands on another block", () => {
    beforeEach(() => {
      board.drop("X");
      board.tick();
      board.tick();
      board.tick();
      board.drop("Y");
      board.tick();
    });

    it("it is still moving on the row above the other block", () => {
      expect(board.toString()).to.look(
        `...
         .Y.
         .X.`
      );
      expect(
        board.hasFalling(),
        "the player should still be able to move the block"
      ).to.be.true;
    });

    it("it stops when it hits the other block", () => {
      board.tick();

      expect(board.toString()).to.look(
        `...
         .Y.
         .X.`
      );
      expect(board.hasFalling(), "the block should stop moving").to.be.false;
    });
  });
});
