import { prisma } from "../lib/db";
import { requireAuth } from "../lib/session";

export default async function layout({children}:{children:React.ReactNode}){
    await requireAuth();

    

    return{
        
    }
}