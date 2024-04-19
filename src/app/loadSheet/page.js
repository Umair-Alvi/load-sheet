"use client"
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import LoadSheet from '../component/LoadSheet';
import Image from 'next/image';

const loadSheet = () => {
    const pdfRef = useRef(null);

    const handleGeneratePdf = async () => {
        try {
                // Check if pdfRef is available
                if (!pdfRef.current)
                {
                    console.error('pdfRef is not available');
                    return;
                }

                const inputData = pdfRef.current;

                const canvas = await html2canvas(inputData);
                const imgData = canvas.toDataURL('image/png');

                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'px',
                    format: 'A4',
                });

                const width = pdf.internal.pageSize.getWidth();
                const height = (canvas.height * width) / canvas.width;

                pdf.addImage(imgData, 'PNG', 2, 5, width, height);
                pdf.save('LoadSheet.pdf');
            } catch (error) {
                console.error('PDF generation error:', error);
            }
    };

            
            

  return (
    <>
      <LoadSheet
       ref={pdfRef}
      logo={ <Image src="/qwqer.png " width={100} height={70} />}
      loadSheetId={"LS-911344205738"}
      vendorNname={"SUBH E NOOR PUBLICATIONS"}
      date={"01/02/2023 , 4:59:31 pm"}
      poc={"Muhammad Ejaz Mudassar"}
      rider={"11917-GM Muhammad Ali LHR-Pickup"}
      tnoParcel={"30"}
      tAmount={"35195"}
      tWeight={"32 kg"}
      picAddress={"Building# 38, Ghazni Street, Urdu Bazar, Lahore"}
      oCity={"Lahore"}
      hname={"Umair"}
        tdata={ [
            {
                "sr": "1",
                "cn": "LYP644075950166",
                "qty":"1",
                "VendorId":"103456",
                "Consignee" :"zain ali kamboh",
                "phone":"03067880329",
                "weight":"1",
                "destination":"LYP",
                "COD":"500"
            },
            {
                "sr": "2",
                "cn": "LYP644075950166",
                "qty":"1",
                "VendorId":"103456",
                "Consignee" :"zain ali kamboh",
                "phone":"03067880329",
                "weight":"1",
                "destination":"LYP",
                "COD":"500"
            },
            {
                "sr": "3",
                "cn": "LYP644075950166",
                "qty":"1",
                "VendorId":"103456",
                "Consignee" :"zain ali kamboh",
                "phone":"03067880329",
                "weight":"1",
                "destination":"LYP",
                "COD":"500"
            },
            
                ]}
      />

      <div className="m-6">
      <button className='m-2 p-3 ml-96 mb-2
             bg-blue-800 text-white font-bold' onClick={handleGeneratePdf}>Download</button>
      </div>
    

    </>

  )
}

export default loadSheet