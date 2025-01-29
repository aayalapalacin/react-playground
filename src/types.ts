
export interface Step{
    title: string;
    description: string;
    codeSample: string;
}

export interface Tutorial {
    category: string;
    name: string;
    steps: Step[];
    icon : string; 
}

