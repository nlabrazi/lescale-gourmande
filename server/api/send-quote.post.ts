import { logError, logInfo } from "../utils/api-logger";

type QuoteRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  status?: string;
  guests?: string;
  theme?: string;
  callback?: boolean;
  message?: string;
};

export default defineEventHandler(async (event) => {
  const body = await readBody<QuoteRequestBody>(event);
  const { name, email, phone, eventType, status, guests, theme, callback, message } = body;

  const token = process.env.ESCALE_TELEGRAM_TOKEN;
  const chatId = process.env.ESCALE_TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    logError(event, {
      message: "Telegram configuration is missing",
      statusCode: 500,
      metadata: {
        missingTelegramToken: !token,
        missingTelegramChatId: !chatId,
      },
    });

    throw createError({
      statusCode: 500,
      statusMessage: "Configuration serveur incomplète",
    });
  }

  const text = `
<b>📩 Nouvelle demande de devis</b>

👤 <b>Nom :</b> ${name}
📧 <b>Email :</b> ${email}
📞 <b>Téléphone :</b> ${phone || "Non renseigné"}
📅 <b>Type d’événement :</b> ${eventType}
👥 <b>Statut :</b> ${status}
👪 <b>Nombre d’invités :</b> ${guests}
🍽 <b>Spécialité :</b> ${theme}
🔁 <b>Être recontacté :</b> ${callback ? "Oui" : "Non"}
📝 <b>Message :</b> ${message || "—"}
  `.trim();

  try {
    await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      body: {
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      },
    });

    logInfo(event, {
      message: "Quote request sent to Telegram",
      statusCode: 200,
      metadata: {
        eventType: eventType || null,
        status: status || null,
        theme: theme || null,
        name: name || null,
        email: email || null,
        phone: phone || null,
        guests: guests || null,
        callback: Boolean(callback),
        quoteMessage: message || null,
      },
    });

    return { success: true };
  } catch (err) {
    logError(event, {
      message: "Telegram send failed",
      statusCode: 502,
      error: err,
      metadata: {
        eventType: eventType || null,
        status: status || null,
        theme: theme || null,
        name: name || null,
        email: email || null,
        phone: phone || null,
        guests: guests || null,
        callback: Boolean(callback),
        quoteMessage: message || null,
      },
    });

    throw createError({
      statusCode: 502,
      statusMessage: "Erreur lors de l’envoi Telegram",
    });
  }
});
