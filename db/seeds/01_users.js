/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('friends').del();
  await knex('users_events').del();
  await knex('users_tasks').del();
  await knex('tasks').del();
  await knex('events').del();
  await knex('users').del();
  await knex('users').insert([
    {
      id: "1a9d53c2",
      first_name: 'Ruprecht',
      last_name: 'Epstein',
      username: 'RupREKT',
      points: 0,
      email: '1@ab.cd',
    },
    {
      id: "280f425a",
      first_name: 'Jeremy',
      last_name: 'Smith',
      username: 'JJ',
      points: 15,
      email: '2@ab.cd',
    },
    {
      id: "320b4650",
      first_name: 'Abbaddon',
      last_name: 'the Despoiler',
      points: 666,
      email: '3@ab.cd',
      username: 'fluttershy',
    },
  ]);
};
