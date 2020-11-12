export default {
  get: jest.fn(() => Promise.resolve({ data: "ABC" })),
  post: jest.fn(() => Promise.resolve({ data: "ABC" })),
};
