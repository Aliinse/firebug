import React from "react";
import Container from "../Container";
import {QAIsland} from "./styled";
import { QAContent, QAStyleContainer } from "./styled";

/*function ManualTestingPage() {
  return (
    <Container>
      <TestIslnd>
        <h1>Manual Testing</h1>
      </TestIslnd>
    </Container>
  );
}
  */
function ManualTestingPage() {
  return (
    <QAStyleContainer>
    <QAContent>
      <QAIsland>
        <div>
          <h2>Мануальное тестирование: важный этап разработки ПО</h2>
          <br></br>
Мануальное тестирование — это ключевой процесс в разработке программного обеспечения, который включает ручную проверку функциональности приложений без использования автоматизированных инструментов.

Тестировщики, проводя мануальные тесты, анализируют интерфейс, выполняют сценарии и выявляют дефекты. Этот подход позволяет глубже понять пользовательский опыт и выявить ошибки, которые могут остаться незамеченными при автоматизации.

Мануальное тестирование особенно полезно на начальных этапах разработки, когда изменения происходят быстро. Важно обеспечить качество продукта, соответствующее ожиданиям пользователей.
</div>
      </QAIsland>
    </QAContent>
    </QAStyleContainer>
  );
}

export default ManualTestingPage;
