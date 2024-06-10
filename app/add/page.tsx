'use client'
import { AddProduct } from '@/components/add-product'
import React, {useState} from 'react'
import axiosInstance from '../api/clientApi';

type Props = {}

export default function Add({}: Props) {
    const [file, setFile] = useState<string>('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [status, setStatus] = useState('');
    const [loadedBytes, setLoadedBytes] = useState<number | undefined>(0);
    const [totalBytes, setTotalBytes] = useState<number | undefined>(0);
  
    const uploadFile = (event: any) => {
      const file = event.target.files[0];
      setFile(URL.createObjectURL(file));
      const formData = new FormData();
      formData.append("file", file);
  
      axiosInstance.post('files/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const loaded = progressEvent.loaded;
          const total = progressEvent.total;
          setLoadedBytes(loaded);
          setTotalBytes(total);
          const percent = (loaded / total) * 100;
          setUploadProgress(Math.round(percent));
          setStatus(Math.round(percent) + "% uploaded...");
        }
      })
      .then((response) => {
        setStatus("Upload successful!");
        setUploadProgress(100);
        console.log(response.data);
      })
      .catch((error) => {
        setStatus("Upload failed!");
        console.error(error);
      });
    };
  return (
    <AddProduct />
  )
}