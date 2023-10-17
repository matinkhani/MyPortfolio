import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Frontend Developer !", "React JS", "Next JS"],
        autoStart: true,
        loop: true,
        deleteSpeed: 65,
      }}
    />
  );
}
