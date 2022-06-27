  // scoreScale object declaration
  export const scoreScale = {
    intubated: {
      yes: 16,
      no: 0,
    },
    mobility: {
      ind: 0,
      sba: 1,
      "1pa": 2,
      "2pa": 2,
    },

    incontinent: {
      yes: 2,
      no: 0,
    },
    alert: {
      // all scoring below needs revising for real-life accuracy
      1: 2,
      2: 2,
      3: 1,
      4: 0,
    },
    surgery: {
      yes: 3,
      no: 0,
    },
    isolation: {
      no: 0,
      contact: 1,
      droplet: 1,
      airborne: 3,
    },
  };

