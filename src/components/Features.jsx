import classes from "./Features.module.css";
import InTheBox from "./InTheBox";

const Features = () => {
  return (
    <section className={classes["features-section"]}>
      <div className={classes.content}>
        <h5>Features</h5>
        <p>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
        </p>
        <p>
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </div>

      <InTheBox />
    </section>
  );
};

export default Features;
