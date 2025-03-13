import nodemailer from "nodemailer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import { Email } from "@/entities/email"; // Absolute import for Email entity

class SendEmail {
    constructor(
        private emailService: string,
        private emailUser: string,
        private emailPass: string
    ) {}

    private transporter = nodemailer.createTransport({
        service: this.emailService,
        auth: {
            user: this.emailUser,
            pass: this.emailPass,
        }
    });

    private async loadTemplate(templateName: string, content: any): Promise<string> {
        // Using absolute paths for templates and partials
        const partialsDir = path.resolve("src/templates/partials"); // Absolute path to partials
        const templatesDir = path.resolve("src/templates/templates"); // Absolute path to templates

        const headerSource = fs.readFileSync(path.join(partialsDir, "header.hbs"), "utf-8");
        const footerSource = fs.readFileSync(path.join(partialsDir, "footer.hbs"), "utf-8");
        const templateSource = fs.readFileSync(path.join(templatesDir, `${templateName}.hbs`), "utf-8");

        const header = handlebars.compile(headerSource)({});
        const footer = handlebars.compile(footerSource)({});
        const template = handlebars.compile(templateSource);

        return `${header}${template({
            ...content
        })}${footer}`;
    }

    async send<Content, E extends Email<Content>>(email: E): Promise<void> {
        const html = await this.loadTemplate(email.template, email.context);

        const mailOptions = {
            from: email.from,
            to: email.to,
            subject: email.subject,
            html,
        };

        await this.transporter.sendMail(mailOptions);
    }
}

export const sendEmail = async <Content, E extends Email<Content>>(email: E): Promise<void> => {
    try {
        await new SendEmail(
            process.env.EMAIL_SERVICE!,
            process.env.EMAIL_USER!,
            process.env.EMAIL_PASS!
        ).send(email);
    } catch (err) {
        console.error(err);
    }
}
