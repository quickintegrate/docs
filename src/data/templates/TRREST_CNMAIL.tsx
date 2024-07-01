import { type Template } from "@site/src/types";

export const sample: Template = {
  description: "Trigger REST and Connector MAIL",
  services: [
    {
      serviceName: "sendMailToMulInValidEmail",
      description:
        "Send mail with to config as atd#^&gdf.com , <receiver-mail-id>@gmail.com",
      input: "mail test for multiple invalid email",
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription:
            "Error Occured in INTMailProcessor. Cause: Failed messages: jakarta.mail.SendFailedException: Invalid Addresses;\n  nested exception is:\n\torg.eclipse.angus.mail.smtp.SMTPAddressFailedException: 553-5.1.3 The recipient address <atde123$$.com> is not a valid RFC 5321 address.\n553-5.1.3 For more information, go to\n553-5.1.3  https://support.google.com/a/answer/3221692 and review RFC 5321\n553 5.1.3 specifications. d9443c01a7336-1fac11d8c26sm1668825ad.110 - gsmtp\n",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "sendMailToMulInvalidEmail",
      },
    },
    {
      serviceName: "sendMailToIdNotExists",
      description: "SemdMail to id which does not exist",
      input: "send mail to invalid email id",
      output: JSON.stringify(
        { result: "mail sent to non existent id" },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "sendMailToIdNotExists",
      },
    },
    {
      serviceName: "mailWithoutTimeout",
      description:
        "setting timeout. if connection take longer that set time, gives timeout error.",
      input: "This is a new message. First try was successfull!!",
      output: JSON.stringify({ Result: "Mail Sent Successfully, " }, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath:
          "mailWithoutTimeOut?subject=Testing%20for%20mail%20Connector.%20Secon%20Try.&tempmail=<receiver-mail-id>@gmail.com",
      },
    },
  ],
};
