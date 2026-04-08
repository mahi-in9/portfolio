import { useSpring, animated } from "@react-spring/web";

function Home() {
  const springs = useSpring({
    from: { y: 0, x: 0 },
    to: { y: 100, x: 400 },
  });

  return (
    <div className="page ">
      <div className="m-4">
        <animated.div
          className="p-4 bg-orange-400 w-20 h-20"
          style={{ ...springs }}
        />
      </div>
    </div>
  );
}

export default Home;
