import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bbfafgxecyoawvmkpsnw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiZmFmZ3hlY3lvYXd2bWtwc253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1NDI3OTcsImV4cCI6MjAwNDExODc5N30.ztN--q_wZBGhEYzfsK6S8XjsT2ciQrd2R1lciYtcyUU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
