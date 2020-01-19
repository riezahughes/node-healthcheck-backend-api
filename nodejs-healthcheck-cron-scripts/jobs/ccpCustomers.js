const axios = require("axios");

// run a simple command on the orders schema returning a simple true or false if there are any issues.

module.exports = async function(){
    try{
        const xmls=`
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem ="http://tempuri.org/">
            <soapenv:Header/>
            <soapenv:Body>
                <tem:GetCustomerById>
                    <tem:request>
                        <tem:BrandID>${process.env.CCP_BRAND}</tem:BrandID>
                        <tem:SecurityHash>${process.env.CCP_SECURITY_HASH}</tem:SecurityHash>
                        <tem:Content>17738025</tem:Content>
                    </tem:request>
                </tem:GetCustomerById>
            </soapenv:Body>
        </soapenv:Envelope>`;

        const response = await axios.post('https://wcfccpservicesbase.cloudcommercepro.com/CCPApiCustomerService.svc?wsdl=',
            xmls,
            {
                headers:
                {
                    'Content-Type': 'text/xml',
                    'SOAPAction': 'http://tempuri.org/ICCPApiCustomerService/GetCustomerById'
                }
            }
        )
        //console.log(response);

        if(response.data.includes("<ErrorLevel>0</ErrorLevel>") && response.data.includes("<Success>true</Success>")){
            return false;

        }else{
            return false;
        }
    } catch(err) {
        return false
    }
}