export default async function Page() {
  return (
    <section className="max-w-[370px] m-auto flex flex-col lg:pt-52">
      <div className="w-full mb-8 cursor-pointer">
        <h1 className="text-3xl font-bold flex items-center">
          <img
            width="40"
            height="auto"
            src="/assets/logoblack.png"
            alt="Logo TkCoder"
          />
          <span className="text-[#FB8B00]">Coder.dev</span>
        </h1>
      </div>
      <div className="w-full flex flex-col gap-y-6">
        <h2 className="font-bold text-2xl">Contacto</h2>
        <form className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-1">
            <label className="font-medium flex gap-x-1">
              Name <span className="text-red-700 text-sm">*</span>
            </label>
            <input
              className="border p-1 shadow-xs rounded-md shadow-black/50"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label className="font-medium flex gap-x-1">
              Email <span className="text-red-700 text-sm">*</span>
            </label>
            <input
              className="border p-1 shadow-xs rounded-md shadow-black/50"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label className="font-medium flex gap-x-1">
              Mensaje <span className="text-red-700 text-sm">*</span>
            </label>
            <textarea
              className="border p-2 shadow-xs rounded-md shadow-black/50 resize-none"
              name="message"
              id="message"
              required
            ></textarea>
          </div>
          <div className="w-full mt-4">
            <button className="w-full bg-[#FB8B00] text-white p-2 rounded-md hover:bg-[#ffa435] transition-all">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
