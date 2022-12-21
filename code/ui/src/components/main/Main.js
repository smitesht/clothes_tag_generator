import React, { useState } from "react";
import axios from "axios";

import {
  FileHandling,
  TagsDetailsWrapper,
  Wrapper,
  FileUploadImage,
  FileUploadButton,
  FileUploadTitle,
  FileChooseButton,
  TagHeaders,
  ImageTagWrapper,
  TagDetails,
  Image,
  ImageWrapper,
  LimitationMessage,
  LimitationMessageWrapper,
} from "./Main.styled";

import { FaCloudUploadAlt } from "react-icons/fa";
import Tag from "./Tag";

const Main = () => {
  const [imagefile, setImagefile] = useState(
    process.env.PUBLIC_URL + "/images/file_upload_image.png"
  );

  const [previewImage, setPreviewImage] = useState(
    process.env.PUBLIC_URL + "/images/file_upload_image.png"
  );

  const [file, setFile] = useState(
    process.env.PUBLIC_URL + "/images/file_upload_image.png"
  );

  const [fileselected, setFileselected] = useState(false);

  const [taglist, setTaglist] = useState([]);

  function choosefile(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setImagefile(process.env.PUBLIC_URL + "/images/file_upload_image.png");
    setFileselected(true);
  }

  function upload_image() {
    const formdata = new FormData();
    //console.log(file.name);
    formdata.append("file", file);

    axios({
      url: "http://localhost:5000/upload",
      method: "post",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((resp) => {
        console.log(resp.data.message);
        setImagefile(URL.createObjectURL(file));
        setTaglist(resp.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function get_all_tags() {
    const tags = taglist.split(" ");
    tags.map((tagval) => {
      return <Tag key={tagval} tagvalue={tagval} />;
    });
  }

  return (
    <Wrapper>
      <FileHandling>
        <FileUploadTitle>
          UPLOAD <span>IMAGE</span>
        </FileUploadTitle>
        <FileUploadImage>
          <img
            src={previewImage}
            alt="Upload File"
            width="280px"
            height="280px"
          />
          <FileChooseButton>
            <label htmlFor="selectimage">Choose File</label>
          </FileChooseButton>

          <input
            name="file"
            type="file"
            id="selectimage"
            accept="image/png, image/jpeg"
            onChange={(e) => choosefile(e)}
          />
        </FileUploadImage>
        <FileUploadButton
          disabled={!fileselected}
          onClick={() => upload_image()}
        >
          <FaCloudUploadAlt size={45} color="#FFF" />
          <span>Generate Tags</span>
        </FileUploadButton>
      </FileHandling>
      <TagsDetailsWrapper>
        <TagHeaders>
          Generate Your Product <strong>Tags</strong>
        </TagHeaders>
        <ImageTagWrapper>
          <ImageWrapper>
            <Image src={imagefile} alt="Your Image File" />
          </ImageWrapper>

          <TagDetails>
            <p>
              <strong>Possible Tags of the image</strong>
            </p>
            <div>
              {taglist.map((tag) => {
                return <Tag key={tag} tagvalue={tag} />;
              })}
            </div>
          </TagDetails>
        </ImageTagWrapper>
        <LimitationMessageWrapper>
          <LimitationMessage>
            <strong>NOTE: </strong>The prediction is limited for{" "}
            <strong>women's Top clothes</strong> only, we will be coming soon
            with more types.
          </LimitationMessage>
        </LimitationMessageWrapper>
      </TagsDetailsWrapper>
    </Wrapper>
  );
};

export default Main;
