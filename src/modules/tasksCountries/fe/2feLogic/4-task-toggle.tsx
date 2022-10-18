/*
 Please write a component that contains a toggle button.
 When clicking the button it should show or hide a text below the button.
 The title of the page should change between 'shown' and 'hidden'. Hint: the title can be set with document.title = 'some string'.

  You can view your results on http://localhost:3000/toggle
*/

import Head from "next/head";
import { Button, HorizontalLine, Paragraph } from "@styleGuide";
import { useState } from "react";
export const Toggle = () => {
  const [boolean, setBoolean] = useState(true);
  function changeTitle() {
    setBoolean(!boolean);
  }

  return (
    <div>
      <Head>
        <title>{boolean ? "show" : "hide"}</title>
      </Head>
      <Button onClick={changeTitle}>Toggle</Button>
      <HorizontalLine />
      {boolean && "show and hide"}
    </div>
  );
};
