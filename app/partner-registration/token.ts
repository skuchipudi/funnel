export class Token{
    private secretKey: string;
    private status: string;

    constructor(secretKey: string, status:string) {
        this.secretKey = secretKey;
        this.status = status;
    }
}
