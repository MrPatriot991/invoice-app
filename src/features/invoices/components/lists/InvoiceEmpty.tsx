import imgEmpty from "@/assets/icons/illustration-empty.svg";

const InvoiceEmpty = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-52 max-w-64">
        <img
          className="h-full w-full object-contain"
          src={imgEmpty}
          alt="Illustration of an empty state or page"
        />
      </div>
      <h4 className="heading-m mt-8 text-primary transition-colors duration-300 md:mt-12">
        There is nothing here
      </h4>
      <div className="body-variant mt-6 flex flex-col gap-1 text-center text-tertiary transition-colors duration-300">
        <p>Create an invoice by clicking the</p>
        <p>
          <b>
            New <b className="hidden sm:inline">Invoice</b>
          </b>
          button and get started
        </p>
      </div>
    </div>
  );
};

export default InvoiceEmpty;
