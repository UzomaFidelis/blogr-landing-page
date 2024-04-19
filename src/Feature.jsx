import editorMobile from "./assets/images/illustration-editor-mobile.svg";
import editorDesktop from "./assets/images/illustration-editor-desktop.svg";
import phoneIllustration from "./assets/images/illustration-phones.svg";
import laptopMobile from "./assets/images/illustration-laptop-mobile.svg";
import laptopDesktop from "./assets/images/illustration-laptop-desktop.svg";
import patternCircle from "./assets/images/bg-pattern-circles.svg";

const Feature = () => {
  return (
    <div
      className={`font-overpass pt-[6.17rem] pb-[5.8rem] flex flex-col justify-center lg:pt-[9rem] lg:pb-[6.2rem] lg:bg-[image:var(--img-url)] lg:bg-no-repeat lg:bg-[position:right_-35vw_top_4vh] lg:bg-[length:923px] xl:bg-[position:right_-30vw_top_4vh] 2xl:bg-[position:right_-20vw_top_2.1vh]`}
      style={{ "--img-url": `url(${editorDesktop})` }}
    >
      <h2 className="text-[1.67rem] text-veryDarkGrayBlue font-semibold tracking-[-0.01em] lg:mt-2 lg:text-[2.3rem]">
        Designed for the future
      </h2>
      <div className="lg:flex lg:flex-row-reverse lg:mt-[6.3rem] ">
        <div className="mt-[1.3rem] mb-[2rem] max-w-full h-[23rem] relative overflow-hidden lg:flex-1 lg:my-0">
          <img
            src={editorMobile}
            alt="editor illustration"
            className=" absolute scale-[1.08] inset-x-2/4 -translate-x-2/4 inset-y-2/4
            -translate-y-2/4 lg:hidden"
          />
        </div>
        <div className="lg:basis-[50%] lg:text-left lg:pl-[10.2rem] lg:pr-6">
          <h2 className="text-[1.68rem]/[2rem] text-veryDarkGrayBlue font-semibold tracking-[0.02em] px-10 lg:px-0">
            Introducing an extensible editor
          </h2>
          <p className="text-[1.1rem]/[1.76rem] px-[1.9rem] mt-[0.9rem] tracking-[-0.02em] text-veryDarkDesaturatedBlue font-light lg:px-0 lg:mt-[1.5rem]">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h2 className="text-[1.69rem]/[2rem] text-veryDarkGrayBlue font-semibold tracking-[0.02em] mt-[2.65rem] px-10 lg:px-0 lg:mt-[5rem]">
            Robust content management
          </h2>
          <p className="text-[1.1rem]/[1.76rem] px-[1.9rem] mt-[1.5rem] tracking-[-0.02em] text-veryDarkDesaturatedBlue font-light lg:px-0 lg:mt-[1.5rem]">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>
      <div className="relative lg:flex lg:mt-[16rem] lg:bg-veryDarkGrayBlue lg:rounded-bl-[6rem] lg:rounded-tr-[6rem]">
        <div
          className="absolute w-full top-[5.1rem] h-[23rem] lg:top-0 lg:relative lg:basis-[50%] lg:bg-[image:var(--img-url)] lg:bg-no-repeat lg:bg-[position:center_-500px] lg:h-auto"
          style={{ "--img-url": `url(${patternCircle})` }}
        >
          <img
            src={phoneIllustration}
            alt="phone illustration"
            className="absolute scale-[1.02] inset-x-2/4 -translate-x-2/4 lg:inset-x-0 lg:translate-x-2 lg:-translate-y-[4.1rem] 2xl:translate-x-32 "
          />
        </div>
        <div
          className="mt-[16.6rem] pt-[14.1rem] px-6 bg-veryDarkGrayBlue text-white rounded-bl-[6rem] rounded-tr-[6rem] bg-[image:var(--img-url)] bg-no-repeat bg-[position:center_-40vh] bg-[length:640px] lg:mt-0 lg:pt-[7.3rem] lg:pl-4 lg:pr-40 lg:text-left lg:flex-1 lg:bg-none lg:rounded-none lg:bg-transparent sm:mt-[25rem] xm:mt-[22rem]"
          style={{ "--img-url": `url(${patternCircle})` }}
        >
          <h2 className="text-[2.4rem]/[3.1rem] tracking-[-0.02em] font-semibold">
            State of the Art Infrastructure
          </h2>
          <p className="mt-5 leading-[1.745rem] px-8 tracking-wide pb-[7.1rem] lg:px-0 lg:pb-[6.4rem]">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
      <div
        className={`lg:flex lg:pt-[17rem] lg:pb-[5.8rem] lg:bg-[image:var(--img-url)] lg:bg-no-repeat lg:bg-[position:-36vw_140px] lg:bg-[length:px] xl:bg-[position:-24vw_140px] 2xl:bg-[position:-20vw_3.5vh]`}
        style={{ "--img-url": `url(${laptopDesktop})` }}
      >
        <div className="mt-[3.5rem] mb-[1.6rem] max-w-full h-[23rem] relative overflow-hidden sm:h-[30rem] lg:basis-[50%]">
          <img
            src={laptopMobile}
            alt="editor illustration"
            className=" absolute scale-[1.32] inset-x-2/4 inset-y-2/4 -translate-x-2/4 -translate-y-2/4 lg:hidden"
          />
        </div>
        <div className="mt-[1.75rem] lg:flex-1 lg:text-left lg:pl-10 lg:pr-32 2xl:pl-4 2xl:pr-48">
          <h2 className="text-[1.78rem]/[3.1rem] tracking-[-0.02em] font-semibold">
            Free, open, simple
          </h2>
          <p className="text-[1.1rem]/[1.76rem] px-[1.9rem] mt-[1.05rem] tracking-[-0.02em] text-veryDarkDesaturatedBlue font-light lg:px-0">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h2 className="text-[1.78rem]/[3.1rem] tracking-[-0.02em] mt-[2.1rem] font-semibold lg:mt-[4rem]">
            Powerful tooling
          </h2>
          <p className="text-[1.1rem]/[1.76rem] px-[1.9rem] mt-[1.05rem] tracking-[-0.02em] text-veryDarkDesaturatedBlue font-light lg:px-0">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
