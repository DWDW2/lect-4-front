'use client'
import React, { useState } from 'react';
import axios from 'axios';

export const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [files, setFiles] = useState([]);
  const [fileUrls, setFileUrls] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [status, setStatus] = useState('');

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    selectedFiles.forEach((file) => uploadFile(file));
  };

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
      onUploadProgress: (progressEvent) => {
        const loaded = progressEvent.loaded;
        const total = progressEvent.total;
        const percent = Math.round((loaded / total) * 100);
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [file.name]: percent,
        }));
        setStatus(`${file.name}: ${percent}% uploaded...`);
      },
    })
      .then((response) => {
        setStatus(`${file.name}: Upload successful!`);
        setFileUrls((prevUrls) => [...prevUrls, response.data.location]);
      })
      .catch((error) => {
        setStatus(`${file.name}: Upload failed!`);
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
      images: fileUrls, // Save the uploaded file URLs
    };
    // Save the data to local storage
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
              Images
            </label>
            <input
              type="file"
              id="image"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={handleFilesChange}
              multiple
              required
            />
          </div>
          <div className="file-uploader-container mb-4">
            {files.map((file, index) => (
              <div key={index}>
                <label className="block text-gray-700 font-bold mb-2">
                  {file.name} progress:
                </label>
                <progress value={uploadProgress[file.name]} max="100" className="w-full mb-2" />
              </div>
            ))}
            <p>{status}</p>
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
