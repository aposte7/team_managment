import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ywbarhrwddyaeutukzpu.supabase.co";
const supabaseKey = import.meta.env.VITE_API_KEY;

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;
