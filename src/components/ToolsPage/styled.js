import styled from "styled-components";
import Container from "../Container";

export const ToolsContainer = styled(Container)`
  padding: 20px;
  font-family: "Arial, sans-serif";
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const SearchInput = styled.input`
  width: 70%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 200px;
`;

export const AddButton = styled.button`
  padding: 5px 10px;
  background-color: #00bfff;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #009acd;
  }
`;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Card = styled.div`
  flex: 1 1 calc(25% - 10px);
  min-width: 200px;
  max-width: 23%;
  padding: 20px;
  background-color: #f0f0f0;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Courier New", Courier, monospace;
  background-color: #f6f8fa;
`;

export const SaveButton = styled.button`
  padding: 5px 10px;
  background-color: #28a745;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;
