// import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// export const revalidate = 5;
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  // unstable_noStore(); // force dynamic
  // const response = await fetch("http://localhost:8080/messages", {
  //   // cache: "no-store",
  //   // next: {
  //   //   revalidate: 5, // Cache the data for 5 sec
  //   // },
  //   next: {
  //     tags: ["message"],
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
