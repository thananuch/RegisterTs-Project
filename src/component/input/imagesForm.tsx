import React, { useState } from "react";
import ImagePreview from "./ImagePreview";
import { CameraIcon } from "@heroicons/react/24/solid";

const ImagesForm = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            setFile(fileList[0]);
        } else {
            setFile(null);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className="relative">
                {file ? <ImagePreview file={file} /> : <><div className="relative rounded-full bg-slate-200 w-32 h-32"></div></>}
                <label className="absolute left-24 bottom-0">
                    <CameraIcon className="w-[2rem] h-[2rem] hover:bg-[#2e2ec0] bg-[#0000FF] text-white rounded-full p-2 cursor-pointer" />
                    <input
                        style={{ display: "none" }}
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </label>
            </div>
        </form>
    );
};

export default ImagesForm