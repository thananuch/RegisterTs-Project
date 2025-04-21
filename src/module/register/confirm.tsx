import React from 'react'
import { API_REQUEST_URL, postRequest } from '../../static/requestUrls';
import { Value } from '../../static/inputHandler';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Swal from 'sweetalert2';

type confirmType = {
    value: Value;
    setLoadingCallback: (load: boolean) => void;
    setSelectTab: (tab: string) => void;
}

function Confirm({ value, setLoadingCallback, setSelectTab }: confirmType) {

    const saveMember = () => {
        setLoadingCallback(true);
        postRequest(
            API_REQUEST_URL.URL_POST_member,
            value,
            (response) => {
                console.log(response)
                if (response.data) {
                    //
                }
            },
            (error) => {
                console.log(error.status)
                if (error.status === 400) {
                    Swal.fire({
                        icon: "error",
                        title: "แจ้งเตือน",
                        html: "มีผู้ใช้งานนี้แล้วกรุณาระบุ Citizen ID ใหม่",
                        confirmButtonText: "ตกลง",
                        allowOutsideClick: false,
                    });
                }
                // Swal.fire({
                //   icon: "error",
                //   title: "แจ้งเตือน",
                //   html: error.response.data
                //     ? error.response.data.errors[0].description
                //     : "มีปัญหาระหว่างการประมวลผลข้อมูล กรุณาแจ้งผู้ดูแลระบบ",
                //   confirmButtonText: "ตกลง",
                //   allowOutsideClick: false,
                // });

            },
            () => {
                setLoadingCallback(false);
            }
        );
    };
    return (
        <div>
            <div className='pt-8 px-8 font-bold'>
                <div className='flex'>
                    <CheckCircleIcon className="w-[1.5rem] h-[1.5rem] text-center text-green-500" />
                    <span className='mx-2'>Confirm register</span>
                </div>
            </div>

            <div className="grid grid-cols-12 p-8 text-sm gap-8">
                <div className="col-span-12 md:col-span-6">
                    <p className="my-2 font-bold">citizen ID</p>
                    <span className='text-[#aba9bb]'>{value.id}</span>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <p className="my-2 font-bold">name</p>
                    <span className='text-[#aba9bb]'>{value.name}</span>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <p className="my-2 font-bold">lastname</p>
                    <span className='text-[#aba9bb]'>{value.lastname}</span>
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <p className='my-2 font-bold'>email</p>
                    <span className='text-[#aba9bb]'>{value.email}</span>
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <p className='my-2 font-bold'>phone</p>
                    <span className='text-[#aba9bb]'>{value.phone}</span>
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <p className='my-2 font-bold'>gender</p>
                    <span className='text-[#aba9bb]'>{value.gender}</span>
                </div>

                <div className='md:col-span-12 col-span-12'>
                    <p className='my-2 font-bold'>address</p>
                    <span className='text-[#aba9bb]'>{value.address}</span>
                </div>

                <div className='col-start-1 col-end-3'>
                    <div onClick={() => setSelectTab("UserName")} className='hover:bg-[#f0f0f0] text-[#9594a2] p-4 rounded-md text-center  cursor-pointer font-bold'>
                        {"<"} Back
                    </div>
                </div> <div className='col-start-11 col-end-13'>
                    <div onClick={() => saveMember()} className='hover:bg-[#2e2ec0] bg-[#0000FF] text-white p-4 rounded-md text-center  cursor-pointer'>
                        Submit
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Confirm
