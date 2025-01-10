import Map from '@/app/components/map/map';
import Head from 'next/head';

export default function NextVsnLocation() {
  return (
    <div className="min-h-screen6p py-16  flex justify-center items-center">
      <Head>
        <title>NextVSN - Find Us</title>
      </Head>
      <div className="overflow-hidden w-full flex items-center flex-col md:flex-row">
        {/* Left Section - Map */}
        <div className="w-full  rounded-lg h-[450px]">
          <Map address="Community 11 Post Office ; off Tema General Hospital Road"/>
        </div>

        {/* Right Section - Contact Details */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">Find Us</h2>
          <h3 className='text-[18px] text-slate-700 font-medium mb-2'>Locate our offices on the map below. </h3>
          <p className="text-gray-500 mb-6">
            We value your feedback as we
            continuously work to improve Nextvsn. Your input is crucial in
            shaping the future for Nextvsn.
          </p>

          <h3 className="text-[18px] text-slate-700 font-medium mb-2">Feedback and Suggestions</h3>
          <p className="text-gray-500">
            We value your feedback as we continuously work to improve Nextvsn.
            Your input is crucial in shaping the future for Nextvsn.
          </p>
        </div>
      </div>
    </div>
  );
}
