const ActiveAccountTemplate = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
  "<html dir=\"ltr\" lang=\"en\">\n" +
  "  <head>\n" +
  "    <link rel=\"preload\" as=\"image\" href=\"/static/slack-logo.png\" />\n" +
  "    <link rel=\"preload\" as=\"image\" href=\"/static/slack-twitter.png\" />\n" +
  "    <link rel=\"preload\" as=\"image\" href=\"/static/slack-facebook.png\" />\n" +
  "    <link rel=\"preload\" as=\"image\" href=\"/static/slack-linkedin.png\" />\n" +
  "    <meta content=\"text/html; charset=UTF-8\" http-equiv=\"Content-Type\" />\n" +
  "    <meta name=\"x-apple-disable-message-reformatting\" />\n" +
  "    <!--$-->\n" +
  "  </head>\n" +
  "  <body\n" +
  "    style=\"background-color:#ffffff;margin:0 auto;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif\">\n" +
  "    <div\n" +
  "      style=\"display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0\">\n" +
  "      Confirm your email address\n" +
  "      <div>\n" +
  "       \n" +
  "      </div>\n" +
  "    </div>\n" +
  "    <table\n" +
  "      align=\"center\"\n" +
  "      width=\"100%\"\n" +
  "      border=\"0\"\n" +
  "      cellpadding=\"0\"\n" +
  "      cellspacing=\"0\"\n" +
  "      role=\"presentation\"\n" +
  "      style=\"max-width:37.5em;margin:0 auto;padding:0px 20px\">\n" +
  "      <tbody>\n" +
  "        <tr style=\"width:100%\">\n" +
  "          <td>\n" +
  "            <table\n" +
  "              align=\"center\"\n" +
  "              width=\"100%\"\n" +
  "              border=\"0\"\n" +
  "              cellpadding=\"0\"\n" +
  "              cellspacing=\"0\"\n" +
  "              role=\"presentation\"\n" +
  "              style=\"margin-top:32px\">\n" +
  "              <tbody>\n" +
  "                <tr>\n" +
  "                  <td>\n" +
  "                    <img\n" +
  "                      alt=\"Slack\"\n" +
  "                      height=\"36\"\n" +
  "                      src=\"{{logo}}\"\n" +
  "                      style=\"display:block;outline:none;border:none;text-decoration:none\"\n" +
  "                      width=\"120\" />\n" +
  "                  </td>\n" +
  "                </tr>\n" +
  "              </tbody>\n" +
  "            </table>\n" +
  "            <h1\n" +
  "              style=\"color:#1d1c1d;font-size:36px;font-weight:700;margin:30px 0;padding:0;line-height:42px\">\n" +
  "              Cher(è) {{firstname}} {{lastname}},  veuillez confirmer votre adresse électronique\n" +
  "            </h1>\n" +
  "            <p\n" +
  "              style=\"font-size:20px;line-height:28px;margin-bottom:30px;margin-top:16px\">\n" +
  "              Votre code de confirmation se trouve ci-dessous. Saisissez-le\n" +
  "              dans la fenêtre ouverte de votre navigateur et nous vous aiderons à vous connecter.\n" +
  "            </p>\n" +
  "            <table\n" +
  "              align=\"center\"\n" +
  "              width=\"100%\"\n" +
  "              border=\"0\"\n" +
  "              cellpadding=\"0\"\n" +
  "              cellspacing=\"0\"\n" +
  "              role=\"presentation\"\n" +
  "              style=\"background:rgb(245, 244, 245);border-radius:4px;margin-bottom:30px;padding:40px 10px\">\n" +
  "              <tbody>\n" +
  "                <tr>\n" +
  "                  <td>\n" +
  "                    <p\n" +
  "                      style=\"font-size:30px;line-height:24px;text-align:center;vertical-align:middle;margin-bottom:16px;margin-top:16px\">\n" +
  "                      {{code}}\n" +
  "                    </p>\n" +
  "                  </td>\n" +
  "                </tr>\n" +
  "              </tbody>\n" +
  "            </table>\n" +
  "            <p\n" +
  "              style=\"font-size:14px;line-height:24px;color:#000;margin-bottom:16px;margin-top:16px\">\n" +
  "              Si vous n'avez pas demandé cet e-mail, il n'y a pas lieu de s'inquiéter, vous pouvez l'ignorer en toute sécurité.\n" +
  "            </p>\n" +
  "            <table\n" +
  "              align=\"center\"\n" +
  "              width=\"100%\"\n" +
  "              border=\"0\"\n" +
  "              cellpadding=\"0\"\n" +
  "              cellspacing=\"0\"\n" +
  "              role=\"presentation\">\n" +
  "              <tbody>\n" +
  "                <tr>\n" +
  "                  <td>\n" +
  "                    <table\n" +
  "                      align=\"center\"\n" +
  "                      width=\"100%\"\n" +
  "                      border=\"0\"\n" +
  "                      cellpadding=\"0\"\n" +
  "                      cellspacing=\"0\"\n" +
  "                      role=\"presentation\"\n" +
  "                      style=\"margin-bottom:32px;padding-left:8px;padding-right:8px;display:block\">\n" +
  "                      <tbody style=\"width:100%\">\n" +
  "                        <tr style=\"width:100%\">\n" +
  "                          <td data-id=\"__react-email-column\" style=\"width:66%\">\n" +
  "                            <img\n" +
  "                              alt=\"Slack\"\n" +
  "                              height=\"36\"\n" +
  "                              src=\"/static/slack-logo.png\"\n" +
  "                              style=\"display:block;outline:none;border:none;text-decoration:none\"\n" +
  "                              width=\"120\" />\n" +
  "                          </td>\n" +
  "                          <td data-id=\"__react-email-column\">\n" +
  "                            <table\n" +
  "                              align=\"center\"\n" +
  "                              width=\"100%\"\n" +
  "                              border=\"0\"\n" +
  "                              cellpadding=\"0\"\n" +
  "                              cellspacing=\"0\"\n" +
  "                              role=\"presentation\">\n" +
  "                              <tbody>\n" +
  "                                <tr>\n" +
  "                                  <td>\n" +
  "                                    <table\n" +
  "                                      align=\"center\"\n" +
  "                                      width=\"100%\"\n" +
  "                                      border=\"0\"\n" +
  "                                      cellpadding=\"0\"\n" +
  "                                      cellspacing=\"0\"\n" +
  "                                      role=\"presentation\">\n" +
  "                                      <tbody style=\"width:100%\">\n" +
  "                                        <tr style=\"width:100%\">\n" +
  "                                          <td data-id=\"__react-email-column\">\n" +
  "                                            <a\n" +
  "                                              href=\"/\"\n" +
  "                                              style=\"color:#067df7;text-decoration-line:none\"\n" +
  "                                              target=\"_blank\"\n" +
  "                                              ><img\n" +
  "                                                alt=\"Slack\"\n" +
  "                                                height=\"32\"\n" +
  "                                                src=\"/static/slack-twitter.png\"\n" +
  "                                                style=\"display:inline;outline:none;border:none;text-decoration:none;margin-left:32px\"\n" +
  "                                                width=\"32\"\n" +
  "                                            /></a>\n" +
  "                                          </td>\n" +
  "                                          <td data-id=\"__react-email-column\">\n" +
  "                                            <a\n" +
  "                                              href=\"/\"\n" +
  "                                              style=\"color:#067df7;text-decoration-line:none\"\n" +
  "                                              target=\"_blank\"\n" +
  "                                              ><img\n" +
  "                                                alt=\"Slack\"\n" +
  "                                                height=\"32\"\n" +
  "                                                src=\"/static/slack-facebook.png\"\n" +
  "                                                style=\"display:inline;outline:none;border:none;text-decoration:none;margin-left:32px\"\n" +
  "                                                width=\"32\"\n" +
  "                                            /></a>\n" +
  "                                          </td>\n" +
  "                                          <td data-id=\"__react-email-column\">\n" +
  "                                            <a\n" +
  "                                              href=\"/\"\n" +
  "                                              style=\"color:#067df7;text-decoration-line:none\"\n" +
  "                                              target=\"_blank\"\n" +
  "                                              ><img\n" +
  "                                                alt=\"Slack\"\n" +
  "                                                height=\"32\"\n" +
  "                                                src=\"/static/slack-linkedin.png\"\n" +
  "                                                style=\"display:inline;outline:none;border:none;text-decoration:none;margin-left:32px\"\n" +
  "                                                width=\"32\"\n" +
  "                                            /></a>\n" +
  "                                          </td>\n" +
  "                                        </tr>\n" +
  "                                      </tbody>\n" +
  "                                    </table>\n" +
  "                                  </td>\n" +
  "                                </tr>\n" +
  "                              </tbody>\n" +
  "                            </table>\n" +
  "                          </td>\n" +
  "                        </tr>\n" +
  "                      </tbody>\n" +
  "                    </table>\n" +
  "                  </td>\n" +
  "                </tr>\n" +
  "              </tbody>\n" +
  "            </table>\n" +
  "            <table\n" +
  "              align=\"center\"\n" +
  "              width=\"100%\"\n" +
  "              border=\"0\"\n" +
  "              cellpadding=\"0\"\n" +
  "              cellspacing=\"0\"\n" +
  "              role=\"presentation\">\n" +
  "              <tbody>\n" +
  "                <tr>\n" +
  "                  <td>\n" +
  "                    <a\n" +
  "                      href=\"https://slackhq.com\"\n" +
  "                      rel=\"noopener noreferrer\"\n" +
  "                      style=\"color:#b7b7b7;text-decoration-line:none;text-decoration:underline\"\n" +
  "                      target=\"_blank\"\n" +
  "                      >Our blog</a\n" +
  "                    >   |   <a\n" +
  "                      href=\"https://slack.com/legal\"\n" +
  "                      rel=\"noopener noreferrer\"\n" +
  "                      style=\"color:#b7b7b7;text-decoration-line:none;text-decoration:underline\"\n" +
  "                      target=\"_blank\"\n" +
  "                      >Policies</a\n" +
  "                    >   |   <a\n" +
  "                      href=\"https://slack.com/help\"\n" +
  "                      rel=\"noopener noreferrer\"\n" +
  "                      style=\"color:#b7b7b7;text-decoration-line:none;text-decoration:underline\"\n" +
  "                      target=\"_blank\"\n" +
  "                      >Help center</a\n" +
  "                    >   |   <a\n" +
  "                      href=\"https://slack.com/community\"\n" +
  "                      rel=\"noopener noreferrer\"\n" +
  "                      data-auth=\"NotApplicable\"\n" +
  "                      data-linkindex=\"6\"\n" +
  "                      style=\"color:#b7b7b7;text-decoration-line:none;text-decoration:underline\"\n" +
  "                      target=\"_blank\"\n" +
  "                      >Slack Community</a\n" +
  "                    >\n" +
  "                    <p\n" +
  "                      style=\"font-size:12px;line-height:15px;color:#b7b7b7;text-align:left;margin-bottom:50px;margin-top:16px\">\n" +
  "                      ©2022 Slack Technologies, LLC, a Salesforce company.\n" +
  "                      <br />500 Howard Street, San Francisco, CA 94105, USA\n" +
  "                      <br /><br />All rights reserved.\n" +
  "                    </p>\n" +
  "                  </td>\n" +
  "                </tr>\n" +
  "              </tbody>\n" +
  "            </table>\n" +
  "          </td>\n" +
  "        </tr>\n" +
  "      </tbody>\n" +
  "    </table>\n" +
  "    <!--/$-->\n" +
  "  </body>\n" +
  "</html>\n"
export default ActiveAccountTemplate
