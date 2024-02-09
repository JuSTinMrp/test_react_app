import React, { useState, useRef } from 'react';
import "./css/Upload.css";
import SideNavBar from '../components/SideNavBar/SideNavBar';
import Navbar from '../components/Navbar/Navbar';
import { ReactComponent as UploadIcon } from '../assests/upload-icon.svg';
import { ReactComponent as Document } from '../assests/document.svg';
import { ReactComponent as Close } from '../assests/close.svg';
import { ReactComponent as Check } from '../assests/check.svg';
import axios from 'axios';

const Upload = () => {
  const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  }

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };

  const handleUpload = async () => {
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    try {
      setUploadStatus("uploading");

      // Validate the file type
      if (!selectedFile.name.endsWith(".apk")) {
        setUploadStatus("error");
        return;
      }

      const formData = new FormData();
      formData.append("apkFile", selectedFile);

      // Simulate a delay to show progress
      setTimeout(async () => {
        // Uncomment the axios request when you have a server to handle the upload
        // const response = await axios.post(
        //   "http://localhost:8000/api/upload",
        //   formData,
        //   {
        //     onUploadProgress: (progressEvent) => {
        //       const percentCompleted = Math.round(
        //         (progressEvent.loaded * 100) / progressEvent.total
        //       );
        //       setProgress(percentCompleted);
        //     },
        //   }
        // );

        setUploadStatus("done");
      }, 1000); // Simulated delay of 1 second (remove this when integrating with a server)
    } catch (error) {
      setUploadStatus("select");
    }
  };

  return (
    <div className="sidebar">
      <SideNavBar />
      <div className="content-container">
        <div className="navbar1">
          <Navbar />
        </div>
        <div className="Upload-container">
          <input
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          {!selectedFile && (
            <button className="file-btn" onClick={onChooseFile}>
              <span className="material-symbols-outlined"><UploadIcon className="upload-icon" /></span>Upload File
            </button>
          )}

          {selectedFile && (
            <>
              {uploadStatus === "error" && (
                <div className="file-info">
                  <div style={{ flex: 1 }}>
                    <h6 style={{ color: "red" }}>Invalid file type. Please upload a valid APK file.</h6>
                    <button onClick={clearFileInput}>
                      <Close className="close-icon" />
                      <span className="material-symbols-outlined close-icon">

                      </span>
                    </button>
                  </div>
                </div>
              )}

              <div className="file-card">
                <span className="material-symbol-outlined icon"><Document className="document-icon" />
                </span>

                <div className="file-info">
                  <div style={{ flex: 1 }}>
                    <h6>{selectedFile.name}</h6>
                    <div className="progress-bg">
                      <div className="progress" style={{ width: `${progress}%` }} />
                    </div>
                  </div>

                  {uploadStatus === "select" ? (
                    <button onClick={clearFileInput}>
                      <Close className="close-icon" />
                      <span className="material-symbols-outlined close-icon">

                      </span>
                    </button>
                  ) : (
                    <div className="check-circle">
                      {uploadStatus === "uploading" ? (
                        `${progress}%`
                      ) : uploadStatus === "done" ? (
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: "20px" }}
                        >
                          <Check className="check-icon" />
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <button className="upload-btn" onClick={handleUpload}>
                  {uploadStatus === "select" || uploadStatus === "uploading"
                    ? "Upload"
                    : "Done"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Upload;
