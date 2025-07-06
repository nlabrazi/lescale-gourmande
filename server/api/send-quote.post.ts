// server/api/send-quote.post.ts

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const {
    name, email, phone, eventType, status, guests, theme, callback, message
  } = body

  const token = process.env.ESCALE_TELEGRAM_TOKEN
  const chatId = process.env.ESCALE_TELEGRAM_CHAT_ID

  const text = `
<b>📩 Nouvelle demande de devis</b>

👤 <b>Nom :</b> ${name}
📧 <b>Email :</b> ${email}
📞 <b>Téléphone :</b> ${phone || 'Non renseigné'}
📅 <b>Type d’événement :</b> ${eventType}
👥 <b>Statut :</b> ${status}
👪 <b>Nombre d’invités :</b> ${guests}
🍽 <b>Spécialité :</b> ${theme}
🔁 <b>Être recontacté :</b> ${callback ? 'Oui' : 'Non'}
📝 <b>Message :</b> ${message || '—'}
  `.trim()

  try {
    await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: chatId,
        text,
        parse_mode: 'HTML'
      }
    })
    return { success: true }
  } catch (err) {
    console.error('Erreur Telegram:', err)
    return { success: false, error: 'Erreur lors de l’envoi Telegram' }
  }
})
