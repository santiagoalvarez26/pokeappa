import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5Ym9ia3Npc2doa2V4aHNuYmFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzA2NjgsImV4cCI6MjA2Mjg0NjY2OH0.LLGT1v5C3vKXjAbOatc50TfXMvodn2nh-SaWhNqN0Vw';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5Ym9ia3Npc2doa2V4aHNuYmFxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzI3MDY2OCwiZXhwIjoyMDYyODQ2NjY4fQ.L-QHP1O_VZJlfuYv-Eq0mC553boa_rXiVyXnX5G9CEE';
export const supabase = createClient(supabaseUrl, supabaseKey);