
// Import the Twilio Client Library
const Twilio = require('twilio');

// Set your account SID and auth token
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';

// Create a Twilio client
const client = new Twilio(accountSid, authToken);

// Get the phone number you want to send messages from
const fromNumber = '+15551234567';

// Get the list of phone numbers you want to send messages to
const toNumbers = ['+15556789012', '+15554321098'];

// Create a schedule for sending messages
const schedule = new Twilio.Scheduling.Schedule({
  start: new Date(),
  end: new Date(Date.now() + 3600000), // One hour from now
  frequency: 'hourly',
});

// Create a message for each phone number
const messages = toNumbers.map(toNumber => {
  return new Twilio.Messaging.Message({
    from: fromNumber,
    to: toNumber,
    body: 'This is an automated message.',
  });
});

// Send the messages
client.messages.create(messages);
