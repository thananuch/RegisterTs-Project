type ImagePreviewProps = {
    file: File | null;
};

const ImagePreview = ({ file }: ImagePreviewProps) => {
    if (!file) {
        return null;
    }

    return (
        <div>
            <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="shadow-md border rounded-full bg-slate-200 w-32 h-32"
            />
        </div>
    );
};

export default ImagePreview;