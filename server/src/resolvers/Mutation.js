const { prisma } = "../generated/prisma-client";

const Mutation = {
  createUser: async (parent, args, info) => {
    const user = await prisma.createUser(
      {
        username: args.username,
        email: args.email,
        password: args.password
      },
      info
    );

    return user;
  }
};

module.exports = Mutation;
