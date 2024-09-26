import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import Modal from "react-modal";
import { AppContext } from "../../context/AppContext";
import * as StyledTools from './styled'


Modal.setAppElement("#root");

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

  useEffect(() => {
    fetchPageObjects();
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
        <StyledTools.ModalContent>
          <h2>{pageObject.name}</h2>
          <p>
            <strong>Сокр. название:</strong> {pageObject.shortname}
          </p>
          <pre>{pageObject.code}</pre>
          <StyledTools.SaveButton onClick={() => Modal.close()}>Закрыть</StyledTools.SaveButton>
        </StyledTools.ModalContent>
      ),
      overlayClassName: "modal-overlay",
      className: "modal-content",
    });
  };

  const filteredPageObjects = pageObjects.filter(obj =>
    obj.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <StyledTools.ToolsContainer>
        <StyledTools.Controls>
          <StyledTools.SearchInput
            type="text"
            placeholder="Поиск по pageObject"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <StyledTools.AddButton onClick={handleAddPageObject}>
            Добавить pageObject
          </StyledTools.AddButton>
        </StyledTools.Controls>
        {errors && <StyledTools.ErrorMessage>{errors}</StyledTools.ErrorMessage>}
        <StyledTools.CardGrid>
          {filteredPageObjects.map(obj => (
            <StyledTools.Card key={obj.id} onClick={() => handleCardClick(obj)}>
              <h3>{obj.name}</h3>
              <p>
                <strong>Сокр. название:</strong> {obj.shortname}
              </p>
            </StyledTools.Card>
          ))}
        </StyledTools.CardGrid>
      </StyledTools.ToolsContainer>

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
        <StyledTools.ModalContent>
          <h2>Добавить pageObject</h2>
          {errors && <StyledTools.ErrorMessage>{errors}</StyledTools.ErrorMessage>}
          <StyledTools.Label>
            Название:
            <StyledTools.Input
              type="text"
              value={formValues.name}
              onChange={e =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
          </StyledTools.Label>
          <StyledTools.Label>
            Сокращённое название:
            <StyledTools.Input
              type="text"
              value={formValues.shortName}
              onChange={e =>
                setFormValues({ ...formValues, shortName: e.target.value })
              }
            />
          </StyledTools.Label>
          <StyledTools.Label>
            Код:
            <StyledTools.TextArea
              value={formValues.code}
              onChange={e =>
                setFormValues({ ...formValues, code: e.target.value })
              }
            />
          </StyledTools.Label>
          <StyledTools.SaveButton onClick={handleSave}>Сохранить</StyledTools.SaveButton>
        </StyledTools.ModalContent>
      </Modal>
    </>
  );
}

export default ToolsPage;
