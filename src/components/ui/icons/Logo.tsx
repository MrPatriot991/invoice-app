import InvoiceIcon from "./InvoiceIcon";

const Logo = () => {
  return (
    <div className="">
      <div className="absolute left-0 top-0 h-[72px] w-[72px] overflow-hidden rounded-r-3xl sm:h-[80px] sm:w-[80px] lg:h-[103px] lg:w-[103px]">
        <div className="absolute left-0 top-0 h-full w-full bg-purple" />
        <div className="absolute bottom-0 right-0 z-10 h-1/2 w-full rounded-tl-3xl bg-purpleLight" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <InvoiceIcon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
