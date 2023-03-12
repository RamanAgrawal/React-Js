import "./App.css";
import CollapsibleExample from "./Components/Navbar/Navbar";
import AllROutes from "./Components/Routes/AllRoutes/AllRoutes";

function App() {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      description:
        "Colors have perceived properties such as hue, colorfulness (saturation) and luminance. Colors can also be additively mixed (commonly used for actual light) or subtractively mixed (commonly used for materials). If the colors are mixed in the right proportions, because of metamerism, they may look the same as a single-wavelength light. For convenience, colors can be organized in a color space, which when being abstracted as a mathematical color model can assign each region of color with a corresponding set of numbers.",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      description:
        "Colors have perceived properties such as hue, colorfulness (saturation) and luminance. Colors can also be additively mixed (commonly used for actual light) or subtractively mixed (commonly used for materials). If the colors are mixed in the right proportions, because of metamerism, they may look the same as a single-wavelength light. For convenience, colors can be organized in a color space, which when being abstracted as a mathematical color model can assign each region of color with a corresponding set of numbers.",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      description:
        "Colors have perceived properties such as hue, colorfulness (saturation) and luminance. Colors can also be additively mixed (commonly used for actual light) or subtractively mixed (commonly used for materials). If the colors are mixed in the right proportions, because of metamerism, they may look the same as a single-wavelength light. For convenience, colors can be organized in a color space, which when being abstracted as a mathematical color model can assign each region of color with a corresponding set of numbers.",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      title: "Blue Color",
      price: 100,
      description:
        "Colors have perceived properties such as hue, colorfulness (saturation) and luminance. Colors can also be additively mixed (commonly used for actual light) or subtractively mixed (commonly used for materials). If the colors are mixed in the right proportions, because of metamerism, they may look the same as a single-wavelength light. For convenience, colors can be organized in a color space, which when being abstracted as a mathematical color model can assign each region of color with a corresponding set of numbers.",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div className="App">
      <CollapsibleExample />
      <AllROutes productsArr={productsArr} />
    </div>
  );
}

export default App;
