/**
 * Telegram Bot API Endpoint
 *
 * Accepts plain text messages via POST request and forwards them to a Telegram bot.
 * Requires TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables.
 *
 * Usage: POST /api/telegram with plain text body
 */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const rawMessage = await request.text(); // Expect plain text in the body

    if (!rawMessage) {
      return NextResponse.json(
        { status: 'error', message: 'Missing message' },
        { status: 400 }
      );
    }

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !chatId) {
      return NextResponse.json(
        { status: 'error', message: 'Missing Telegram credentials' },
        { status: 500 }
      );
    }

    const encodedMessage = encodeURIComponent(rawMessage);
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodedMessage}`;

    const telegramResponse = await fetch(url);

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { status: 'error', message: 'Failed to send message to Telegram' },
        { status: telegramResponse.status }
      );
    }

    return NextResponse.json({ status: 'ok', message: rawMessage });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { status: 'error', message },
      { status: 500 }
    );
  }
}
