import React from 'react';
import { Value } from '../../static/inputHandler';

type typeGender = {
    value: Value;
    setValue: (newValue: Value) => void; // เปลี่ยนประเภทของ setValue ให้ชัดเจน
    errorDesc?: string;
}

function RadioGender({ value, setValue, errorDesc }: typeGender) {
    return (
        <div className='grid md:grid-cols-2 gap-2'>
            <label className='flex border p-2 rounded-md'>
                <input
                    type="radio"
                    value="001"
                    className='accent-[#0000FF]  cursor-pointer'
                    checked={value.gender === "1"}
                    onChange={() => {
                        setValue({
                            ...value,
                            gender: "1",
                        });
                    }}
                />
                <p className='mx-2'>Male</p>
            </label>
            <label className='flex border p-2 rounded-md'>
                <input
                    type="radio"
                    value="002"
                    className='accent-[#0000FF] cursor-pointer'
                    checked={value.gender === "2"}
                    onChange={() => {
                        setValue({
                            ...value,
                            gender: "2",
                        });
                    }}
                />
                <p className='mx-2'>Female</p>
            </label>
            {errorDesc && (
                <p className="text-red-500">{errorDesc}</p>
            )}
        </div>

    );
}

export default RadioGender;
