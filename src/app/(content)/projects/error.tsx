"use client";

const ErrorBoundary = ({ error, retry }: { error: Error; retry(): void }) => {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center">
        <h2 className="mb-3 text-3xl font-bold capitalize dark:text-slate-50">
          Failed to load projects!
        </h2>
        <p className="mb-3 max-w-200 text-center text-xl text-slate-500 dark:text-slate-400">
          {error.name}
        </p>

        <button
          className={`rounded-lg bg-blue-500 px-5 py-2 text-slate-100 shadow-md hover:bg-blue-600 hover:text-slate-100 text-md sm:text-lg flex items-center justify-center gap-x-3 font-medium underline-offset-2 transition-all duration-300 dark:text-slate-100 print:hidden cursor-pointer`}
          onClick={retry}
        >
          Try Again
        </button>
      </main>
    </>
  );
};

export default ErrorBoundary;
