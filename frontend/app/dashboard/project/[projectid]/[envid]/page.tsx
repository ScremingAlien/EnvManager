import PageWrapper from "@/app/dashboard/_components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContentHandler from "./__components/ContentHandler";
import EditButtonHandler from "./__components/EditButtonHandler";
import DeleteHandler from "./__components/DeleteHandler";
import { getEnvById } from "@/lib/api/project_env";

type Props = {
     params: Promise<{ envid: string, projectid: string }>
}

/*------------------------------------
Pending is 
saving animation or loading 
onSave button
--------------------------------------*/
 
export default async function page({ params }: Props) {
     const { envid, projectid } = await params;
     const { success, message, envFile } = await getEnvById({ envId: envid, projectId: projectid });

    
     return (
          <PageWrapper >
               <header className=" flex-row flex justify-between">
                    <span className=" text-xl text-black/80 font-medium">{envFile.title}</span>
                    <div className="  flex items-center gap-3">

                         {/* All button should be a client , seprate component */}
                         <Button variant={'outline'}>Download</Button>
                         <Button variant={'outline'}>Copy</Button>
                         <Separator orientation="vertical" />
                         <EditButtonHandler envid={envid} />
                         <DeleteHandler projectId={projectid} envid={envid} type="BUTTON" />

                    </div>
               </header>

               <ContentHandler envid={envid} content={envFile.content} projectId={projectid} />
          </PageWrapper>
     )
}