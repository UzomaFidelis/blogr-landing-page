const Footer = () => {
  return (
    <div className="bg-veryDarkGrayBlue flex flex-col pt-[4.7rem] pb-14 rounded-tr-[6rem] text-white font-ubuntu lg:flex-row lg:pt-[4.2rem] lg:pb-20">
      <div className="text-center flex justify-center pb-[3.7rem] lg:basis-[20rem] lg:pl-24">
        <img
          src="./src/assets/images/logo.svg"
          alt="logo"
          className="w-[6.1rem] lg:h-[2.5rem]"
        />
      </div>
      <div className="lg:flex lg:justify-around lg:flex-1 lg:pr-56">
        <div className="py-4 lg:py-0">
          <h3 className="text-lg font-medium">Product</h3>
          <ul className="mt-[1.7rem]">
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                Overview
              </a>
            </li>
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                Pricing
              </a>
            </li>
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                Marketplace
              </a>
            </li>
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="" className="text-lg hover:underline">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div className="py-4 mt-3 lg:py-0 lg:mt-0">
          <h3 className="text-lg font-medium">Company</h3>
          <ul className="mt-[1.7rem]">
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                About
              </a>
            </li>
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                Team
              </a>
            </li>
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                Blog
              </a>
            </li>
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="py-4 mt-2 lg:py-0 lg:mt-0">
          <h3 className="text-lg font-medium">Connect</h3>
          <ul className="mt-[1.7rem]">
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                Contact
              </a>
            </li>
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                Newsletter
              </a>
            </li>
            <li className="mb-[0.3rem]">
              <a href="" className="text-lg hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
