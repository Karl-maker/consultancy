export interface Email<ContextType> {
    template: string;
    context: ContextType;
    to: string;
    from: string;
    subject: string;
}