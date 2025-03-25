function skillsMember() {
  return {
    name: 'skills',
    description: 'Skills of the member',
    type: 'array',
    items: {
      type: 'string'
    },
    required: false,
    default: []
  };
}