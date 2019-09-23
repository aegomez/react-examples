type Room = {
  _id: string;
  name: string;
};

declare namespace Express {
  interface Request {
    rooms: import('mongodb').Collection<Room>
  }
}