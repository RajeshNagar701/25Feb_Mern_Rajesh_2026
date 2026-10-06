const User = require("../models/User");

const resolvers = {
  Query: {
    getUsers: async () => await User.find(),
    getUser: async (_, { id }) => await User.findById(id)
  },
  Mutation: {
    addUser: async (_, { name, email, age }) => {
      const user = new User({ name, email, age });
      return await user.save();
    },
    updateUser: async (_, { id, name, email, age }) => {
      return await User.findByIdAndUpdate(id, { name, email, age }, { new: true });
    },
    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return "User deleted successfully";
    }
  }
};

module.exports = resolvers;
