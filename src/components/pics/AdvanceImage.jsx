import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import { v4 as uuidv4 } from "uuid";

const AdvanceImage = ({ url }) => {
  const CLOUD_NAME = "dtvf79mkl";
  const [feature, setFeature] = useState("Original");
    useEffect(()=>{
        console.log("Url...",url);
    },[url])
  const advancedFeatures = [
    {
      name: "Original",
      component: <Image cloudName={CLOUD_NAME} publicId={url} />,
    },
    {
      name: "Resizing and Cropping",
      component: (
        <Image cloudName={CLOUD_NAME} publicId={url} width="500" crop="scale" />
      ),
    },
    {
      name: "Grayscale Effect",
      component: (
        <Image cloudName={CLOUD_NAME} publicId={url} effect="grayscale" />
      ),
    },
    {
      name: "Image Quality Adjust",
      component: <Image cloudName={CLOUD_NAME} publicId={url} quality="auto" />,
    },
    {
      name: "Convert to PNG",
      component: <Image cloudName={CLOUD_NAME} publicId={url} format="png" />,
    },
    {
      name: "Adding watermarks",
      component: (
        <Image
          cloudName={CLOUD_NAME}
          publicId={url}
          transformation={{
            width: 400,
            height: 400,
            crop: "thumb",
            overlay: {
              font_family: "Arial",
              font_size: 40,
              text: "My Watermark",
            },
          }}
        />
      ),
    },
    {
      name: "Face detection",
      component: (
        <Image
          cloudName={CLOUD_NAME}
          publicId={url}
          transformation={{
            width: 500,
            height: 500,
            crop: "thumb",
            face: "auto",
          }}
        />
      ),
    },
    {
      name: "Text and image overlays",
      component: (
        <Image
          cloudName={CLOUD_NAME}
          publicId={url}
          overlay="text:arial_30_bold:Hello World!"
          gravity="north_west"
        />
      ),
    },
    {
      name: "Blur Faces",
      component: (
        <Image
          cloudName={CLOUD_NAME}
          publicId={url}
          transformation={{
            width: 500,
            height: 500,
            crop: "thumb",
            effect: "pixelate_faces",
            gravity: "auto",
          }}
        />
      ),
    },
    {
      name: "Image Placeholder",
      component: (
        <Image cloudName={CLOUD_NAME} publicId={url} placeholder="blur" />
      ),
    },
    {
      name: "Multiple Transformation",
      component: (
        <Image
          cloudName={CLOUD_NAME}
          publicId={url}
          transformation={{
            width: 400,
            height: 400,
            crop: "fill",
            effect: "brightness:20",
            angle: 45,
            border: "2px_solid_black",
          }}
        />
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-3">
        {advancedFeatures.map((item) => (
          <div
            className={`flex justify-center items-center border-2 border-slate-600 p-2 rounded-sm shadow-md cursor-pointer ${
              feature === item.name && "bg-green-200 shadow-lg"
            }`}
            onClick={() => setFeature(item.name)}
            key={uuidv4()}
          >
            <p className="text-center font-semibold"> {item.name}</p>
          </div>
        ))}
      </div>
      {advancedFeatures.map(
        (item) =>
          feature === item.name && (
            <div className="mt-5 flex justify-center" key={uuidv4()}>
              {item.component}
            </div>
          )
      )}
    </div>
  );
};

export default AdvanceImage;