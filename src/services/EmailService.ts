import nodemailer from 'nodemailer';
export default class EmailService
{

    private host: string;
    private auth_user: string;
    private auth_pass: string;
    private secure: boolean;
    private port: number;
    private transporter: any;

    constructor(host:string, auth_user:string, auth_pass:string, port: number, secure:boolean)
    {
        this.host = host;
        this.auth_user = auth_user;
        this.auth_pass = auth_pass;
        this.port = port;
        this.secure = secure;
    }

    async setTranport() : Promise<object>
    {
        try
        {
            this.transporter = await nodemailer.createTransport({
                host: this.host,
                port: this.port,
                secure: this.secure,
                auth: {
                    user: this.auth_user,
                    pass: this.auth_pass
                }
            });
            return {
                message: "setado com sucesso!",
                return: this.transporter,
            };
        }
        catch(err)
        {
            throw new Error(`Erro ao setar trasportador dos emails => erro (${err}`)
        }
    }

    async sendEmail(from: string, to: string, subject: string, text: string) : Promise<object>
    {
        let mail : object = {
            from,
            to,
            subject,
            text
        };

        let result;
        try
        {
            result = await this.transporter.sendMail(mail).then(() => console.log("enviou, tentou pelo menos"));
            return {
                message: `Email enviado com sucesso, de '${from}' para '${to}'`,
                return: result
            }
        }
        catch(err: any)
        {
            throw new Error(`Erro ao enviar email, Erro => (${err})`);
        }
    }

}