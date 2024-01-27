import React from 'react'

const certifcates = ({ title, url, desc }) => {
  return (
    <div className="flex flex-col items-center border-2 border-zinc-400 dark:border-slate-500 p-4 w-full rounded-md transition-all">
      <div className="flex justify-between items-center w-full">
        <h4 className="text-lg md:text-lg font-bold">{title}</h4>
          {url && (
            <a
              href={url}
              type="button"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-200 rounded-lg dark:bg-zinc-800 w-9 h-9 transition-all text-zinc-800 dark:text-zinc-50 flex items-center justify-center hover:scale-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"
                />
              </svg>
            </a>
          )}
      </div>
      <p className="text-sm md:text-base  mt-4">
        {desc}
      </p>
    </div>
  )
}

export default certifcates