// import { Collection } from "mongodb";

type Message = {
  name: string;
  message: string;
};

declare namespace Express {
  interface Request {
    messages: import('mongodb').Collection<Message>
  }
}

interface HasMessages {
  messages: Message[];
}

interface ListProps extends HasMessages {}

interface NewProps extends HasMessages {
  addMessageCallback: (message: Message) => void;
}
interface NewState {
  invalid: boolean;
}

interface BoardProps extends HasMessages {}
interface BoardState extends HasMessages {}