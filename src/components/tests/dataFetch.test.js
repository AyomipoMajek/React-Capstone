test('should return an object', () => {
  const data = [
    {
      '2022-09-24': {
        CHINA: 742,
        'Other Countries': 172,
        'UNITED STATES': 147,
      },
    },
  ];

  const result = data.map((obj, index) => {
    const [date, values] = Object.entries(obj)[0];
    const total = Object.values(values).reduce((acc, val) => acc + val, 0);
    return {
      date,
      total,
      id: index,
      ...values,
    };
  });

  expect(result).toEqual([
    {
      date: '2022-09-24',
      CHINA: 742,
      'Other Countries': 172,
      'UNITED STATES': 147,
      id: 0,
      total: 1061,
    },
  ]);
});
