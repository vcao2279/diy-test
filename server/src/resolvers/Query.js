const { prisma } = "../generated/prisma-client";

const Query = {
  info: () => {
    return `This is a great app for DIY Reviews`;
  },
  users: (parent, args, context, info) => {
    return context.prisma.users();
  }
};

module.exports = Query;
