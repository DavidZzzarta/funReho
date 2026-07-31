export function Hero() {
  return (
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p class="uppercase tracking-loose w-full">Queremos escucharte</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Trabajamos para disminuir las cifras de suicidios
          </h1>
          <p class="leading-normal text-2xl mb-2">
            Con un recorrido desde <strong class="underline">2014</strong>
          </p>
          <small>Si repararamos familias, reparamos la sociedad</small>
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Conoce más
          </button>
        </div>
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50" src="/hero.png" />
        </div>
      </div>
    </div>
  );
}
