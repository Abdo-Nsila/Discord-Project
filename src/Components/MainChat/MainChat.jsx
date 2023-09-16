import { Theme } from "@radix-ui/themes";
import MyApp from "./MyApp/MyApp";
import "./MainChat.css";

export default function MainChat() {
  return (
    <main>
      <Theme appearance="dark" grayColor="gray" accentColor="indigo">
        <MyApp />
      </Theme>
    </main>
  );
}
