import React, { useState } from 'react';

const StepListComponent = ({ steps, onSelectStep }) => {
    const [newStep, setNewStep] = useState('');

    const handleAddStep = () => {
        if (newStep.trim() !== '') {
            onSelectStep(newStep);
            setNewStep('');
        }
    };

    return (
        <div>
            <div>
                <button onClick={() => handleAddStep()}>Шаг</button>
                <button onClick={() => handleAddStep()}>Категория шага</button>
            </div>
            <ul>
                {steps.map((step, index) => (
                    <li key={index} onClick={() => onSelectStep(step)}>
                        {step}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StepListComponent;