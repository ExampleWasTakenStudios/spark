import viteLogo from '/vite.svg';
import reactLogo from '/react.svg';
import typescriptLogo from '/typescript.png';
import tailwindLogo from '/tailwindcss.svg';
import typescripteslintLogo from '/typescript-eslint.svg';
import prettierLogo from '/prettier.png';

export const App = () => {
  return (
    <div className="bg-[#252525] text-[#ffffff] min-h-screen min-w-screen py-16 flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col items-center gap-16 min-[1543px]:flex-row">
        <div className="flex flex-col gap-10 items-center min-[1543px]:hidden">
          <h1 className="text-center text-[3.2em] leading-[1.1] font-bold">simple vite template.</h1>
          <p className="text-[#8c8c8c] italic">Click the logos to learn more</p>
        </div>
        <a href="https://vitejs.dev/">
          <img
            src={viteLogo}
            className="h-[9em] transition-[filter,scale] duration-[300ms] hover:drop-shadow-[0_0_2em_#646cffaa] scale-100 hover:scale-105"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev/">
          <img
            src={reactLogo}
            className="h-[9em] transition-[filter,scale] duration-[300ms] hover:drop-shadow-[0_0_2em_#61dafbaa] scale-100 hover:scale-105"
            alt="React logo"
          />
        </a>
        <a href="https://www.typescriptlang.org/">
          <img
            src={typescriptLogo}
            className="h-[9em] transition-[filter,scale] duration-[300ms] hover:drop-shadow-[0_0_2em_#2d79c7aa] scale-100 hover:scale-105"
            alt="TypeScript logo"
          />
        </a>
      </div>
      <div className="mt-7 flex flex-col items-center min-[1543px]:flex-row gap-16">
        <a href="https://typescript-eslint.io/">
          <img
            src={typescripteslintLogo}
            className="h-[9em] transition-[filter,scale] duration-[300ms] hover:drop-shadow-[0_0_2em_#374fbeaa] scale-100 hover:scale-105"
            alt="TypeScript-ESlint logo"
          />
        </a>
        <a href="https://tailwindcss.com/">
          <img
            src={tailwindLogo}
            className="px-16 h-[7em] transition-[filter,scale] duration-[300ms] hover:drop-shadow-[0_0_2em_#35bef8aa] scale-100 hover:scale-105"
            alt="tailwindcss logo"
          />
        </a>
        <a href="https://prettier.io/">
          <img
            src={prettierLogo}
            className="h-[9em] transition-[filter,scale] duration-[300ms] hover:drop-shadow-[0_0_2em_#56b3b4aa] scale-100 hover:scale-105"
            alt="prettier logo"
          />
        </a>
      </div>
      <div className="hidden mt-5 min-[1543px]:flex flex-col gap-10 items-center">
        <hr className="w-[90%] border-b border-[#424242]" />
        <h1 className="text-[3.2em] leading-[1.1] font-bold">Vite + React + TypeScript</h1>
        <h2 className="text-[1.5em] leading-[1.1] font-bold">TypeScript-ESLint + tailwindcss + Prettier</h2>
        <p className="text-[#8c8c8c] italic">Click the logos to learn more</p>
      </div>
      <p className="text-[#8c8c8c]">
        Made with ❤️ by{' '}
        <a
          className="underline underline-offset-2 transition-colors duration-300 hover:text-[#f0d722]"
          href="https://github.com/ExampleWasTakenStudios"
        >
          ExampleWasTaken
        </a>
      </p>
    </div>
  );
};
