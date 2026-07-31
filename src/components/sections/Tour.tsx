export function Tour() {
  return (
    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Que hacemos?
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Ayudamos a los mas necesitados
            </h3>
            <p class="text-gray-600 mb-8">
              Tenemos el proposito de ayudar familias, personas y corazones que
              mas lo necesitan en nuestra sociedad
              <br />
              <br />
              Todos podemos ayudar!
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img
              src="/foto1.jpeg"
              alt="Icono"
              className="w-5/6 sm:h-64 mx-auto rounded-4xl shadow-lg shadow-gray-4000"
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img
              src="/foto2.jpeg"
              alt="Icono"
              className="w-5/6 sm:h-64 mx-auto rounded-4xl shadow-lg shadow-gray-400"
            />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Te gustaria ayudar de alguna manera?
              </h3>
              <p class="text-gray-600 mb-8">
                Facilitamos la conexión entre personas que necesitan ayuda y
                voluntarios dispuestos a colaborar.
                <br />
                <br />
                <a class="text-pink-500 underline" href="https://undraw.co/">
                  Contactanos
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
