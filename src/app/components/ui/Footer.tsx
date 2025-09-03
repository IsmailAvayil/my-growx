import Button from "@/app/reusable-components/Button";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Our Company",
      links: ["Home", "About", "Services", "News", "Contact"],
    },
    {
      title: "Services",
      links: [
        "Market Research",
        "Market Analysis",
        "SEO Consultancy",
        "Page Ranking",
        "SMM",
      ],
    },
    {
      title: "Features",
      links: [
        "Brand Strategy",
        "Audience Analytics",
        "Copywriting",
        "Team Training",
        "Email Marketing",
      ],
    },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook", url: "#" },
    { icon: "fab fa-linkedin", url: "#" },
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-instagram", url: "#" },
  ];

  return (
    <footer className="bg-gradient-to-r from-orange-600 to-orange-400 text-white">
      <div className="grid  grid-cols-12 gap-[81.75px] py-12 px-[80px]">
        <div className="col-span-4">
          <div className="mb-4 flex items-center">
            <img
              src="assets/icons/white-logo.svg"
              alt="logo"
              width={50}
              height={50}
            />
            <h2 className="!text-[#FFEFEA] !text-[32px] font-[500]">GrowX</h2>
          </div>
          <p className="mb-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div className="flex space-x-4 mt-4 text-xl">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url}>
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map((section, index) => (
          <div key={index} className="col-span-2 gap-y-[20px]">
            <h3 className="!font-[500] !text-[20px] mb-4 text-[#000000]">
              {section.title}
            </h3>
            <ul className="space-y-[20px] text-sm font-[400]">
              {section.links.map((link, i) => (
                <li key={i} className="text-[#000000]">
                  <Link href={`/${link.toLowerCase()}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 flex flex-col gap-[32px]">
          <h3 className="!font-[500] !text-[20px]  text-[#000000]">
            Subscribe
          </h3>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded  text-black bg-[#ffffff]"
          />
          <Button text="Contact Us" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
