import { recipePosts, users } from "backend/data/eternalData.ts";

import { User } from "../../common/structs/user.ts";

export function getAllRecipePosts() {
  console.log("getAllRecipePosts");
  console.log(recipePosts.values());
  return Array.from(recipePosts.values());
}

export function createUserOrGet() {
  const user = getCurrentUserId();

  if (!(user in users.keys())) {
    console.log(`Creating entry for ${user}`);
    const newUser: User = {
      endpoint: user,
      profilePicture: "../../utilities/images/profile-picture.jpg",

      anzahlRezepte: 0,
      topRezept: "-",
      bewertung: 0,
      follower: 0,
      land: "-",
      beschreibung: "Ich bin neu hier",
      followBool: false,
      followString: "Follow",

      rezepte: [],
    };
    users.set(user, newUser);
  }

  return users.get(user);
}

export function getCurrentUserId() {
  return datex.meta.sender.main.toString();
}
