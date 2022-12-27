const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query:{
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedBooks');
    },

    books: async () => {
      return await Book.find({})
    }

  },

  Mutation: {
    saveBook: async (parent, {bookId, description, image, link, title, authors}, context) => {
      
      var authorsArray = authors.split(',')
      console.log(authors)
      if (context.user) {
        const newBook = await Book.create({
          bookId,
          description,
          image,
          link,
          title,
          $addToSet: {
            authors: {name:{$each: [authorsArray]}},
          }
        })
      

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: newBook._id } }
      );
    }
  },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },



  },
};

module.exports = resolvers;
