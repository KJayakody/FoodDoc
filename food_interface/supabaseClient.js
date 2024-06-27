import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rffepcoyolbhmtmeqgtf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmZmVwY295b2xiaG10bWVxZ3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzOTYzMTEsImV4cCI6MjAzNDk3MjMxMX0.aWWEixlIYesHAIEf9dLrb6V14IhlomE9rD03kWRMsDQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);