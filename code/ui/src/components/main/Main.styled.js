import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FileHandling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  border: 1px dashed gray;
  border-radius: 5px;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: white;

  h3 {
    padding: 0.5rem 0;
    color: #004aad;
  }

  span {
    color: #000;
  }
`;

export const TagsDetailsWrapper = styled.div`
  width: 75%;
  background-color: white;
  margin: 0.5rem;
  border: 1px dashed gray;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FileUploadImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  input[type="file"] {
    display: none;
  }
`;

export const FileChooseButton = styled.button`
  padding: 0.7rem 0;
  background-color: #004aad;
  border: 0;
  border-radius: 5px;
  font-size: large;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: white;
  letter-spacing: 1px;
  width: 80%;
  margin: 1rem 0;
`;

export const FileUploadButton = styled.button`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.2rem 0;
  background-color: #00c2cb;
  border: 0;
  border-radius: 5px;
  justify-content: space-evenly;

  &:disabled {
    background-color: lightgrey;
  }

  span {
    font-size: large;
    font-weight: 700;
    font-family: "Open Sans", sans-serif;
    color: white;
    letter-spacing: 1px;
  }
`;

export const FileUploadTitle = styled.h3`
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 5px;
  text-align: center;
  margin: 1rem 0;
`;

export const TagHeaders = styled.p`
  width: 100%;
  font-size: 2rem;
  font-family: "Open Sans", sans-serif;
  padding: 1rem 0;
  text-align: center;
`;

export const ImageTagWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TagDetails = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

export const ImageWrapper = styled.div`
  width: 100%;
  background-color: aliceblue;
`;

export const Image = styled.img`
  padding: 1rem;
  border-radius: 7px;
  width: 400px;
  height: 400px;
`;

export const LimitationMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
`;

export const LimitationMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: small;
  background-color: red;
  padding: 0.25rem;
  color: white;

  strong {
    padding: 0 0.5rem;
  }
`;
