import React, { useState } from 'react'
import InputTextAll from '../../component/input/InputTextAll';
import { Value } from '../../static/inputHandler';
import { VALIDATE_PROC } from '../../static/validator';

type userType = {
    value: Value;
    setValue: (newValue: Value) => void;
    setSelectTab: (tab: string) => void;
}

function UserNameInput({ value, setValue, setSelectTab }: userType) {

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateData = () => {
        const errors = VALIDATE_PROC.validateUserName({ u: value });
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const nextPage = () => {
        if (validateData()) {
            setSelectTab("Confirm")
        }
    }
    return (
        <div>
            <div className="grid grid-cols-12 p-8 text-sm gap-8">
                <div className="col-span-12 ">
                    <p className="my-2 font-bold">citizen ID <span className='text-red-500'>*</span></p>
                    <InputTextAll
                        value={value.id}
                        onChange={(e) => {
                            setValue({ ...value, id: e.target.value })
                            setErrors({ ...errors, id: "" });
                        }
                        }
                        placeholder="ID"
                        errorDesc={errors.id}
                    />
                </div>
                <div className="col-span-6">
                    <p className="my-2 font-bold">Password <span className='text-red-500'>*</span></p>
                    <InputTextAll
                        value={value.password}
                        onChange={(e) => {
                            setValue({ ...value, password: e.target.value })
                            setErrors({ ...errors, password: "" });
                        }
                        }
                        placeholder="password"
                        errorDesc={errors.password}
                    />
                </div>
                <div className="col-span-6">
                    <p className="my-2 font-bold">Confirm Password <span className='text-red-500'>*</span></p>
                    <InputTextAll
                        value={value.conpassword}
                        onChange={(e) => {
                            setValue({ ...value, conpassword: e.target.value })
                            setErrors({ ...errors, conpassword: "" });
                        }
                        }
                        placeholder="confirm password"
                        errorDesc={errors.conpassword}
                    />
                </div>


                <div className='col-start-1 col-end-3'>
                    <div onClick={() => setSelectTab("Profile")} className=' hover:bg-[#f0f0f0] font-bold text-[#9594a2] p-4 rounded-md text-center  cursor-pointer'>
                        {"<"} Back
                    </div>
                </div> <div className='col-start-11 col-end-13'>
                    <div onClick={() => nextPage()} className='hover:bg-[#2e2ec0] bg-[#0000FF] text-white p-4 rounded-md text-center  cursor-pointer'>
                        Next
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNameInput
