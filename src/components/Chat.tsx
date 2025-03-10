'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonIcon from '@mui/icons-material/Person';
import { sendChatMessage } from '@/app/lib/api';

interface Message {
  message: string;
  timestamp: string;
  sender: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null); // Reference for auto-scrolling

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (): Promise<void> => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // Set User Message
    const userMessage: Message = {
      message: trimmed,
      timestamp: new Date().toISOString(),
      sender: 'User',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    // Endpint via lib/api to call backlened chat endpoint
    const response = await sendChatMessage(trimmed);

    if (response !== null && response !== undefined) {
      setMessages((prev) => [
        ...prev,
        {
          message: response.message,
          timestamp: new Date().toISOString(),
          sender: 'Agent',
        },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          message: 'Error: Something went wrong',
          timestamp: new Date().toISOString(),
          sender: 'Backend',
        },
      ]);
    }

    setLoading(false);
  };

  const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    return date.toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: 2,
      }}
    >
      <Box sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'flex',
                justifyContent: msg.sender === 'User' ? 'flex-end' : 'flex-start',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {msg.sender === 'Agent' && <ChatBubbleOutlineIcon color="action" />}
                {msg.sender === 'User' && <PersonIcon color="primary" />}
                <Paper
                  sx={{
                    p: 1.5,
                    bgcolor: msg.sender === 'User' ? '#e3f2fd' : '#fff',
                    maxWidth: '75%',
                  }}
                >
                  <ListItemText primary={msg.message} secondary={formatTimestamp(msg.timestamp)} />
                </Paper>
              </Box>
            </ListItem>
          ))}
        </List>
        {loading && <CircularProgress size={24} sx={{ display: 'block', mx: 'auto', my: 1 }} />}
        <div ref={messagesEndRef} />
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Send your message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton onClick={handleSend} color="primary">
                  <SendIcon />
                </IconButton>
              ),
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Chat;
