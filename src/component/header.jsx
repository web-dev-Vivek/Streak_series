function HEADER() {
  return (
    <>
      <div className="fixed flex justify-between items-center p-5 top-0 text-lg w-full h-16 ">
        <div className="flex justify-start items-center">
          <div className="mx-4">Home</div>
          <div className="mx-4">About</div>
          <div className="mx-4">Projects</div>
          <div className="mx-4">Contact</div>
        </div>
        <div className="flex-grow flex gap-5 justify-end items-center">
          <p className="text-center font-bold">Contact Us</p>
          <button className="text-white px-4 py-2 ">Register</button>
        </div>
      </div>
    </>
  );
}
export default HEADER;
