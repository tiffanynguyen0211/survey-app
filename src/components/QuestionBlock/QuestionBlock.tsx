import { FaPlus, FaTimes } from 'react-icons/fa';

import Button from '../../elements/Button';
import TextField from '../../elements/TextField';

import { Question } from '../../type/globalType';

import './QuestionBlock.scss';

type SurveryQuestionProps = {
    questionIndex: number;
    questionID: string;
    questionLabel: string;
    answers: string[];
    onChange?: (value: Question) => void;
    onDelete?: (questionId: string) => void;
};

/**
 * Survey Question Block Component
 */
const SurveyQuestion: React.FC<SurveryQuestionProps> = ({
    questionIndex,
    questionID,
    questionLabel,
    answers = [],
    onChange = () => {},
    onDelete = () => {},
}) => {
    return (
        <fieldset className="QuestionBlock">
            <TextField
                label={'Question'}
                className="QuestionBlock__Question"
                value={questionLabel}
                placeholder={''}
                ariaLabel={`Form Label`}
                onChange={(e: string) => {
                    onChange({
                        id: questionID,
                        questionLabel: e,
                        answers: answers,
                        type: 'text',
                    });
                }}
            />
            {answers.length > 0 &&
                answers.map((a, index) => (
                    <div className="QuestionBlock__Answer">
                        <TextField
                            key={`${index}--answer`}
                            label={'Answer'}
                            className="QuestionBlock__Answer"
                            value={a}
                            placeholder={''}
                            ariaLabel={`Form Label`}
                            onChange={(e: string) => {
                                const newArr = [...answers];
                                newArr[index] = e;
                                onChange({
                                    id: questionID,
                                    questionLabel: questionLabel,
                                    answers: newArr,
                                    type: 'text',
                                });
                            }}
                        />
                        {index > 0 && (
                            <Button
                                classNames="QuestionBlock__Button--delete QuestionBlock__Button--top10 Button--bare"
                                ariaLabel="delete answer"
                                type="button"
                                buttonLabel="Delete Answer"
                                icon={<FaTimes />}
                                onClick={() => {
                                    const newArr = [...answers];
                                    newArr.splice(index, 1);
                                    onChange({
                                        id: questionID,
                                        questionLabel: questionLabel,
                                        answers: newArr,
                                        type: 'text',
                                    });
                                }}
                            />
                        )}
                    </div>
                ))}
            {answers.length < 4 && (
                <Button
                    classNames="QuestionBlock__Button"
                    ariaLabel="add one more answer"
                    type="button"
                    buttonLabel="Add Answer"
                    icon={<FaPlus />}
                    onClick={() => {
                        const newArr = [...answers, 'New Answer'];
                        onChange({
                            id: questionID,
                            questionLabel: questionLabel,
                            answers: newArr,
                            type: 'text',
                        });
                    }}
                />
            )}
            {questionIndex > 0 && (
                <Button
                    classNames="QuestionBlock__Button--delete Button--bare"
                    ariaLabel="delete question"
                    type="button"
                    buttonLabel="Delete Question"
                    icon={<FaTimes />}
                    onClick={() => {
                        onDelete(questionID);
                    }}
                />
            )}
        </fieldset>
    );
};

export default SurveyQuestion;
