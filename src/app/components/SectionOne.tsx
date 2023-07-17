import Image from "next/image";

const SectionOne = () => {
  return (
    <section className="text-wbite body-font m-0">
      <div className="container px-5 py-20 pb-5 mx-auto">
        <div className="flex items-center lg:w-5/5 mx-auto pb-10 mb-10 sm:flex-row flex-col">
          <div className="sm:w-140 sm:h-140 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <Image src="/images/hero.svg" alt="pic" width={500} height={500} />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 border-slate-600">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
            <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, sunt enim! Modi sequi nisi, dolores, officiis dignissimos commodi animi totam dolorum unde harum vel, consequuntur beatae accusantium id eligendi? Omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolore eveniet autem deserunt totam culpa corrupti! Qui dolorem doloribus ducimus delectus fugit natus corrupti voluptatum facere nihil. Corrupti, inventore laborum? Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <span className="mt-3 text-indigo-500 inline-flex items-center">Learn More</span>
          </div>
        </div>

        <div className="flex items-center lg:w-5/5 mx-auto pb-10 mb-1 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
            <p className="leading-relaxed text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolore eveniet autem deserunt totam culpa corrupti! Qui dolorem doloribus ducimus delectus fugit natus corrupti voluptatum facere nihil. Corrupti, inventore laborum? Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <span className="mt-3 text-indigo-500 inline-flex items-center">Learn More</span>
          </div>
          <div className="sm:w-140 sm:h-140 sm:ml-10 sm:order-none order-first inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <Image src="/images/hero.svg" alt="pic" width={500} height={500} />
          </div>
        </div>

        <div className="flex items-center lg:w-5/5 mx-auto pb-10 mb-1 sm:flex-row flex-col">
          <div className="sm:w-140 sm:h-140 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <Image src="/images/hero.svg" alt="pic" width={500} height={500} />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
            <p className="leading-relaxed text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolore eveniet autem deserunt totam culpa corrupti! Qui dolorem doloribus ducimus delectus fugit natus corrupti voluptatum facere nihil. Corrupti, inventore laborum? Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <span className="mt-3 text-indigo-500 inline-flex items-center">Learn More</span>
          </div>
        </div>

        <div className="flex items-center lg:w-5/5 mx-auto pb-10 mb-10 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
            <p className="leading-relaxed text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolore eveniet autem deserunt totam culpa corrupti! Qui dolorem doloribus ducimus delectus fugit natus corrupti voluptatum facere nihil. Corrupti, inventore laborum? Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <span className="mt-3 text-indigo-500 inline-flex items-center">Learn More</span>
          </div>
          <div className="sm:w-140 sm:h-140 sm:ml-10 sm:order-none order-first inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <Image src="/images/hero.svg" alt="pic" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
