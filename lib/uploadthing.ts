import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import type { OurFileRouter } from "@/app/api/uploadthings/core";
 
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
