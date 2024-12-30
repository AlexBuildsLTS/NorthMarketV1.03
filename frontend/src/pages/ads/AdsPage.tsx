import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Dropzone from 'react-dropzone';

const AdsPage: React.FC = () => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const navigate = useNavigate();

    const handleFileDrop = (acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('itemName', itemName);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('category', category);
        files.forEach((file) => formData.append('images', file));

        try {
            const response = await fetch('/api/advertisements', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Advertisement created successfully!');
                navigate('/dashboard');
            } else {
                console.error('Failed to create advertisement');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Create Advertisement</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                ></textarea>
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <Dropzone onDrop={handleFileDrop}>
                    {({getRootProps, getInputProps}) => (
                        <div
                            {...getRootProps()}
                            className="border-2 border-dashed p-4 rounded text-center cursor-pointer"
                        >
                            <input {...getInputProps()} />
                            Drag and drop files here or click to select files
                        </div>
                    )}
                </Dropzone>
                <button
                    type="submit"
                    className="bg-emerald-500 text-white p-2 rounded-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AdsPage;
