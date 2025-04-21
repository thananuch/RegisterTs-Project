import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";
import ProfileInput from './profileInput';
import UserNameInput from './userNameInput';
import Confirm from './confirm';

type regisType = {
    setLoadingCallback: (load: boolean) => void;
}

function RegisterPage({ setLoadingCallback }: regisType) {
    const [value, setValue] = useState<any>([]);
    const [selectTab, setSelectTab] = useState<String>("Profile")

    useEffect(() => {
        setValue({
            ...value,
            gender: "1",
        });
    }, []);

    return (
        <div>
            <div className='App-header font-promptRegu'>
                <div className='container mx-auto'>
                    <p className='px-4 py-2 text-lg font-bold text-[#9594a2]'>Register</p>
                    <div className='flex flex-col md:flex-row  gap-4 p-4'>
                        <div className='md:w-64 h-full max-h-1/4 bg-white border border-gray-100 shadow rounded-md'>
                            <div
                                onClick={() => selectTab === "UserName" || selectTab === "Confirm" ? setSelectTab("Profile") : ""}
                                className={` ${selectTab === "Profile"
                                    ? "bg-[#c7c8ff] text-[#0000FF] font-bold"
                                    : selectTab === "UserName" || selectTab === "Confirm" ? "hover:text-[#0000FF] text-[#aba9bb]"
                                        : "text-[#aba9bb]"
                                    } flex justify-between my-4 cursor-pointer`}
                            >
                                <div className='flex justify-center  items-center gap-4  p-2'>
                                    <UserIcon className="w-[2rem] h-[2rem] text-center" />
                                    <p>Profile</p>
                                </div>
                                {selectTab === "Profile" && <div className='bg-[#0000FF] w-[0.3rem]'></div>}
                            </div>
                            <div
                                onClick={() => selectTab === "Confirm" ? setSelectTab("UserName") : ""}
                                className={` ${selectTab === "UserName"
                                    ? "bg-[#c7c8ff] text-[#0000FF] font-bold"
                                    : selectTab === "Confirm" ? "hover:text-[#0000FF] text-[#aba9bb]"
                                        : "text-[#aba9bb]"
                                    } flex justify-between my-4  cursor-pointer`}
                            >
                                <div className='flex justify-center items-center gap-4 p-2'>
                                    <LockClosedIcon className="w-[2rem] h-[2rem] text-center " />
                                    <p>UserName / Password</p>
                                </div>
                                {selectTab === "UserName" && <div className='bg-[#0000FF] w-[0.3rem]'></div>}
                            </div>
                            <div
                                className={` ${selectTab === "Confirm"
                                    ? "bg-[#c7c8ff] text-[#0000FF] font-bold"
                                    : selectTab === "Confirm" ? "hover:text-[#0000FF] text-[#aba9bb]"
                                        : "text-[#aba9bb]"
                                    } flex justify-between my-4  cursor-pointer`}
                            >
                                <div className='flex justify-center items-center gap-4 p-2'>
                                    <CheckCircleIcon className="w-[2rem] h-[2rem] text-center " />
                                    <p>Confirm</p>
                                </div>
                                {selectTab === "Confirm" && <div className='bg-[#0000FF] w-[0.3rem]'></div>}
                            </div>
                        </div>
                        <div className='flex-1 bg-white border rounded-md'>
                            {selectTab === "Profile" && <ProfileInput value={value} setValue={setValue} setSelectTab={setSelectTab} />}
                            {selectTab === "UserName" && <UserNameInput value={value} setValue={setValue} setSelectTab={setSelectTab} />}
                            {selectTab === "Confirm" && <Confirm value={value} setLoadingCallback={setLoadingCallback} setSelectTab={setSelectTab} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
