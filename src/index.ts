export default function sketch(p5: P5) {
  p5.setup = () => {
    p5.background('white');
  };

  p5.draw = () => {
    p5.rect(10, 10, 50, 50);
  };
}
