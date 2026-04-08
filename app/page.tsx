export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="content mx-auto flex w-full max-w-[800px] flex-col gap-y-4 px-[20px] md:flex-row md:justify-between">
        <div className="description w-full md:w-[400px] px-4">
          <div className="py-4 text-[#2a2a2a]">
            <p className="text-[18px]">designer, tinkerer, artist</p>
            <p className="text-[18px]">currently product design at caninestudio</p>
          </div>
          <div className="py-2 text-[#2a2a2a]">
            <p className="text-[18px]">this is a showcase of my expertise in product and digital design, with a meticulous eye for detail and a proven track record, i present to you a curation of my best work</p>
            <p className="text-[18px]">currently product design at caninestudio</p>
          </div>
          <div className="py-2 text-[#2a2a2a]">
            <p className="text-[18px]">i also write about life, design and everything in between on my weird blog named <a href="#" className="text-underline">timecapsule</a></p>
          </div>
          <div className="py-2 t  ext-[#2a2a2a]">
            <p className="text-[18px] text-black">reach out to me at,</p>
            <p className="text-[18px] text-black"><a className="text-red-500" href="mailto:me@siddharthborman.xyz">mail</a><a className="text-red-500" href="https://x.com/siddharthborman"></a>, <a className="text-red-500" href="#">x</a>, <a className="text-red-500" href="#">instagram</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
