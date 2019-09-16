export interface Email {
  emailPublicId: string;
  emailFrom: string;
  emailTo: string;
  emailCc: string;
  emailSubject: string;
  emailBody: string;
  emailFilesFromRequest: any;
  emailFilesSize: number;
  emailCreateDateTime: Date;
}
