const ActiveAccountTemplate = `${'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
'<html dir="ltr" lang="en">\n'}  <head>
    <link rel="preload" as="image" href="/static/slack-logo.png" />
    <link rel="preload" as="image" href="/static/slack-twitter.png" />
    <link rel="preload" as="image" href="/static/slack-facebook.png" />
    <link rel="preload" as="image" href="/static/slack-linkedin.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <body
    style="background-color:#ffffff;margin:0 auto;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif">
    <div
      style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
      Confirm your email address
      <div>
       
      </div>
    </div>
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em;margin:0 auto;padding:0px 20px">
      <tbody>
        <tr style="width:100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="margin-top:32px">
              <tbody>
                <tr>
                  <td>
                    <img
                      alt="Slack"
                      height="36"
                      src="{{logo}}"
                      style="display:block;outline:none;border:none;text-decoration:none"
                      width="120" />
                  </td>
                </tr>
              </tbody>
            </table>
            <h1
              style="color:#1d1c1d;font-size:36px;font-weight:700;margin:30px 0;padding:0;line-height:42px">
              Cher(è) {{firstname}} {{lastname}},  veuillez confirmer votre adresse électronique
            </h1>
            <p
              style="font-size:20px;line-height:28px;margin-bottom:30px;margin-top:16px">
              Votre code de confirmation se trouve ci-dessous. Saisissez-le
              dans la fenêtre ouverte de votre navigateur et nous vous aiderons à vous connecter.
            </p>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="background:rgb(245, 244, 245);border-radius:4px;margin-bottom:30px;padding:40px 10px">
              <tbody>
                <tr>
                  <td>
                    <p
                      style="font-size:30px;line-height:24px;text-align:center;vertical-align:middle;margin-bottom:16px;margin-top:16px">
                      {{code}}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              style="font-size:14px;line-height:24px;color:#000;margin-bottom:16px;margin-top:16px">
              Si vous n'avez pas demandé cet e-mail, il n'y a pas lieu de s'inquiéter, vous pouvez l'ignorer en toute sécurité.
            </p>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
`;
export default ActiveAccountTemplate;
