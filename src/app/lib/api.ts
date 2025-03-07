interface ChatResponse {
  message: string;
}

export const sendChatMessage = async (message: string): Promise<ChatResponse | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch response from backend');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }

  return null;
};
