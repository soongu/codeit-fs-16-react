const tags = [
  { id: 1, name: '한강', count: 12400 },
  { id: 2, name: '노을', count: 8700 },
  { id: 3, name: '카페', count: 152000 },
  { id: 4, name: '퇴근길', count: 340 },
];

const PopularTagList = () => {
  return (
    <ul>
      {tags
        .filter((t) => t.count >= 1000)
        .map((t) => (
          <li key={t.id}>
            #{t.name} 게시물 {t.count.toLocaleString()}개{' '}
            {t.count >= 100000 && '🔥'}
          </li>
        ))}
    </ul>
  );
};

export default PopularTagList;
