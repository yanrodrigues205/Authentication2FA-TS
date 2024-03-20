interface ITwoFactors
{
    id : string;
    email : string;
    code : string;
    checked : boolean;
    validity : Date;
}

export default ITwoFactors;