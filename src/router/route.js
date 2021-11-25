
import licenseUpload from "@/components/page/licenseUpload"

let route = [
    
    {
        path: '/',
        component: licenseUpload,
        name: 'licenseUpload',
    },

    {
        path: '*',
        redirect:'/'
    }
    
]

export default route