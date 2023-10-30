import "./styles.css";
import * as RoosterJs from "roosterjs";
import * as RoosterjsReact from "roosterjs-react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { initializeIcons } from "@fluentui/react/lib/Icons";

//https://microsoft.github.io/roosterjs/index.html#options

export default function App() {
  initializeIcons();

  let ribbonPlugin = RoosterjsReact.createRibbonPlugin();
  let plugins = [
    new RoosterJs.ContentEdit(),
    new RoosterJs.HyperLink((url) => "Ctrl+Click to follow the link:" + url),
    new RoosterJs.Watermark("Type contesdgdgdgdgdgnt here ..."),
    new RoosterJs.ImageEdit(),
    new RoosterJs.CutPasteListChain(),
    new RoosterJs.TableResize(),
    new RoosterJs.CustomReplace(),
    new RoosterJs.TableCellSelection(),
    ribbonPlugin
  ];
  let options: RoosterJs.EditorOptions = {
    plugins: plugins,
    getDarkColor: RoosterJs.getDarkColor
  };

  let buttons = RoosterjsReact.getButtons() as RoosterjsReact.RibbonButton<
    string
  >[];
  console.log(buttons);

  return (
    <div className="App">
      {/* <div
        id="editorDiv"
        style={{
          width: "500px",
          height: "300px",
          overflow: "auto",
          border: " solid 1px black"
        }}
      ></div>
      <button id="buttonB">B</button> <button id="buttonI">I</button>
      <button id="buttonU">U</button> */}
      <FluentProvider theme={webLightTheme}>
        {/* <div id="root"> */}
        <RoosterjsReact.Ribbon plugin={ribbonPlugin} buttons={buttons} />
        <RoosterjsReact.Rooster
          id="editorDiv"
          className="editor"
          {...options}
          style={{
            width: "100%",
            height: "300px",
            overflow: "auto",
            border: " solid 1px black"
          }}
        />
      </FluentProvider>
    </div>
  );
}
