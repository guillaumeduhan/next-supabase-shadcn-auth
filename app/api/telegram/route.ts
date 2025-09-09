// app/api/telegram/route.ts
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

    const telegram_bot_token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    if (!telegram_bot_token || !chat_id) {
      return NextResponse.json(
        { status: 'error', message: 'Missing Telegram credentials' },
        { status: 500 }
      );
    }

    const encodedMessage = encodeURIComponent(rawMessage);
    const url = `https://api.telegram.org/bot${telegram_bot_token}/sendMessage?chat_id=${chat_id}&text=${encodedMessage}`;

    const telegramResponse = await fetch(url);
    const responseData = await telegramResponse.json();

    return NextResponse.json(
      { status: 'ok', message: rawMessage }
    );
  } catch (error: any) {
    return NextResponse.json(
      { status: 'error', message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}