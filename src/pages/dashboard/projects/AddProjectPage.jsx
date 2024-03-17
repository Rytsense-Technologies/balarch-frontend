import { BsPrinter } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";

const AddProjectPage = () => {
  return (
    <>
      <div className="float-right flex items-center gap-4 text-gray-600">
        <Link to="" className="flex items-center gap-2">
          <RxUpdate /> Update Project
        </Link>
        <Link to="" className="flex items-center gap-2">
          <RiDeleteBin6Line /> Delete
        </Link>
        <Link to="" className="flex items-center gap-2">
          <BsPrinter /> Scam Report
        </Link>
      </div>
      <div className=" w-full mt-10 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Project Details
      </div>

      <form className="mt-5">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Project Name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Concept
            </label>
            <input
              type="text"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>
        <div>
          <h1 className="flex justify-center mb-5">Photos</h1>
          <div className="grid grid-cols-3 gap-1">
            <img
              src="https://s3-alpha-sig.figma.com/img/8553/8122/874f4bfa979860ec466049cba52af8af?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhGiQmMFgwm3WYPLNgYMf2VLVi0KgeYq21inKAo9jCHdc-7YwL5P-j-sR-d5OoBrgkBlXVPrpmK0qclLIVLCVPERj~z8Qc1H9NDys-kWmjfnz00tIrjHrFdX9FPA06BIF~m7zSS8BerNI1iOW1SkmH-Coiu8JB6f3ti3X5Qw4jP2iHm0Y-H7bLo4Fn9-JGC-vD88oguwtIjjvbIyaCRJNRCblukG-iZ4LyYq3LP0xKSoboeAAXzaPJ8PMaZA-WaKoTTfBPJAqXqKWTcf7NXo1eBEVmtkxR8hHH45zWxRYorxPUeZehap32XdDw4TiVAwoxgKtzsni4Csd5~P3VFSWA__"
              className="w-full h-60"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/e29e/766e/ee0e7382f5900d052f6351fd36f87d6b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppL8lr2-H2pf3YWNnff8Zt9ozFUrdLgPabHMEnF1tCXamqFkOhv-m0qznR2JdjBkYX3-2kU39CRmFmy1byUfD~ECiyZAWGsH5w8M~~czf2estuV8CTZVfSNZmpFMnvst8XyacoDoTYEEOW9PI632OdvPmwY8Swe0k6BXihYFWOC9IZBk3A~emgJ9EK~azyjVOhssrrs8R-zaIkAT1kelj~zk-0NoTHYvz~eknmFirPhySMRHsd2A7Ew4CHAQ6xrBIr5o7sChdDyuTPN-K2EfE4PmeMv79TTjW3e-sggvs0csIQcxqOB-I-cmJ7DgrFdk3o3g6SyISKpy6KxK0R6zfA__"
              className="w-full h-60"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/8553/8122/874f4bfa979860ec466049cba52af8af?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhGiQmMFgwm3WYPLNgYMf2VLVi0KgeYq21inKAo9jCHdc-7YwL5P-j-sR-d5OoBrgkBlXVPrpmK0qclLIVLCVPERj~z8Qc1H9NDys-kWmjfnz00tIrjHrFdX9FPA06BIF~m7zSS8BerNI1iOW1SkmH-Coiu8JB6f3ti3X5Qw4jP2iHm0Y-H7bLo4Fn9-JGC-vD88oguwtIjjvbIyaCRJNRCblukG-iZ4LyYq3LP0xKSoboeAAXzaPJ8PMaZA-WaKoTTfBPJAqXqKWTcf7NXo1eBEVmtkxR8hHH45zWxRYorxPUeZehap32XdDw4TiVAwoxgKtzsni4Csd5~P3VFSWA__"
              className="w-full h-60"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/e29e/766e/ee0e7382f5900d052f6351fd36f87d6b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppL8lr2-H2pf3YWNnff8Zt9ozFUrdLgPabHMEnF1tCXamqFkOhv-m0qznR2JdjBkYX3-2kU39CRmFmy1byUfD~ECiyZAWGsH5w8M~~czf2estuV8CTZVfSNZmpFMnvst8XyacoDoTYEEOW9PI632OdvPmwY8Swe0k6BXihYFWOC9IZBk3A~emgJ9EK~azyjVOhssrrs8R-zaIkAT1kelj~zk-0NoTHYvz~eknmFirPhySMRHsd2A7Ew4CHAQ6xrBIr5o7sChdDyuTPN-K2EfE4PmeMv79TTjW3e-sggvs0csIQcxqOB-I-cmJ7DgrFdk3o3g6SyISKpy6KxK0R6zfA__"
              className="w-full h-60"
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default AddProjectPage;
