// import React, { useEffect, useState } from "react";
// import fileService from "./fileService";


// const AdminFileList = () => {
//   const [files, setFiles] = useState([]);
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     fileService
//       .getFiles(0, 50)
//       .then((res) => setFiles(res.data.content))
//       .catch(console.error);
//   }, []);

//   // ===== PREVIEW =====
//   const openPreview = async (file) => {
//     try {
//       const res = await fileService.downloadFileBlob(file.storedName);
//       const blob = new Blob([res.data], { type: file.contentType });
//       const url = URL.createObjectURL(blob);

//       setPreview({
//         url,
//         type: file.contentType,
//         name: file.originalName,
//       });
//     } catch (err) {
//       alert("Preview failed");
//     }
//   };

//   const closePreview = () => {
//     if (preview?.url) URL.revokeObjectURL(preview.url);
//     setPreview(null);
//   };

//   // ===== DOWNLOAD =====
//   const downloadFile = async (file) => {
//     const res = await fileService.downloadFileBlob(file.storedName);
//     const blob = new Blob([res.data], { type: file.contentType });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = file.originalName;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);

//     URL.revokeObjectURL(url);
//   };

//   // ===== ✅ DELETE (ONLY ADDITION) =====
//   const deleteFile = async (id) => {
//     if (!window.confirm("Delete this file?")) return;

//     try {
//       await fileService.deleteFile(id, "ADMIN");
//       setFiles((prev) => prev.filter((f) => f.id !== id));
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="space-y-4">
//       <h2 className="text-lg font-semibold">Documents & Images</h2>

//       {files.map((f) => (
//         <div key={f.id} className="border rounded p-3">
//           <p className="font-medium">{f.originalName}</p>
//           <p className="text-xs text-slate-500">
//             {Math.round(f.size / 1024)} KB · {f.contentType}
//           </p>

//           <div className="mt-2 flex gap-3 text-sm">
//             <button onClick={() => openPreview(f)} className="text-indigo-600">
//               Preview
//             </button>

//             <button
//               onClick={() => downloadFile(f)}
//               className="text-emerald-600"
//             >
//               Download
//             </button>

//             {/* ✅ DELETE BUTTON (ADDED ONLY) */}
//             <button onClick={() => deleteFile(f.id)} className="text-red-600">
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}

//       {/* ===== PREVIEW MODAL ===== */}
//       {preview && (
//         <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
//           <div className="bg-white dark:bg-slate-900 w-11/12 h-5/6 rounded-xl p-4">
//             <div className="flex justify-between mb-2">
//               <p className="font-semibold">{preview.name}</p>
//               <button onClick={closePreview} className="text-red-500">
//                 Close
//               </button>
//             </div>

//             {preview.type.includes("pdf") && (
//               <iframe src={preview.url} className="w-full h-full rounded" />
//             )}

//             {preview.type.startsWith("image") && (
//               <img
//                 src={preview.url}
//                 alt="preview"
//                 className="max-h-full mx-auto rounded"
//               />
//             )}

//             {!preview.type.includes("pdf") &&
//               !preview.type.startsWith("image") && (
//                 <p className="text-center mt-10 text-slate-500">
//                   Preview not supported
//                 </p>
//               )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminFileList;