import React, { useEffect, useRef, useState } from "react";
import { getSignedUrl } from "../../services/api";
function Home() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState("");

  const fileInputRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const response = await getSignedUrl();
      console.log(response.url);
      setUrl(response.url);
    };
    getData();
  }, []);

  return (
    <div className="h-screen">
      <div className=" mt-20 lg:w-[900px] md:w-[400px] bg-slate-200 mx-auto  ">
        <div className="card-body p-10">
          <h1 className="text-2xl font-bold">File Buddy</h1>
          <p className="mt-3">
            Convenient file sharing in three steps without registration.
          </p>
          <p className="mt-3">
            {" "}
            <span className="me-2">1.</span>{" "}
            <input
              type="file"
              name=""
              id=""
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="px-5 bg-blue-600 text-white rounded-lg py-2 me-2"
            >
              {" "}
              Select to File Upload
            </button>
            or drag-and-drop files into this browser window.
          </p>
          <p className="mt-3">
            {" "}
            <span className="me-2">2.</span> Wait Untile The file upload.
          </p>
          <p className="mt-3">
            {" "}
            <span className="me-2">3.</span> The files will be available at{" "}
            <a className="underline text-blue-700" href={url.split("?")[0]}>
              {url.split("?")[0]}
            </a>{" "}
            which is a link you can share.
          </p>
          <p className="mt-10">
            The file uploads will cancel if you move away from this page before
            they complete. Uploaded files can be deleted manually at any time
            and will in any case be deleted automatically 6 days from now.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
