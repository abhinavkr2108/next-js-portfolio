import { FcAndroidOs, FcKindle, FcMultipleDevices } from "react-icons/fc";

export default function Skills() {
  const features = [
    {
      icon: FcMultipleDevices,
      title: "Web Developemnt",
      desc: "I use MERN Stack Technology along with NextJs and Typescript to build full stack web applications.",
    },
    {
      icon: FcAndroidOs,
      title: "Android Development",
      desc: "Earlier I used Kotlin to build Android applications. Now I use React Native Expo to build Android applications.",
    },
    {
      icon: FcKindle,
      title: "Technical Content Writing",
      desc: "I regularly share my knowledge about MERN Stack, React Native, and NextJs through my tech blog.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            More about my skills
          </h3>
          <p className="mt-3">
            Following are a brief overview of my skills and experience.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-indigo-50 rounded-full flex items-center justify-center">
                  {<item.icon size={32} />}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
