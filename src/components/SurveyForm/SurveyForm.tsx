import React, { useMemo, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

import SurveyQuestion from '../QuestionBlock';
import TextField from '../../elements/TextField';
import Button from '../../elements/Button';

import { Form, Question } from '../../type/globalType';

import './SurveyForm.scss';

type SurveyFormProps = {
    data: Form;
    onSave: (form: Form) => void;
};

/**
 * Survey New/Edit Form Component
 */
const SurveyForm: React.FC<SurveyFormProps> = ({ data, onSave }) => {
    const [formID, setFormID] = useState('');
    const [formLabel, setFormLabel] = useState('');
    const [formQuestions, setFormQuestions] = useState<Question[]>([]);

    useMemo(() => {
        const { id, title, questions } = data;
        setFormID(id);
        setFormLabel(title);
        setFormQuestions(questions);
    }, [data]);

    return (
        <section className="SurveyForm__Wrapper">
            <TextField
                label="Survey Title"
                className="SurveyForm__Title"
                value={formLabel}
                placeholder={''}
                ariaLabel="Survey Title"
                onChange={(e: string) => {
                    setFormLabel(e);
                }}
            />
            <div className="SurveyForm__Content">
                {formQuestions.length > 0 &&
                    formQuestions.map(
                        ({ id, questionLabel, answers }, index) => (
                            <SurveyQuestion
                                key={id}
                                questionIndex={index}
                                questionID={id}
                                questionLabel={questionLabel}
                                answers={answers}
                                onChange={(selectedQuestion: Question) => {
                                    const newArr = [...formQuestions];
                                    const selectedIndex = formQuestions.findIndex(
                                        question =>
                                            question.id === selectedQuestion.id
                                    );
                                    newArr[selectedIndex] = selectedQuestion;
                                    setFormQuestions(newArr);
                                }}
                                onDelete={(questionId: string) => {
                                    const newArr = [...formQuestions];
                                    const selectedIndex = formQuestions.findIndex(
                                        question => question.id === questionId
                                    );
                                    newArr.splice(selectedIndex, 1);
                                    setFormQuestions(newArr);
                                }}
                            />
                        )
                    )}
            </div>
            <div className="SurveyForm__ButtonGroup">
                <Button
                    classNames="SurveyForm__Button"
                    ariaLabel="add more question"
                    type="button"
                    buttonLabel="Add Question"
                    icon={<FaPlus />}
                    onClick={() => {
                        const newQuestion: Question = {
                            id: uuidv4(),
                            questionLabel: 'New Question',
                            answers: ['New Answer'],
                            type: 'text',
                        };
                        setFormQuestions([...formQuestions, newQuestion]);
                    }}
                    disabled={formQuestions.length === 4}
                />
                <Button
                    classNames="SurveyForm__Button Button--secondary"
                    ariaLabel="click to save"
                    type="submit"
                    buttonLabel="Save"
                    onClick={() => {
                        onSave({
                            id: formID,
                            title: formLabel,
                            questions: formQuestions,
                        });
                    }}
                />
            </div>
        </section>
    );
};

export default SurveyForm;
