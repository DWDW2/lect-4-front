'use client'
import React, { useState } from 'react';
import axios from 'axios';

export const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');

  const [uploadProgress, setUploadProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [loadedBytes, setLoadedBytes] = useState<number | undefined>(0);
  const [totalBytes, setTotalBytes] = useState<number>(0);
  const [fileUrl, setFileUrl] = useState(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    uploadFile(file);
  };

  const uploadFile = (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

    axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
      onUploadProgress: (progressEvent) => {
        const loaded = progressEvent.loaded;
        const total = progressEvent.total;
      if (total !== undefined && loaded !== undefined) {
        setLoadedBytes(loaded);
        setTotalBytes(total);
        const percent = (loaded / total) * 100;
        setUploadProgress(Math.round(percent));
        setStatus(Math.round(percent) + "% uploaded...");
      }
      }
    })
    .then((response) => {
      setStatus("Upload successful!");
      setUploadProgress(100);
      setFileUrl(response.data.location);
      console.log(response.data);
    })
    .catch((error) => {
      setStatus("Upload failed!");
      console.error(error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
  };

  const createPost = () => {
    const productData = {
      title,
      description,
      price,
      category,
      image: fileUrl, 
    }
    localStorage.setItem('productData', JSON.stringify(productData));
    console.log('Product data saved to local storage:', productData);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden mt-5 shadow-xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home</option>
              <option value="beauty">Beauty</option>
              <option value="sports">Sports</option>
              <option value="toys">Toys</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              id="image"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="file-uploader-container mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              File progress:
            </label>
            <progress value={uploadProgress} max="100" className="w-full mb-2" />
            <p>{status}</p>
            <p>Uploaded {loadedBytes} bytes of {totalBytes}</p>
            {fileUrl && <img src={fileUrl} alt="Preview" className="w-full h-auto" />}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
