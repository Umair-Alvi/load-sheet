import React from 'react'

const LoadSheet = React.forwardRef(({
    logo,
    loadSheetId,
    vendorNname,
    date,
    poc,
    rider,
    tnoParcel,
    tAmount,
    tWeight,
    picAddress,
    oCity,
    hname,
    tdata,

}, ref) => {
  return (
    <div ref={ref}>
          <div className="flex">
            <div className="basis-1/2 left-side "> 
                <div className="m-6">
               {logo}
                </div>

                <  div className="m-2 font-sans ">
                Loadsheet ID
                </  div>

                <  div className="m-2 font-sans">
                Vendor Name
                </  div>

                <  div className="m-2 font-sans ">
                Date
                </  div>

                <  div className="m-2 font-sans">
                POC 
                </  div>

                <  div className="m-2 font-sans">
                Rider
                </  div>

                <  div className="m-2 font-sans">
                Total No. of Parcels 
                </  div>

                <  div className="m-2 font-sans">
                Total Amount 
                </  div>

                <  div className="m-2 font-sans">
                Total Weight
                </  div>

                <  div className="mb-4 mt-6 ml-2 font-sans">
                Pickup Address
                </  div>

                <  div className="ml-2 mt-12 font-sans">
                Origin City
                </  div>
            </div>
      {/* right side */}
            <div className="basis-1/2 right-side">
                <div className="m-4 text-center font-mono ">
                Shipments Received by Qwqer  (QwqerCopy)
                </div>
                <div className="mt-10 text-center font-mono ">
                {loadSheetId}
                </div>
                <div className="m-2 text-center font-mono ">
                {vendorNname}
                </div>
                <div className="m-2 text-center font-mono ">
                {date}
                </div>
                <div className="m-2 text-center font-mono ">
               {poc}
                </div>
                <div className="m-2 text-center font-mono ">
                {rider}
                </div>
                <div className="m-2 text-center font-mono ">
               {tnoParcel}
                </div>
                <div className="m-2 text-center font-mono ">
                {tAmount}
                </div>
                <div className="m-2 text-center font-mono ">
                {tWeight}
                </div>
                <div className="ml-6 text-center font-mono ">
              {picAddress}
                </div>
                <div className="m-2 text-center font-mono ">
                {oCity}
                </div>

                
            </div>

        </div>
    <div className="">
        <table className='  m-2'>
            <thead className='p-4'>
               
                <tr className='m-2 p-4'>
                    <th className='  p-1 w-9 font-sans'> Sr No.</th>
                    <th className='  p-1 w-28 font-sans'> CN Number </th>
                    <th className='   p-1 w-16 font-sans'> Qty </th>
                    <th className='   p-1 w-24 font-sans'> Vendor Order ID</th>
                    <th className='   p-1 w-24 font-sans'> Consignee Name</th>
                    <th className='   p-1 w-16 font-sans'> Phone# </th>
                    <th className='   p-1 w-16 font-sans'> Weight </th>
                    <th className='   p-1 w-28 font-sans'> Destination City</th>
                    <th className='   p-1 w-16 font-sans'> COD</th>
                </tr>
            </thead>

            <tbody>

            {
  tdata.map((item, index) => (
    <tr key={index}>
      <td className='font-bold p-1 w-9 font-sans'>{item.sr}</td>
      <td className='font-bold p-1 w-28 font-sans'>{item.cn}</td>
      <td className='font-bold p-1 w-16 font-sans'>{item.qty}</td>
      <td className='font-bold p-1 w-24 font-sans'>{item.VendorId}</td>
      <td className='font-bold p-1 w-24 font-sans'>{item.Consignee}</td>
      <td className='font-bold p-1 w-16 font-sans'>{item.phone}</td>
      <td className='font-bold p-1 w-16 font-sans'>{item.weight}</td>
      <td className='font-bold p-1 w-28 font-sans'>{item.destination}</td>
      <td className='font-bold p-1 w-16 font-sans'>{item.COD}</td>
    </tr>
  ))
}

         
                
                
            </tbody>


            
        </table>
    </div>

    <div className="m-2 font-mono">
        <p className='text-3xl mb-4 text-red-500 font-mono'>Disclaimer:</p>

        <p className='text-3xl'>SUBH E NOOR PUBLICATIONS is to ensure that the items being handed over to the  Qwqer Pick-up staff are pasted with right address label
        </p>
        <p className='text-3xl'>
        SUBH E NOOR PUBLICATIONS will be responsible for the content packed inside the shipment.
        </p>
        <p className='text-3xl'>
        SUBH E NOOR PUBLICATIONS will ensure the availability of receiver with the required COD amount for hassle free delivery.
        </p>
        <p className='text-3xl'>
        SUBH E NOOR PUBLICATIONS is responsible to ensure that the shipments he receives are properly packed and duly sealed.
        </p>

        <ul className='mt-2 ml-8 font-mono  text-3xl'>
            <li>
            Qwqer is not responsible to pack the shipments and also not responsible for pasting address labels on the shipments.
            </li>

            <li>
             Qwqer is only responsible to collect the booked shipments after proper counting.
            </li>

            <li>
             Qwqer is also authorized to cross check the booked shipments after proper counting.
            </li>

            <li>
            Booked weight may vary with invoice/billing weight as our manifested weight will be treated as final weight.
            </li>
        </ul>
    </div>

    <div className="border-2 border-black m-4 font-mono">
       <div className=" pl-8 pt-12 pb-12">
       <div className='text-3xl font-semibold'>Shipper Representative (Consignments Handed-Over By):</div>
        <p className=" mt-4 text-3xl" >
            Name:{hname}
        </p>
        <div className="flex justify-center pt-4  text-3xl">
        SIGN & STAMP :
        </div>
       </div>
    </div>
    </div>
  )
}
)

export default LoadSheet