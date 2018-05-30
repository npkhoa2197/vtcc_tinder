const chatIdCreator = (id1, id2) => {
  if (id1 > id2) {
    return `${id2}-${id1}`;
  }
  return `${id1}-${id2}`;
};

export default chatIdCreator;
