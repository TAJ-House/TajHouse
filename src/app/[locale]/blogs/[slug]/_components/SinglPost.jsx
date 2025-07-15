"use client";

import Image from "next/image";

export default function Home({ id, service }) {
  return (
    <main className="bg-[#eff5fe] text-[#222] font-sans leading-relaxed">
      {/* Hero Section */}
      <section className="max-w-[1200px] justify-center items-center text-center mx-auto grid md:grid-cols-2 gap-10 py-12 px-4 md:px-0">
        <div className="justify-center items-center text-start">
          <h1 className="text-2xl font-bold text-[#2b00ff] mb-4">
            {service.title}
          </h1>
          <p className="text-gray-700 mt-4 leading-loose">{service.desc}</p>
        </div>
        <div className="rounded-xl md:w-[80%] overflow-hidden shadow-md">
          <Image
            src={service.image}
            alt={service.title}
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </section>

      {/* Why Need Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-6 px-4">
          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {service.content.needStoreTitle}
            </h2>
            <ul className="space-y-3 text-gray-700 leading-loose list-disc list-inside">
              {service.content.needStoreList.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Article Contents Box */}
          <aside className="w-full md:w-[320px] bg-[#F3F3F3] border-8 border-[#fff] p-6 rounded-xl shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {service.content.articleBoxTitle}
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              {service.content.articleContents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f4f6fa] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            {service.content.servicesTitle}
          </h2>
          <p className="text-gray-700 mt-4 leading-loose">
            {service.content.servicesIntro}
          </p>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            {service.content.servicesList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#f4f6fa] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">
            {service.content.contactTitle}
          </h2>
          <p>{service.content.contactIntro}</p>
          <ul className="list-disc ml-6 text-gray-700 mt-4">
            <li>
              {service.content.emailLabel}{" "}
              <a className="font-bold text-[#2b00ff]" href={`mailto:${service.content.email}`}>
                {service.content.email}
              </a>
            </li>
            <li>
              {service.content.phoneLabel}{" "}
              <a className="font-bold text-[#2b00ff]" href={`tel:${service.content.phone}`}>
                {service.content.phone}
              </a>
            </li>
            <li>
              {service.content.contactFormText}{" "}
              <span className="font-bold text-[#2b00ff]">{service.content.hereText}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#f4f6fa] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">
            {service.content.commentTitle}
          </h2>
          <form className="space-y-4">
            <textarea
              placeholder={service.content.commentPlaceholder}
              className="w-full p-3 border border-gray-300 rounded"
              rows={5}
            />
            <input
              type="text"
              placeholder={service.content.namePlaceholder}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder={service.content.emailPlaceholder}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder={service.content.phonePlaceholder}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button className="bg-[#1f3ff5] text-white py-3 px-8 rounded hover:bg-[#172fc4] transition">
              {service.content.submitButton}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
