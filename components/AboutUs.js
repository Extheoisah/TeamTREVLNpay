
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="px-8 pb-16 pt-4 hidden md:block">
        <div className='grid place-items-center'>
      <picture className="flex items-center justify-center mb-20 mt-5 border-[1px] border-blue-200 rounded-full py-[25%] px-[20%] w-fit">
        <Image
          src="/icons/bitcoin-logo.svg"
          alt="logo"
          width={30}
          height={30}
        />
        <p className="text-blue-700 font-header text-lg">TREV</p>
      </picture></div>
      <ul className="list-disc text-sm text-blue-700 details">
        <li>
          Trev provides a payment solution that allows you to make payments to
          single or multiple lightning addresses.
        </li>
        <li>
          No need to worry about bitcoin’s market volatity when making payments.{' '}
        </li>
        <li>
          You can tell trev how much of your BTC payment should be sent in
          Bitcoin and how much should be transferred in USD.
        </li>
        <li>
          Send your recipient USD directly from your Bitcoin wallet in real time
          on the lightning network.
        </li>
        <li>
          Have a register of lightning addresses you wish to pay simultaneously?
          You can import the CSV / spreadsheet file and we’ll take make magic
          happen.
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
