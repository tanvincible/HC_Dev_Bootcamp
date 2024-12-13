"use client";
import {
  Excalidraw,
  MainMenu,
  serializeAsJSON,
  WelcomeScreen,
} from "@excalidraw/excalidraw";
import Image from "next/image";
import * as React from "react";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types";

interface ExcalidrawWrapperProps {
  id: string; // Unique problem ID
}

const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({ id }) => {
  // State to determine if the component has mounted (client-side check)
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    // Set mounted state to true once the component is mounted
    setIsMounted(true);
  }, []);

  const onChange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    const content = serializeAsJSON(elements, appState, files, "local");
    // Store content uniquely for each id
    localStorage.setItem(`excalidraw_${id}`, content);
  };

  const retrieveInitialData = () => {
    const content = localStorage.getItem(`excalidraw_${id}`);
    return content ? JSON.parse(content) : null; // Return parsed content or null
  };

  // Render only when mounted to avoid document is not defined error
  if (!isMounted) {
    return null; // Or a loading spinner if you prefer
  }

  return (
    <div style={{ height: "90.5vh", width: "100%" }}>
      <Excalidraw onChange={onChange} initialData={retrieveInitialData()}>
        <WelcomeScreen>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.ToolbarHint />
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Logo>
              <Image
                src="/center_logo.jpeg" // Ensure this image is in the public directory
                alt="LC Board"
                width={200}
                height={200}
              />
            </WelcomeScreen.Center.Logo>
            <WelcomeScreen.Center.Heading>
              Notes, Made Simple!
            </WelcomeScreen.Center.Heading>
            <WelcomeScreen.Center.Menu>
              <WelcomeScreen.Center.MenuItemLoadScene />
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center.Menu>
          </WelcomeScreen.Center>
          <WelcomeScreen.Hints.HelpHint />
        </WelcomeScreen>

        <MainMenu>
          <MainMenu.DefaultItems.LoadScene />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.Help />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.ToggleTheme />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
      </Excalidraw>
    </div>
  );
};

export default ExcalidrawWrapper;
