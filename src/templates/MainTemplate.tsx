import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import Header from '../components/Header';
import SideNav from '../components/SideNav';
import SurveyForm from '../components/SurveyForm/SurveyForm';
import { v4 as uuidv4 } from 'uuid';
import { Form } from '../type/globalType';

import './MainTemplate.scss';
import Button from '../elements/Button';

const NewSurvey: Form = {
    id: uuidv4(),
    title: 'New Survey',
    questions: [
        {
            id: uuidv4(),
            questionLabel: 'First Question',
            answers: ['First Answer'],
            type: 'text',
        },
    ],
};

const MainTemplate: React.FC<{}> = () => {
    const [forms, setForms] = useState<Form[]>([]);
    const [currentSurvey, setCurrentSurvey] = useState<Form>(NewSurvey);
    const [showForm, setShowForm] = useState(false);

    function onSurveySave(newFormItem: Form) {
        let newForms = [...forms];
        const index =
            newForms.length > 0
                ? newForms.findIndex(eachForm => eachForm.id === newFormItem.id)
                : -1;
        if (index > -1) {
            newForms[index] = newFormItem;
        } else {
            newForms = [...newForms, newFormItem];
        }
        setForms(newForms);
    }
    return (
        <div className="MainTemplate">
            <Header classNames="MainTemplate__Header"></Header>

            <main className="MainTemplate__Content">
                <SideNav classNames="MainTemplate__SideNav">
                    <Button
                        classNames="MainTemplate__Button--desktop"
                        ariaLabel="add one more answer"
                        type="button"
                        buttonLabel="Create New Survey"
                        onClick={() => {
                            setCurrentSurvey({
                                ...NewSurvey,
                                id: uuidv4(),
                            });
                            setShowForm(true);
                        }}
                    />
                    <Button
                        classNames="MainTemplate__Button--mobile"
                        ariaLabel="add one more answer"
                        type="button"
                        buttonLabel="Create New Survey"
                        icon={<FaPlus />}
                        onClick={() => {
                            setCurrentSurvey({
                                ...NewSurvey,
                                id: uuidv4(),
                            });
                            setShowForm(true);
                        }}
                    />
                    {forms && forms.length > 0 && (
                        <ul className="MainTemplate__SideContent">
                            {forms.map(selectedForm => (
                                <li>
                                    <Button
                                        classNames="Button--bare"
                                        ariaLabel={`open ${selectedForm.title} survey `}
                                        type="button"
                                        buttonLabel={selectedForm.title}
                                        onClick={() => {
                                            const selected = forms.find(
                                                f => f.id === selectedForm.id
                                            ) as Form;
                                            setCurrentSurvey(selected);
                                            setShowForm(true);
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </SideNav>
                {showForm && (
                    <SurveyForm
                        data={currentSurvey}
                        onSave={form => {
                            onSurveySave(form);
                        }}
                    />
                )}
            </main>
        </div>
    );
};

export default MainTemplate;
