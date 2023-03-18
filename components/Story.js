import {PlusIcon} from "@heroicons/react/solid"

export default function Story({img, username, isUser}) {
  return <div className="relative group cursor-pointer">
      <img src={img} alt={username} />
      <p>{username}</p>
  </div>;
}