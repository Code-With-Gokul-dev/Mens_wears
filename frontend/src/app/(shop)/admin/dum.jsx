"use client";
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';

const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];
const API_URL = '/api/upload';

export default function SecureFileUpload() {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isUploading, setIsUploading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    // Clean up memory leaks when component unmounts or file changes
    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const validateAndSetFile = (files) => {
        const selectedFile = files[0];
        if (!selectedFile) return;

        if (selectedFile.size > MAX_SIZE) {
            setStatus({ type: 'error', message: 'File size exceeds the 5MB limit.' });
            clearSelectedFile();
            return;
        }

        if (!ALLOWED_TYPES.includes(selectedFile.type)) {
            setStatus({ type: 'error', message: 'Invalid file type. Only JPG and PNG are allowed.' });
            clearSelectedFile();
            return;
        }

        if (previewUrl) URL.revokeObjectURL(previewUrl);

        setFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile));
        setStatus({ type: 'info', message: `Selected: ${selectedFile.name}` });
        setProgress(0);
    };

    const handleFileChange = (e) => {
        validateAndSetFile(e.target.files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        if (!isUploading) setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (isUploading) return;
        validateAndSetFile(e.dataTransfer.files);
    };

    const triggerFileInput = () => {
        if (!isUploading && !file && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const clearSelectedFile = () => {
        setFile(null);
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
        setProgress(0);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            setStatus({ type: 'error', message: 'Please select a valid file first.' });
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setIsUploading(true);
        setStatus({ type: 'info', message: 'Uploading file...' });

        try {
            const response = await axios.post(API_URL, formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setProgress(percentCompleted);
                },
            });

            if (response.status === 201 || response.status === 200) {
                setStatus({ type: 'success', message: '✅ Uploaded successfully!' });
                clearSelectedFile();
            }
        } catch (error) {
            const backendError = error.response?.data?.error || 'Network error. Please try again.';
            setStatus({ type: 'error', message: `❌ Upload Failed: ${backendError}` });
            setProgress(0);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="min-w-105 mx-auto sj my-10 font-sans p-6 border border-gray-200 rounded-xl shadow-sm bg-white">
            <h3 className="m-0 mb-5 text-ec-gray-900 text-xl font-semibold text-center">Secure File Upload</h3>

            <form onSubmit={handleUpload}>
                {/* Drag and Drop Container */}
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={triggerFileInput}
                    className={`border-2 border-dashed rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-45 transition-all duration-200 ease-in-out
                        ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}
                        ${isUploading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
                        ${file ? 'border-solid border-gray-200 bg-white cursor-default' : ''}
                    `}
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".jpg,.jpeg,.png"
                        className="hidden"
                        disabled={isUploading}
                    />

                    {/* Conditional File Preview / Dropzone Visuals */}
                    {previewUrl ? (
                        <div className="relative w-full max-w-60 rounded-lg overflow-hidden border border-gray-100 shadow-sm" onClick={(e) => e.stopPropagation()}>
                            <img src={previewUrl} alt="Upload Preview" className="w-full h-35 object-fill block" />
                            {!isUploading && (
                                <button
                                    type="button"
                                    onClick={clearSelectedFile}
                                    className="absolute top-2 right-2 bg-gray-900/70 text-white border-none w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold cursor-pointer hover:bg-gray-900 transition-colors"
                                    title="Remove image"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    ) : (
                        <>
                            <svg className="w-10 h-10 text-gray-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="m-0 mb-1 text-[0.95rem] font-medium text-gray-700 leading-normal">
                                {isDragging ? "Drop your file here..." : "Drag & drop file here, or click to browse"}
                            </p>
                            <p className="m-0 text-xs text-gray-400">Max 5MB (JPG, PNG)</p>
                        </>
                    )}
                </div>

                {/* Progress Tracking Bar */}
                {progress > 0 && (
                    <div className="flex items-center gap-3 my-4">
                        <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-150 ease-out
                                    ${status.type === 'error' ? 'bg-red-500' : status.type === 'success' ? 'bg-green-500' : 'bg-blue-600'}
                                `}
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 min-w-9 text-right">{progress}%</span>
                    </div>
                )}

                {/* Status Log Box */}
                {status.message && (
                    <div className={`text-xs font-medium my-3.5 p-2.5 rounded-lg border text-center bg-gray-50 border-gray-100
                        ${status.type === 'error' ? 'text-red-500' : status.type === 'success' ? 'text-green-500' : 'text-gray-600'}
                    `}>
                        {status.message}
                    </div>
                )}

                {/* Submission CTA Trigger */}
                <button
                    type="submit"
                    disabled={!file || isUploading}
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-[0.95rem] transition-colors duration-200
                        ${(!file || isUploading)
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'}
                    `}
                >
                    {isUploading ? 'Uploading...' : 'Upload File'}
                </button>
            </form>
        </div>
    );
}
