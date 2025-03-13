import { Email } from "./email";

export interface ContactEmail extends Email<{
    customer: {
        name: string;
        mobile: string;
        email: string;
        message: string;
    }
}> {
    template: 'contact';
    context: {
        customer: {
            name: string;
            mobile: string;
            email: string;
            message: string;
            subject: string;
        }
    };
    to: string;
    from: string;
    subject: string;
}