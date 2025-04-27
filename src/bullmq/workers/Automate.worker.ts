import { Worker } from 'bullmq';

import redis from '@/config/redis';

export const UserActivationWorker = new Worker(
  'AutomateQueue',
  async job => {

    const ticketReq = await fetch("https://ticket-backend-qp1b.onrender.com/tickets", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWQzN2RmZGIzYmYyZDU5ZWVhZTc3ZGMiLCJlbWFpbCI6ImhhcmRzb250ZXNzaTJAZ21haWwuY29tIiwicm9sZXMiOlsiUEVSU09OQUwiXSwiaWF0IjoxNzI3ODk3NjQyLCJleHAiOjE3NTk0NTUyNDJ9.njfAcWKY0HY_nyQD_14lEkOdRmUWracRBxhvIpaJeYw",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "Referer": "https://ticket-frontend-zeta.vercel.app/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    });

    const jobPortalReq = await fetch("https://jobs-backend-r3o6.onrender.com/jobs/users", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXJkc29udGVzc2kyQGdtYWlsLmNvbSIsImlzRW5hYmxlZCI6dHJ1ZSwicm9sZXMiOlsiTUFOQUdFUiJdLCJpYXQiOjE3NDQyMzQ1NzIsImV4cCI6MTc3NTc5MjE3Mn0.rZKJK7ztX6GXMAE-MBHZMnhdEFZ0HnybqSB5wAuUVI8",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "Referer": "https://jobs-portal-frontend.vercel.app/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    });

    const walletReq = await fetch("https://wallet-back-eekf.onrender.com/graphql", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "Referer": "https://wallet-front.onrender.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "{\"variables\":{},\"query\":\"{\\n  userWallets {\\n    id\\n    balance\\n    currency {\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}",
      "method": "POST"
    });

    const shinyReq = await fetch("https://shiny-agency.onrender.com/freelances", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "Referer": "https://shiny-agency-lac.vercel.app/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    });

    await job.updateData({
      ticket: ticketReq.status,
      jobPortal: jobPortalReq.status,
      wallet: walletReq.status,
      shiny: shinyReq.status
    })

    await job.updateProgress(100)

  },
  {connection: redis}
);
