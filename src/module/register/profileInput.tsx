import React, { useState } from 'react'
import InputTextAll from '../../component/input/InputTextAll';
import RadioGender from '../../component/input/RadioGender';
import { Value } from '../../static/inputHandler';
import { VALIDATE_PROC } from '../../static/validator';
import ImagesForm from '../../component/input/imagesForm';
import InputDate from '../../component/input/InputDate';

type profileType = {
    value: Value;
    setValue: (newValue: Value) => void;
    setSelectTab: (tab: string) => void;
}

function ProfileInput({ value, setValue, setSelectTab }: profileType) {

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateData = () => {
        const errors = VALIDATE_PROC.validateProfile({ p: value });
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const nextPage = () => {
        if (validateData()) {
            setSelectTab("UserName")
        }
    }

    return (
        <div>
            <div className='px-8 pt-8'><ImagesForm /></div>
            <div className="grid grid-cols-12 p-8 text-sm gap-8">
                <div className="col-span-12 md:col-span-6">
                    <p className="my-2 font-bold">name <span className='text-red-500'>*</span></p>
                    <InputTextAll
                        value={value.name}
                        onChange={
                            (e) => {
                                setValue({ ...value, name: e.target.value })
                                setErrors({ ...errors, name: "" });
                            }
                        }
                        placeholder="name"
                        errorDesc={errors.name}
                    />
                </div>


                <div className="col-span-12 md:col-span-6">
                    <p className="my-2 font-bold">lastname <span className='text-red-500'>*</span></p>
                    <InputTextAll
                        value={value.lastname}
                        onChange={(e) => {
                            setValue({ ...value, lastname: e.target.value })
                            setErrors({ ...errors, lastname: "" });
                        }
                        }
                        placeholder="lastname"
                        errorDesc={errors.lastname}
                    />
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <p className='my-2 font-bold'>email <span className='text-red-500'>*</span></p>
                    <InputTextAll
                        value={value.email}
                        onChange={(e) => {
                            setValue({ ...value, email: e.target.value })
                            setErrors({ ...errors, email: "" });
                        }
                        }

                        placeholder='email'
                        errorDesc={errors.email}

                    />
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <p className='my-2 font-bold'>phone <span className='text-red-500'>*</span></p>
                    <InputTextAll
                        value={value.phone}
                        onChange={(e) => {
                            setValue({ ...value, phone: e.target.value })
                            setErrors({ ...errors, phone: "" });
                        }
                        }
                        placeholder='phone'
                        errorDesc={errors.phone}

                    />
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <p className='my-2 font-bold'>gender <span className='text-red-500'>*</span></p>
                    <RadioGender value={value} setValue={setValue} errorDesc={errors.gender} />
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <p className='my-2 font-bold'>BirthDate <span className='text-red-500'>*</span></p>
                    <InputDate
                        inDate={value.birthDate}
                        placeholder="DD/MM/YYYY"
                        setDateCallback={(date) => {
                            setValue({
                                ...value,
                                birthDate: date,
                            });
                            setErrors({ ...errors, birthDate: "" });
                        }}
                        errorDesc={errors.birthDate}
                    />
                </div>

                <div className='md:col-span-12 col-span-12'>
                    <p className='my-2 font-bold'>address <span className='text-red-500'>*</span></p>
                    <InputTextAll
                        value={value.address}
                        onChange={(e) => {
                            setValue({ ...value, address: e.target.value })
                            setErrors({ ...errors, address: "" });
                        }
                        }
                        placeholder='address'
                        errorDesc={errors.address}
                    />
                </div>
                <div className='md:col-start-11 col-start-1 col-end-13'>
                    <div onClick={() => nextPage()} className='hover:bg-[#2e2ec0] bg-[#0000FF] text-white p-4 rounded-md text-center cursor-pointer'>
                        Next
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInput
