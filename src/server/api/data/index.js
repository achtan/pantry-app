class FakeDB {
  constructor() {
    this.count = 0;
    this.users = [
      {name: 'Peter'},
      {name: 'Max'},
      {name: 'Adam'},
      {name: 'David'},
      {name: 'Yarn'},
    ];

    this.snacks = [
      {name: 'Twix'},
      {name: 'Mars'},
      {name: 'Cookie'},
      {name: 'Banana'},
      {name: 'Apple'},
      {name: 'Orange'},
      {name: 'Beer'},
      {name: 'Soda'},
      {name: 'Fanta'},
    ];

    const snacksLog = [
      {user: 'Max', snack: 'Twix'},
      {user: 'Max', snack: 'Twix'},
      {user: 'Max', snack: 'Mars'},
      {user: 'Max', snack: 'Mars'},
      {user: 'Max', snack: 'Banana'},
      {user: 'David', snack: 'Mars'},
      {user: 'David', snack: 'Banana'},
      {user: 'David', snack: 'Mars'},
      {user: 'Yarn', snack: 'Mars'},
      {user: 'Yarn', snack: 'Banana'},
      {user: 'Max', snack: 'Beer'},
      {user: 'Max', snack: 'Banana'},
      {user: 'Max', snack: 'Banana'},
      {user: 'Max', snack: 'Banana'},
      {user: 'Peter', snack: 'Banana'},
      {user: 'Peter', snack: 'Mars'},
      {user: 'Peter', snack: 'Fanta'},
      {user: 'Peter', snack: 'Soda'},
      {user: 'Peter', snack: 'Banana'},
      {user: 'David', snack: 'Soda'},
      {user: 'Peter', snack: 'Soda'},
      {user: 'Adam', snack: 'Soda'},
      {user: 'Adam', snack: 'Soda'},
      {user: 'Adam', snack: 'Twix'},
      {user: 'Peter', snack: 'Soda'},
      {user: 'Peter', snack: 'Soda'},
      {user: 'Peter', snack: 'Soda'},
    ];

    this.snacksLog = snacksLog.map((log, index) => ({
      ...log,
      id: index
    }))
  }

  findUserBySlug(slug) {
    return this.users.find(u => u.name.toLowerCase() == slug);
  }

  findSnacksLogs(user) {
    return this.snacksLog.filter(log => log.user == user)
  }

  addSnackLog(user, snack) {
    this.snacksLog.push({
      id: this.snacksLog.length + 1,
      user,
      snack,
    })
  }
}

export default new FakeDB();
