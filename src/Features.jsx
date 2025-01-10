import f1 from "./image/f1.png";
import f2 from "./image/f2.png";
import f3 from "./image/f3.png";
import f4 from "./image/Black.png";
import line from "./image/line.png";

const Features = () => {
  const features = [
    {
      title: "User-Friendly Interface",
      img: f1,
      number: "01",
      description:
        "Our platform offers seamless task management to boost your efficiency.",
    },
    {
      title: "Collaborate & Share",
      img: f2,
      number: "02",
      description:
        "Invite team members to work together and achieve your goals faster.",
    },
    {
      title: "Effortless Collaboration",
      img: f3,
      number: "03",
      description:
        "Invite team members to work together and achieve your goals faster.",
    },
    {
      title: "Seamless Access",
      img: f4,
      number: "04 ",
      description: "Stay connected and manage your tasks on the go with ease.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-0">
        Transform Your Productivity with our
      </h2>
      <h2 className="text-3xl font-bold text-center mb-6">
        Innovative To-Do List Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-4 border rounded shadow  bg-[#F7F7F7] rounded-[10px]"
          >
            <div
              className=" ml-[190px] bottom-4 text-xl  font-weight-800 "
              style={{
                fontFamily: "Raleway,",
                fontSize: "40px",
                color: "gray",
                fontWeight: "800",
                lineHeight: "50px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                width: "55px",
                height: "50px",

                gap: "0px",
                opacity: "0.1",
              }}
            >
              {feature.number}
            </div>

            <div className=" bg-white w-[70px] h-[60px]">
              {" "}
              <img src={feature.img} className="w-[40px] h-[40px] pt-2 pl-2" />
            </div>
            <img src={line} className="mt-5" />
            <h3 className="text-xl font-semibold mb-2 mt-8">{feature.title}</h3>
            <p
              className="mt-4 text-[16px]"
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "300",
                lineHeight: "24px",
                textAlign: "left",
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
