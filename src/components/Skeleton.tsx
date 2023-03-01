const listArr = new Array(8).fill('1');

const Skeleton = () => {
  return (
    <div className="mt-5">
      {listArr.map((el, index) => (
        <div
          key={index}
          className="animate-pulse w-full h-20 mb-3 bg-zinc-100 rounded-xl"
        />
      ))}
    </div>
  );
};

export default Skeleton;
