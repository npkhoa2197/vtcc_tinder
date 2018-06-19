const chatIdCreator = (id1, id2) => (id1 > id2 ? `${id2}-${id1}` : `${id1}-${id2}`);

export default chatIdCreator;
