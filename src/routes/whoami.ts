import express,{Request,Response} from 'express';

const router = express.Router();

router.get('/api/whoami/',(req:Request,res:Response)=>{
    let ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let language = req.headers["accept-language"];
    let software = req.headers["user-agent"];

    
    console.log(ipaddress);
    console.log(language);
    console.log(software);
    res.json({ipaddress:ipaddress,language:language,software:software});
})

export {router as WhoAmIRouter};