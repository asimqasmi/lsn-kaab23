const IndexPageMain = () => {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-indigo-700">
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
          href="https://nextjs.org/docs"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
          <p className="mt-4 text-xl">
            Find in-depth information about Next.js features and its API.
          </p>
        </a>
      </div>
    </main>
  );
};

export default IndexPageMain;
