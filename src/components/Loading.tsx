const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="animate-spin w-10 h-10 flex justify-center items-center rounded-full bg-blue-300 text-blue-600">
        LOADING
      </div>
    </div>
  );
};

export default Loading;
