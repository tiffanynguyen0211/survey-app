
export type Question = {
    id: string;
    questionLabel: string;
    answers: string[];
    type: "text" | "yesno";
  
};

export type Form = {
    id: string;
    title: string;
    questions: Question[];
};