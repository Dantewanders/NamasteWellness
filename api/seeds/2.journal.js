/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("journal").insert([
    {
      journal_id: 1,
      mood: "Sad",
      energy: "Low",
      thoughts: "I am sad",
      sleepDuration: "4",
      dateCreated: new Date(Date.now()),
      user_id: 1,
    },
    {
      journal_id: 2,
      mood: "Happy",
      energy: "High",
      thoughts: "I am really happy",
      sleepDuration: "7",
      dateCreated: new Date(Date.now()),
      user_id: 6,
    },
    {
      journal_id: 3,
      mood: "Positive",
      energy: "Medium",
      thoughts: "I am so dam optimistic",
      sleepDuration: "9",
      dateCreated: new Date(Date.now()),
      user_id: 2,
    },
  ]);
};
