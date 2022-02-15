db.movies.update({ title: "Home Alone" },
  { $currentDate: { lastUpdated: { $type: "timestamp" } } });
