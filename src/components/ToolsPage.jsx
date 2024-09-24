import React, { useState, useEffect, useContext } from "react";

import styled from "styled-components";
import axios from "axios";
import Modal from "react-modal";
import { AppContext } from "../context/AppContext";
import Container from "./Container";

// Стилизация модального окна
Modal.setAppElement("#root");

const ToolsContainer = styled(Container)`
  padding: 20px;
  font-family: "Arial, sans-serif";
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  width: 70%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 200px;
`;

const AddButton = styled.button`
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

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Card = styled.div`
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

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
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

const SaveButton = styled.button`
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

function ToolsPage() {
  const { pageObjects, setPageObjects } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    shortName: "",
    code: "",
  });
  const [errors, setErrors] = useState("");

  // Получение данных с сервера при загрузке компонента
  useEffect(() => {
    fetchPageObjects();
    // eslint-disable-next-line
  }, []);

  const fetchPageObjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/pageObjects");
      setPageObjects(response.data);
    } catch (error) {
      console.error("Ошибка при получении pageObjects:", error);
      setErrors("Не удалось загрузить данные. Пожалуйста, попробуйте позже.");
    }
  };

  const handleAddPageObject = () => {
    setShowModal(true);
  };

  const validateForm = () => {
    const { name, shortName, code } = formValues;
    if (!name || !shortName || !code) {
      setErrors("Пожалуйста, заполните все поля.");
      return false;
    }
    setErrors("");
    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/pageObjects",
        formValues,
      );
      setPageObjects([...pageObjects, response.data]);
      setShowModal(false);
      setFormValues({ name: "", shortName: "", code: "" });
    } catch (error) {
      console.error("Ошибка при сохранении pageObject:", error);
      setErrors("Не удалось сохранить данные. Пожалуйста, попробуйте позже.");
    }
  };

  const handleCardClick = pageObject => {
    Modal.setAppElement("#root");
    Modal.open({
      content: (
        <ModalContent>
          <h2>{pageObject.name}</h2>
          <p>
            <strong>Сокр. название:</strong> {pageObject.shortname}
          </p>
          <pre>{pageObject.code}</pre>
          <SaveButton onClick={() => Modal.close()}>Закрыть</SaveButton>
        </ModalContent>
      ),
      overlayClassName: "modal-overlay",
      className: "modal-content",
    });
  };

  const filteredPageObjects = pageObjects.filter(obj =>
    obj.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <ToolsContainer>
        <Controls>
          <SearchInput
            type="text"
            placeholder="Поиск по pageObject"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <AddButton onClick={handleAddPageObject}>
            Добавить pageObject
          </AddButton>
        </Controls>
        {errors && <ErrorMessage>{errors}</ErrorMessage>}
        <CardGrid>
          {filteredPageObjects.map(obj => (
            <Card key={obj.id} onClick={() => handleCardClick(obj)}>
              <h3>{obj.name}</h3>
              <p>
                <strong>Сокр. название:</strong> {obj.shortname}
              </p>
            </Card>
          ))}
        </CardGrid>
      </ToolsContainer>

      {/* Модальное окно для добавления pageObject */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => {
          setShowModal(false);
          setErrors("");
        }}
        contentLabel="Добавить pageObject"
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            position: "relative",
            inset: "auto",
            padding: "0",
            border: "none",
            borderRadius: "5px",
          },
        }}
      >
        <ModalContent>
          <h2>Добавить pageObject</h2>
          {errors && <ErrorMessage>{errors}</ErrorMessage>}
          <Label>
            Название:
            <Input
              type="text"
              value={formValues.name}
              onChange={e =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
          </Label>
          <Label>
            Сокращённое название:
            <Input
              type="text"
              value={formValues.shortName}
              onChange={e =>
                setFormValues({ ...formValues, shortName: e.target.value })
              }
            />
          </Label>
          <Label>
            Код:
            <TextArea
              value={formValues.code}
              onChange={e =>
                setFormValues({ ...formValues, code: e.target.value })
              }
            />
          </Label>
          <SaveButton onClick={handleSave}>Сохранить</SaveButton>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ToolsPage;
